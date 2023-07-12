import SwitchButton from "../SwitchButton/SwitchButton";
import "./LightButton.less"
export default function LightButton() {
    switchMode(loadValue())
    return <SwitchButton id="light-button" defaultValue={loadValue()} width={40} height={20} onChange={(event: { activated: boolean }) => {
        switchMode(event.activated)
        window.localStorage.setItem('dark-mode', event.activated ? '1' : '0')

    }} />
}

function switchMode(value:boolean) {
    if (value == false) {
        const body = document.querySelector('body')
        body?.classList.add("light-mode")
        body?.classList.remove('dark-mode')
    }

    else {
        const body = document.querySelector('body')
        body?.classList.add("dark-mode")
        body?.classList.remove('light-mode')
    }
}

function loadValue() {

    let raw = window.localStorage.getItem('dark-mode')
    if (!raw) return false
    if (raw == '1') return true
    return false

}