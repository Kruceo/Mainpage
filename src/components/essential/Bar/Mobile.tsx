import { Anchor } from "milhas";
import "./Mobile.less";
export default function Mobile() {
    return <>
        <button id="mobile-button"><img src="/options.png" alt="" /></button>
        <div tabIndex={1} id="mobile-control">

            <Anchor href="/">Home</Anchor>
            <Anchor href="/projects">Projects</Anchor>
            <Anchor href="/about">About</Anchor>
        </div>
    </>
}