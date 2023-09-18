import React from "react";
import './Content.less'
export default function InnerContent(props:React.HTMLAttributes<HTMLDivElement>){
    return <header id="inner" {...props}>{props.children}</header>
}