import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(_req: VercelRequest, res: VercelResponse) {
  const vcf = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Ekiz;Funda;;;',
    'FN:Funda Ekiz',
    'ORG:Ajans Köln',
    'TITLE:Fair Organisation',
    'TEL;TYPE=CELL:+491727532501',
    'EMAIL;TYPE=INTERNET:ajanskoeln@gmail.com',
    'X-SOCIALPROFILE;type=instagram;x-user=ajanskoeln:https://instagram.com/ajanskoeln',
    'URL:https://ajanskoeln.de',
    'END:VCARD',
  ].join('\r\n')

  res.setHeader('Content-Type', 'text/vcard; charset=utf-8')
  res.setHeader('Content-Disposition', 'attachment; filename="ajans-koeln.vcf"')
  res.setHeader('Cache-Control', 'no-store')
  res.status(200).send(vcf)
}
