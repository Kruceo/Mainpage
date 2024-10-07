import { AllHTMLAttributes } from "react";
import "./Box.less"
export function Box(props: AllHTMLAttributes<HTMLDivElement>) {
    const {className,...rest} = props
    return <div className={`box ${className??""}`} {...rest}>
        {props.children}
    </div>
}