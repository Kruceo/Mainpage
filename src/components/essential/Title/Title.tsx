import { PropsWithChildren } from "react";
import "./Title.less"
export default function Title(props:PropsWithChildren){
    return <h2 className="title">{props.children}</h2>
}