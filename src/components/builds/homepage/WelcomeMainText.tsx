import { useEffect, useState } from "react";
import "./WelcomeMainText.less";
import Button from "../../essential/Button/Button";
import AButton from "../../essential/Button/AButton";

export default function () {
    const [index, setIndex] = useState(0)
    const texts = ["creation", "Kruceo"]
    return <div className="wee" onClick={() => setIndex(index == (texts.length - 1) ? 0 : index + 1)}>
        <h1>Kruceo</h1>
        <h2>
            Creating to enhance code.<br />
            Coding to enhance <span><SwitchableText texts={texts} index={index} /></span>.
        </h2>
        <p>Solutions in infrastructure, frontend, backend, <br />DevOps, design, and beyond.</p>
        <div className="buttons-container">
            <AButton href="https://github.com/kruceo" ><i className="icon-github"></i> Github</AButton>
            <AButton href="/projects"><i className="icon-cat_icon"></i> About</AButton>
        </div>
    </div>
}

function SwitchableText(props: { texts: string[], index: number }) {
    const [sizes, setSizes] = useState<DOMRect[]>([])
    const longer = sizes.sort((a, b) => b.width - a.width).at(0)
    useEffect(() => {
        const items = [...document.querySelectorAll(".switchable-text .item")]
            .map(each => ({ el: each, clientRect: each.getBoundingClientRect() }))
        setSizes(items.map(e => e.clientRect))
    }, [])

    const index = props.index

    return <span className="switchable-text" style={{ width: sizes.at(index)?.width, height: longer?.height }} >
        <span className="roller" style={{ transform: `translate(0%,-${index * 100 / sizes.length}%)` }} >
            {props.texts.map((text, i) =>
                <span key={i} className="item" id={`item-${i}`}>{text}</span>
            )}
        </span>
    </span>
}