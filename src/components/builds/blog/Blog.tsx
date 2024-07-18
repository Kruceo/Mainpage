import { useEffect, useRef } from "react";
import Content from "../../essential/Content/Content";
import { parse } from 'marceo'
import Bar from "../../essential/Bar/Bar";
import "./Markdown-hljs.css"
export default function Blog() {

    document.title = "Kruceo - Blog"

    const markdownViewerEl = useRef<HTMLDivElement>(null)
    useEffect(() => {
        (async ()=>{
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
        <div style={{"width":"100%"}} ref={markdownViewerEl} id="markdown-viewer">Markdown</div>
    </Content></>
}