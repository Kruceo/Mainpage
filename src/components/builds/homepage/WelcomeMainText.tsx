import { useEffect, useState } from "react";
import "./WelcomeMainText.less";
import AButton from "../../essential/Button/AButton";
import { locale } from "../../../lib/lang";

export default function () {
    return <div className="wee">
        <h1>Kruceo</h1>
        <h2>
            {
                swParseText(locale.welcome.subtitle).map(textPart => {
                    if (typeof textPart == "object")
                        return <span>{textPart.length >= 2 ? <SwitchableText texts={textPart} interval={6000} /> : textPart[0]}</span>
                    return textPart
                })
            }
        </h2>
        <p>{locale.welcome.text}</p>
        <div className="buttons-container">
            <AButton href="https://github.com/kruceo" ><i className="icon-github"></i> Github</AButton>
            <AButton href="/projects"><i className="icon-cat_icon"></i> {locale.about.title}</AButton>
        </div>
    </div>
}

function swParseText(str: string) {
    const matchs = str.match(/\{.+\}/)
    if (!matchs) return [str]
    const splited = str.split(matchs[0])
    const parsedMatch = matchs[0].replace(/\{|\}/g, "").split(",")
    const all = [splited[0], parsedMatch, splited[1]]
    return all
}

export function SwitchableText(props: { texts: string[], interval?: number }) {
    const [sizes, setSizes] = useState<DOMRect[]>([])
    const longer = sizes.sort((a, b) => b.width - a.width).at(0)
    useEffect(() => {
        const items = [...document.querySelectorAll(".switchable-text .item")]
            .map(each => ({ el: each, clientRect: each.getBoundingClientRect() }))
        setSizes(items.map(e => e.clientRect))
    }, [])

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const handler = () => setIndex(index == (props.texts.length - 1) ? 0 : index + 1)
        const interval = setInterval(handler, props.interval ?? 3000)
        return () => clearInterval(interval)
    })

    return <span className="switchable-text" style={{ width: sizes.at(index)?.width, height: longer?.height }} >
        <span className="roller" style={{ transform: `translate(0px,-${sizes.reduce((a, n, i) => a + ((i < index) ? n.height : 0), 0)}px)` }} >
            {props.texts.map((text, i) =>
                <span key={i} className="item" id={`item-${i}`}>{text}</span>
            )}
        </span>
    </span>
}