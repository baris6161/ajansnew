/**
 * Single source of truth for Funda Ekiz contact data.
 * Used by both the NFC page (HTML) and the /api/nfc/vcf route (vCard).
 * Change data here only — both places update automatically.
 */
export const CONTACT = {
  /** vCard N field: last;first */
  nameLast:    'Ekiz',
  nameFirst:   'Funda',
  /** Full display name */
  fn:          'Funda Ekiz',
  /** Organisation */
  org:         'Ajans Köln',
  /** Job title shown on page and in vCard TITLE field */
  title:       'Fair Organisation',
  /** E.164 format (no spaces) — used in TEL vCard field and tel: href */
  tel:         '+491727532501',
  /** Human-readable format — shown on page */
  telDisplay:  '+49 172 7532501',
  /** E-mail */
  email:       'ajanskoeln@gmail.com',
  /** Instagram handle (without @) */
  instagram:   'ajanskoeln',
  /** Website */
  url:         'https://ajanskoeln.de',
  /** Profile photo path (relative to /public) */
  photo:       '/images/ajans-koeln/funda-ekiz-about-portrait.png',
} as const
