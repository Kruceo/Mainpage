import { useEffect, useState } from "react"
import "./HiddenItem.less"
export default function HideItem(props: { defaultOpened?: boolean, buttonContent: React.ReactNode, children: React.ReactNode, className?: string }) {
    const [hidden, setHidden] = useState(true)
    const [id,] = useState("hc-" + Math.floor(Math.random() * 10000))
    const handler = () => {
        const hiddenContentFrameEl: HTMLDivElement | null = document.querySelector("#" + id + '>.hidden-content-frame')
        if (!hiddenContentFrameEl) return console.warn("No hidden content frame! " + id);
        const hiddenContentEl: HTMLDivElement | null = hiddenContentFrameEl.querySelector('.hidden-content')
        if (!hiddenContentEl) throw new Error("No hidden content! " + id);;
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
    if (props.defaultOpened)
        useEffect(() => { setTimeout(handler, 250) }, [])
    return <div id={id} className={`hide-item ${hidden ? "hidden" : ""} ${props.className ?? ""}`}>
        <div onClick={() => {
            handler()
        }} className="button">
            <div className="hidden-title">
                {props.buttonContent ?? "Press this"}
            </div>
            <div className="expand-symbol" />
        </div>
        <div className="hidden-content-frame">
            <div className="hidden-content">
                {props.children}
            </div>
        </div>
    </div>
}