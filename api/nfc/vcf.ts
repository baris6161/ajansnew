import type { VercelRequest, VercelResponse } from '@vercel/node'
import { CONTACT } from '../../src/config/contact'

/**
 * GET /api/nfc/vcf
 *
 * Returns a vCard 3.0 file.
 *
 * iOS Safari / Android Chrome open the Contacts-App "Add Contact" dialog
 * when the response has:
 *   - Content-Type: text/vcard  (NOT text/x-vcard, NOT application/octet-stream)
 *   - NO Content-Disposition: attachment  (attachment → Files app, not Contacts)
 *   - NO download="" attribute on the <a> tag in HTML
 *   - strict CRLF (\r\n) line endings throughout
 */
export default function handler(_req: VercelRequest, res: VercelResponse) {
  // Build vCard lines — join with CRLF, trailing CRLF required by RFC 6350
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${CONTACT.nameLast};${CONTACT.nameFirst};;;`,
    `FN:${CONTACT.fn}`,
    `ORG:${CONTACT.org}`,
    `TITLE:${CONTACT.title}`,
    `TEL;TYPE=CELL,VOICE:${CONTACT.tel}`,
    `EMAIL;TYPE=INTERNET,PREF:${CONTACT.email}`,
    `URL:${CONTACT.url}`,
    `X-SOCIALPROFILE;type=instagram;x-user=${CONTACT.instagram}:https://instagram.com/${CONTACT.instagram}`,
    'END:VCARD',
    '', // trailing CRLF
  ]

  const vcf = lines.join('\r\n')

  // text/vcard — recognised by iOS Contacts and Android Contacts
  res.setHeader('Content-Type', 'text/vcard; charset=utf-8')
  // Omitting Content-Disposition entirely is the most reliable way to trigger
  // the "Add to Contacts" sheet on iOS Safari and Android Chrome/Samsung Browser.
  res.setHeader('Cache-Control', 'no-store')
  res.status(200).send(vcf)
}
