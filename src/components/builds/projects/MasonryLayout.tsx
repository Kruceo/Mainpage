import React, { useEffect, useState } from "react";

export default function (props: { children: React.ReactNode[], id?: string, rules?: Record<number, number> }) {

    const [windowW, setWindowW] = useState(0)
    useEffect(() => {
        setWindowW(window.document.body.clientWidth)
        const handler = (e: UIEvent) => {
            setWindowW((e.target as Window).document.body.clientWidth)
        }
        window.addEventListener("resize", handler)
        return () => window.removeEventListener("resize", handler)
    }, [])

    let va: React.ReactNode[][] = [[]]

    let rules: [string, number][] = [["1", 1]]
    if (props.rules)
        rules = Object.entries(props.rules)

    rules = rules.sort((a, b) => parseInt(b[0]) - parseInt(a[0]))
    for (const rule of rules) {
        if (windowW < parseInt(rule[0])) {
            va = []
            for (let i = 0; i < rule[1]; i++) {
                va.push([])
            }
        }
    }

    let f = 0
    props.children.forEach((it, index) => {
        va[f].push(it)
        f++
        if (f == va.length) f = 0
    })

    return <>
        <div className="masonry-grid" id={props.id} style={{ gap: "30px", display: "grid", gridTemplateColumns: `repeat(${va.length},1fr)` }}>
            {
                va.map((colContent, i) => {
                    return <div key={`col-${i}`} className="column" style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                        {colContent.map(each => each)}
                    </div>
                })
            }
        </div>
    </>
}