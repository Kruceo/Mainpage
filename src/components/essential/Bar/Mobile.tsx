import { Anchor } from "milhas";
import "./Mobile.less";
import { locale } from "../../../lib/lang";
export default function Mobile() {
    return <>
        <button id="mobile-button"><img src="/options.png" alt="" /></button>
        <div tabIndex={1} id="mobile-control">

            <Anchor href="/">{locale.bar.home}</Anchor>
            <Anchor href="/projects">{locale.bar.projects}</Anchor>
            <Anchor href="/about">{locale.bar.about}</Anchor>
        </div>
    </>
}