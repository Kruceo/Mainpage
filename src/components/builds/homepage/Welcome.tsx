import { useEffect, useRef, useState } from "react"
import { locale } from "../../../lib/lang"
import "./Welcome.less"
interface Chunk { w: number, h: number, x: number, y: number, src: string }
export default function Welcome() {
    // return <Content className=" first"><iframe className="welcome" src="https://kruceo.com/wallpaper" frameBorder={0} style={{ width: "100%" }}>
    //     <h2 style={{
    //         position: "absolute",
    //         left: 100,
    //         color: 'white',
    //         fontSize: 44,
    //         fontWeight: 'bold',
    //         textAlign: 'center'
    //     }}>Any good<br /> <span style={{ fontSize: 84, color: 'white', }}>welcome</span></h2>
    // </iframe>
    // </Content>
    // return <section className="welcome">
    //     <div>
    //         
    //     </div>
    // </section>
    const sec = useRef<HTMLDivElement>(null)
    const [chunks, setChunks] = useState<Chunk[]>([])
    function genChunks() {
        if (!sec.current) return

        let f = document.createElement("div")
        let i = document.createElement("div")
        i.className = "logo"
        f.className = "chunk"

        f.appendChild(i)

        const totalWidth = Math.max(sec.current.clientWidth, sec.current.clientHeight)
        // const totalHeight = sec.current.clientHeight

        let wChunks = 4
        let yChunks = 4
        if (totalWidth > 500) {
            yChunks = 4
            wChunks = 4
        }
        if (totalWidth > 800) {
            yChunks = 6
            wChunks = 6
        }
        if (totalWidth > 1200) {
            yChunks = 10
            wChunks = 10
        }
        if (totalWidth > 1600) {
            yChunks = 12
            wChunks = 12
        }

        const chunkWidth = totalWidth / wChunks
        const chunkHeight = totalWidth / yChunks

        let preChunks: Chunk[] = []
        for (let x = 0; x < wChunks; x++) {
            for (let y = 0; y < yChunks; y++) {
                preChunks.push({ h: chunkWidth, w: chunkWidth, x: chunkWidth * x, y: chunkHeight * y, src: randomImage() })
            }
        }

        setChunks(preChunks)
    }

    useEffect(() => {
        genChunks()
        window.addEventListener("resize", genChunks)
    }, [null])

    useEffect

    return <section className="welcome" >
        <div className="dome" ref={sec}>

            {
                chunks.map((chunk) => <div className="chunk" style={{
                    animationDelay: Math.random() * 2000 + 'ms',
                    animationDuration: 2 + Math.random() * 3 + "s",
                    left: `${chunk.x}px`,
                    top: `${chunk.y}px`,
                    width: chunk.w + 'px',
                    height: chunk.h + 'px'
                }} key={chunk.x + "x" + chunk.y}>
                    <div className="logo" style={{ backgroundImage: `url(${chunk.src})` }}></div>
                </div>)
            }
            <h2>{locale.welcome}</h2>
        </div>
    </section>
}

function randomImage() {
    const images = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042",
        // "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
        "https://i1.wp.com/albertfattal.com/wp-content/uploads/2018/03/Tensorflow_logo.svg.png?resize=1200%2C1283&ssl=1",
        "https://brandlogos.net/wp-content/uploads/2021/11/java-logo.png",
        "https://logos-download.com/wp-content/uploads/2019/01/Golang_Logo.png",
        "http://blog.espol.edu.ec/taws/files/2015/11/logo-small.png",
        "https://logosdownload.com/logo/vue.js-logo-big.png",
        "https://osawards.com/javascript/pic/2022/SolidJS.png",
        "https://vitejs.dev/logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    ]
    return images[Math.floor(Math.random() * images.length)]
}