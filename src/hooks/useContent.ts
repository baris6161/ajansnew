import { useLang } from '../context/lang'
import { translations } from '../content/translations'

/** Gibt den vollständigen Content-Block für die aktuell gewählte Sprache zurück. */
export function useContent() {
  const { lang } = useLang()
  return translations[lang]
}
