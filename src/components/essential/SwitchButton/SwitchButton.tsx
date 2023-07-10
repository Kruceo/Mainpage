import { useState } from "react"
import "./SwitchButton.less"

export default function SwitchButton(props: {
    width?: number,
    height?: number,
    onChange?:Function,
    id?:string,
    className?:string,
    defaultValue?:boolean
}) {
    const [activated, setActivated] = useState(props.defaultValue??false)
    const w = props.width ?? 40
    const h = props.height ?? 20
    const clickHandler = () => {
        setActivated(!activated)
        // props.onClick?props.onClick({state:activated}):null
        props.onChange?props.onChange({activated:!activated}):null
    }
    return <div onClick={clickHandler} tabIndex={1} className={"switch-button " + (activated?"activated ":" ") + (props.className??"")} id={props.id} style={{
        width: w,
        height: h,
    }}>
        <div className="circle inner" style={{
            width: h,
            height: h,
            marginLeft: activated ? "calc(" + w + "px - " + h + "px)" : "0px",
        }}>
        </div>
    </div>
}