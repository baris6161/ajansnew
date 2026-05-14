import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

interface ReviewPayload {
  nameOrCompany?: string
  rating: unknown
  comment: unknown
  honeypot?: unknown  // must be empty — bot trap
}

function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, '').trim()
}

function starLine(n: number): string {
  return '★'.repeat(n) + '☆'.repeat(5 - n)
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'method_not_allowed' })
  }

  const body = req.body as ReviewPayload

  // ── Honeypot ────────────────────────────────────────────────────
  if (body.honeypot) {
    // Bot filled the hidden field — respond silently as if success
    return res.status(200).json({ ok: true })
  }

  // ── Validate rating ─────────────────────────────────────────────
  const rating = Number(body.rating)
  if (!rating || rating < 1 || rating > 5 || !Number.isInteger(rating)) {
    return res.status(400).json({ error: 'rating_required' })
  }

  // ── Validate comment ────────────────────────────────────────────
  const comment = stripHtml(String(body.comment ?? ''))
  if (comment.length < 3) {
    return res.status(400).json({ error: 'comment_required' })
  }
  if (comment.length > 2000) {
    return res.status(400).json({ error: 'comment_too_long' })
  }

  // ── Sanitize optional name ──────────────────────────────────────
  const name = stripHtml(String(body.nameOrCompany ?? '')).slice(0, 100)

  // ── Build email ─────────────────────────────────────────────────
  const now = new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Berlin' })
  const emailTo   = process.env.REVIEW_EMAIL_TO   ?? 'ajanskoeln@gmail.com'
  const emailFrom = process.env.REVIEW_EMAIL_FROM ?? process.env.SMTP_USER ?? emailTo

  const subject = 'Yeni NFC Yorumu'
  const text = [
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    'AJANS KÖLN — Yeni Değerlendirme',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    '',
    `Kaynak  : NFC Sayfası`,
    `Tarih   : ${now}`,
    '',
    `Ad/Firma: ${name || '(belirtilmedi)'}`,
    `Puan    : ${starLine(rating)}  (${rating} / 5)`,
    '',
    'Yorum:',
    comment,
    '',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
  ].join('\n')

  // ── SMTP check ──────────────────────────────────────────────────
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('[reviews/submit] SMTP env vars not configured')
    return res.status(503).json({ error: 'mail_not_configured' })
  }

  // ── Send ────────────────────────────────────────────────────────
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Ajans Köln NFC" <${emailFrom}>`,
      to: emailTo,
      subject,
      text,
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('[reviews/submit] Send error:', err)
    return res.status(500).json({ error: 'send_failed' })
  }
}
