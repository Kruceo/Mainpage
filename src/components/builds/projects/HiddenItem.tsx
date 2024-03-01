import { useState } from "react"
import "./HiddenItem.less"
export default function HideItem(props: {buttonContent:React.ReactNode,children:React.ReactNode,className?:string}) {
    const [hidden, setHidden] = useState(true)
    const id = "id-" + Math.floor(Math.random() * 10000)
    const handler = () => {
        const hiddenContentFrameEl: HTMLDivElement | null = document.querySelector("#" + id + '>.hidden-content-frame')
        if (!hiddenContentFrameEl) return;
        const hiddenContentEl: HTMLDivElement | null = hiddenContentFrameEl.querySelector('.hidden-content')
        if (!hiddenContentEl) return;
        // hiddenContentEl.style.background = 'red'
        const height = hiddenContentEl.clientHeight
        // hiddenContentEl.innerHTML = height +' ' + hidden() + ' ' + Math.random()
        if (hidden) {
            hiddenContentFrameEl.style.height = height + 'px'
        }
        else {
            hiddenContentFrameEl.style.height = '0px'
        }
        setHidden(!hidden)
    }
    return <div id={id} className={`hide-item ${hidden ? "hidden" : ""} ${props.className ?? ""}`}>
        <div onClick={() => {
            handler()
        }} className="button">
            {props.buttonContent ?? "Press this"}
            <div className="expand-symbol" />
        </div>
        <div className="hidden-content-frame">
            <div className="hidden-content">
                {props.children}
            </div>
        </div>
    </div>
}