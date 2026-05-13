import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

export type Lang = 'de' | 'en' | 'tr'

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
}

const LangContext = createContext<LangCtx>({ lang: 'de', setLang: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('de')
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
