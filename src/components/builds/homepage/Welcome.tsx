import { useEffect, useRef } from "react"
import "./Welcome.less"
import WelcomeMainText from "./WelcomeMainText"
import Object3DViewer from "./Object3DViewer"


export default function Welcome() {
    const sec = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handler = () => {
            const el: HTMLDivElement = document.querySelector(".welcome>.dome>.dome-bg") as any
            const sensivity = 5
            let opacity = 1 - window.scrollY / window.screen.height * sensivity
            if (opacity > 0.3) opacity = 0.3
            if (opacity >= -0.1)
                el.style.opacity = opacity.toString()
        }
        window.addEventListener("scroll", handler)
        return () => window.removeEventListener('scroll', handler)
    }, [])


    


    return <section className="welcome" >
        <div className="dome" ref={sec}>
            <div className="dome-bg">

            </div>
            <Object3DViewer/>
            <WelcomeMainText />
        </div>
    </section>
}

