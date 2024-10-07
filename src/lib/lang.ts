import enUS from "../../locales/en-US.json" assert {type: "json"}
import ptBR from "../../locales/pt-BR.json" assert {type: "json"}
// import frFR from '../../locales/fr-FR.json' assert {type: "json"}
import jaJP from '../../locales/ja-JP.json' assert {type: "json"}
const langs: Record<string, typeof ptBR> = {
    "en-US": enUS,
    "pt-BR": ptBR,
    // "fr-FR": frFR,
    "ja-JP": jaJP
}

let selectedLang = navigator.language ?? "en-US"

const userLang = localStorage.getItem("user-lang")
if (userLang)
    selectedLang = userLang

// Default lang
if (!langs[selectedLang])
    selectedLang = Object.keys(langs)[0]

const langList = Object.keys(langs)
const locale = Object.assign(ptBR, langs[selectedLang])
export { langs, locale, langList, selectedLang }