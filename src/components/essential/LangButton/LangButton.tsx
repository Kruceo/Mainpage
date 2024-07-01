import { useEffect, useState } from "react"
import "./LangButton.less"
import { langList, selectedLang } from "../../../lib/lang"

export default function LangButton() {
    const [clicked, setClicked] = useState(false)
    const [over, setOver] = useState(false)
    const [selected, setSelected] = useState(langList.indexOf(selectedLang))

    const clickHandler = () => {
        if (!clicked) setClicked(true)
        let newIndex = selected
        if (newIndex == langList.length - 1) newIndex = 0
        else newIndex++
        localStorage.setItem("user-lang", langList[newIndex])
        setSelected(newIndex)
    }

    useEffect(() => {
        if (!over && clicked) {
            setTimeout(() => {
                window.location.reload()
            }, 700)
        }
    }, [over, clicked])

    return <>
        <button id="lang-button" onClick={clickHandler} onMouseEnter={() => setOver(true)} onMouseOut={() => setOver(false)}>
            <img src={`https://flagsapi.com/${langList[selected].split("-")[1]}/flat/24.png`} />
        </button>
        {
            //Preload images
            langList.map(lang => {
                return <img key={lang+"img"} style={{display:"none"}} src={`https://flagsapi.com/${lang.split("-")[1]}/flat/24.png`}></img>
            })
        }
    </>

}