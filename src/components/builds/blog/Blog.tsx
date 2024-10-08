import { useEffect, useRef } from "react";
import Content from "../../essential/Content/Content";
import { parse } from 'marceo'
import Bar from "../../essential/Bar/Bar";
import "./Markdown-hljs.css"
import "./Blog.less"
export default function Blog() {

    document.title = "Kruceo - Blog"

    const markdownViewerEl = useRef<HTMLDivElement>(null)
    useEffect(() => {
        (async () => {
            const res = await fetch("/post.md")
            const txt = await res.text()
            const html = parse(txt)
            if (!markdownViewerEl.current) return
            markdownViewerEl.current.innerHTML = html
        })()
    }, [])

    return <>
        <Bar></Bar>
        <Content>
            <div className="banner">
                {/* <figure className="filter"></figure> */}
                <div>
                    <h1>Usando a nova Ferramenta de geração de imagem FLUX AI locamente</h1>
                    <p>Flux AI conquistou um grande publico pela perfeição em detalhes, mas como posso usar isso diretamente no meu computador?</p>
                    <ul className="tags">
                        <li>AI</li>
                        <li>WINDOWS</li>
                        <li>IMAGE</li>
                    </ul>
                </div>
                <img src="ai.png" alt="" />
            </div>
            <div style={{ "width": "100%" }} ref={markdownViewerEl} id="markdown-viewer">Markdown</div>
        </Content></>
}