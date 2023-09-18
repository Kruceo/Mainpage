import { AllHTMLAttributes } from "react";
import "./Box.less"
export function Box(props: AllHTMLAttributes<HTMLDivElement>) {
    return <div id="box" {...props}>
        {props.children}
    </div>
}