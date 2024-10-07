import { Anchor, AnchorAttributes } from "milhas";
import "./Button.less";

export default function (props: AnchorAttributes) {
    const { className, children, href, ...rest } = props
    if (/http.\:\/\//.test(href ?? ""))
        return <a {...rest} href={href} className={`btn-s-1 ${className ?? ""}`}> <span>{children}</span></a>
    return <Anchor {...rest} href={href} className={`btn-s-1 ${className ?? ""}`}><span>{children}</span></Anchor>
}