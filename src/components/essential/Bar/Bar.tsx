export interface BarElement {

}
import { ReactNode } from "react"
import "./Bar.less"
import { Anchor, AnchorAttributes } from "milhas"
import LightButton from "../LightButton/LightButton"
import Mobile from "./Mobile"
import { locale } from "../../../lib/lang"
import LangButton from "../LangButton/LangButton"

export default function Bar() {

    document.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 200)
            document.querySelector('#bar')?.classList.add('hidden')
        else document.querySelector('#bar')?.classList.remove('hidden')

    })

    return <header id="header">

        <header id="bar">
            <div id="bar-content">
                <LightButton></LightButton>
                <LangButton></LangButton>
                <div id="offer">
                </div>
                <div id="contacts">
                    <Contact href="https://twitter.com/RGBrat">
                        <i className="icon-youtube" title="twitter"></i>
                    </Contact>
                    <Contact href="https://github.com/kruceo">
                        <i className="icon-github" title="github"></i>
                    </Contact>
                    <Contact href="https://www.npmjs.com/~kruceo">
                        <i className="icon-npm" title="npm"></i>
                    </Contact>
                </div>
            </div>
        </header>
        <header id="sub-bar">
            <div id="bar-content">
                <Mobile></Mobile>
                <img id="logo" src="https://raw.githubusercontent.com/Kruceo/cdn/main/icons/cat_icon_colored.svg"></img>
                <div className="left" id="buttons">
                    <BarButton href="/">{locale.bar.home}</BarButton>
                    <BarButton href="/projects">{locale.bar.projects}</BarButton>
                    <BarButton href="/about">{locale.bar.about}</BarButton>
                </div>
                <div className="right" id="buttons">
                    <HighlightBarButton>{locale.bar.blog}</HighlightBarButton>
                </div>
            </div>
        </header>
    </header>
}

function Contact(props: { children: ReactNode, href: string }) {
    return <a href={props.href} target="_blank" id="contact">{props.children}</a>
}

function BarButton(props: AnchorAttributes) {
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