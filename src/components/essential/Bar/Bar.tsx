export interface BarElement {

}
import { PropsWithChildren, ReactNode } from "react"
import "./Bar.less"
import { Anchor } from "milhas"
import { MilhasAnchorElement } from "milhas/dist/types/src/components/Anchor/Anchor"
import LightButton from "../LightButton/LightButton"
import { AnchorAttributes } from "milhas/dist/types/components/Anchor/Anchor"

export default function Bar() {

    document.addEventListener('scroll',(evt)=>{
        if(document.documentElement.scrollTop > 200)
        document.querySelector('#bar')?.classList.add('hidden')
        else document.querySelector('#bar')?.classList.remove('hidden')
        
    })

    return <header id="header">

        <header id="bar">
            <div id="bar-content">
                <LightButton></LightButton>
                <div id="offer">
                </div>
                <div id="contacts">
                    <Contact href="https://twitter.com/RGBrat">
                        <img src="/twitter.png" alt="twitter" title="Twitter"/>
                    </Contact>
                    <Contact href="https://github.com/kruceo">
                        <img src="/github.png"  alt="github"  title="Github"/>
                    </Contact>
                    <Contact href="https://www.npmjs.com/~kruceo">
                        <img src="/npm.png"     alt="npm"     title="NPM"/>
                    </Contact>
                </div>
            </div>
        </header>
        <header id="sub-bar">
            <div id="bar-content">
                <img id="logo" src="https://raw.githubusercontent.com/Kruceo/cdn/main/icons/cat_icon_colored.svg"></img>
                <div className="left" id="buttons">
                    <BarButton href="/">Home</BarButton>
                    <BarButton href="/projects">Projects</BarButton>
                    <BarButton href="/about">About</BarButton>
                </div>
                <div className="right" id="buttons">
                   <HighlightBarButton href="/donate">🎁 Donate</HighlightBarButton>
                </div>
            </div>
        </header>
    </header>
}

function Contact(props: {children: ReactNode,href:string}) {
    return <a href={props.href} target="_blank" id="contact">{props.children}</a>
}

function BarButton(props: MilhasAnchorElement) {
    return <div id="bar-button">
        <Anchor {...props}>{props.children}</Anchor>
        <div id="sub-line"></div>
    </div>
}
function HighlightBarButton(props: AnchorAttributes) {
    return <div id="highlight-bar-button">
        <Anchor className="button" href={props.href}>{props.children}</Anchor>
    </div>
}