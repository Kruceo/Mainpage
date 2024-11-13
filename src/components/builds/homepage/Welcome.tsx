import { useEffect, useRef, useState } from "react"
// import { locale } from "../../../lib/lang"
import "./Welcome.less"
import WelcomeMainText from "./WelcomeMainText"
interface Chunk { w: number, h: number, x: number, y: number, src: string }
export default function Welcome() {
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

        let wChunks = 2
        let yChunks = 2
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
                preChunks.push({ 
                    h: chunkWidth, 
                    w: chunkWidth, 
                    x: chunkWidth * x, 
                    y: chunkHeight * y, 
                    src: randomImage() 
                })
            }
        }

        setChunks(preChunks)
    }

    useEffect(() => {
        genChunks()
        const handler = () => {
            const t = setTimeout(() => {
                genChunks()
            }, 2500)
            
            const currentWInterval = window.localStorage.getItem("resize-welcome-interval")
            clearTimeout(currentWInterval ? parseInt(currentWInterval) : undefined)
            window.localStorage.setItem("resize-welcome-interval", t.toString())
        }
        window.addEventListener("resize", handler)
        return () => window.removeEventListener('resize', handler)
    }, [])

    return <section className="welcome" >
        <div className="dome" ref={sec}>
            {
                chunks.map((chunk) => <div className="chunk" style={{
                    animationDelay: `${Math.random() * 2000}ms`,
                    animationDuration: `${2 + Math.random() * 3}s`,
                    left:   `${chunk.x}px`,
                    top:    `${chunk.y}px`,
                    width:  `${chunk.w}px`,
                    height: `${chunk.h}px`
                }} key={`${chunk.x}x${chunk.y}`}>
                    <div className="logo" style={{ backgroundImage: `url(${chunk.src})` }}></div>
                </div>)
            }
            {/* <h2>Art Powered by Code.</h2> */}
            {/* <h2>Fusion of Function and Form</h2> */}
            <WelcomeMainText/>
            
        </div>
    </section>
}

function randomImage() {
    const images = [
        "https://www.svgrepo.com/download/374118/tailwind.svg",
        // "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
        "https://upload.wikimedia.org/wikipedia/pt/3/30/Java_programming_language_logo.svg",
        "https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg",
        "https://www.svgrepo.com/download/374071/sequelize.svg",
        "https://raw.githubusercontent.com/vuejs/art/master/logo.svg",
        "https://svglogos.net/wp-content/uploads/solidjs-icon.svg",
        "https://vitejs.dev/logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    ]
    return images[Math.floor(Math.random() * images.length)]
}