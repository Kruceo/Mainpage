import { useEffect, useState } from "react"
import "./HiddenItem.less"
interface HiddenItem {
    children: any,
    label: string | any,
    id?: string,
    class?: string
}
export default function HiddenItem(props: HiddenItem) {
    const [id, ] = useState(`id-${document.childElementCount}${Math.floor(Math.random() * 1000)}`)
    const [height, setHeight] = useState(10000)
    const [opened, setOpened] = useState(true)
    useEffect(() => {
        if (height != 10000) return;
        const el = document.querySelector(`.${id}.children`)
        if (!el) return;

        setHeight(el.getBoundingClientRect().height ?? 0)
        setOpened(false)
    }, [])
    return <div id={props.id}
        style={{ position: height >= 9999 ? "fixed" : "relative",left:height >= 9999?"-1000px":"auto", transition: "opacity 1ms" }}
        className={`hidden-item ${props.class} ${opened ? 'opened' : ""}`}
        onClick={() => setOpened(!opened)}>
        <div className={`label`}>{props.label}
            <p className="button">{opened ? "+" : "−"}</p>
        </div>
        <div className={`${id} children`} style={{
            maxHeight: opened ? height : 0, overflow: "hidden", transition: "max-height 200ms ease-in-out"
        }}>
            {props.children}
        </div>
    </div>
}