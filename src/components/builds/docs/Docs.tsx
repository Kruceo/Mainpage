import { parse } from 'marceo'
import { useEffect, useRef } from 'react'
import "./Markdown.less"
import "./Docs.less"
// import "./Markdown-hljs.css"
import Content from '../../essential/Content/Content'
import Bar from '../../essential/Bar/Bar'
export default function Docs() {
    const ref = useRef<HTMLDivElement>(null)
    const url = new URL(window.location.href).searchParams.get('url')

    useEffect(() => {
        if (url)
            (async () => {
                const res = await fetch(url)
                let  data = await res.text()
                
                // data = data.replace(/<sub>(.*?)<\/sub>/g,(r:string)=>r.slice(5,r.length-6))
                
                let html = parse(data)

                html.match(/<img .*?src=".*?".*>/g)?.forEach((each:string) => {
                    const src = each.match(/(?<=src=").+?(?=")/g)
                    if (!src || src[0].startsWith("http")) return
                    let toReplace = url.slice(url.lastIndexOf("/"))    
                    let newUrl = url.replace(toReplace, "/" + src[0].replace(/\.\/|^\//,""))
                    const newHtml = each.replace(/src=".*"/, `src="${newUrl}"`)
                    
                    html = html.replace(each, newHtml)
                })
                if (ref.current)
                    ref.current.innerHTML = html
                    document.querySelectorAll("a").forEach((each)=>{
                        
                        if(each.href.startsWith("https://github.com/") && each.href.endsWith(".md")){
                            let href = each.href
                            href = href.replace(/(?<=\/.+\/.+)\/tree/,'')
                            href = href.replace(/github\.com/,'raw.githubusercontent.com')
                            each.href = "/doc?url="+href
                        }
                    })
            })()
    }, [])

    return <>
       {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/obsidian.min.css"></link> */}
       <link rel="stylesheet" href="https://raw.githubusercontent.com/highlightjs/highlight.js/main/src/styles/magula.css" />
        <Bar></Bar>
        <Content className='first'>
            <section className='inner'>
               
                <div className='markdown-viewer' style={{margin:0}} ref={ref}>
                    
                </div>
            </section>
        </Content>
    </>
}