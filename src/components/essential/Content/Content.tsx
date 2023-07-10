import React, { PropsWithChildren } from "react";
import "./Content.less"
import InnerContent from "./InnerContent";
export default function Content(props: React.HTMLAttributes<HTMLDivElement>) {
    return <header id="content" {...props}>
        
            {props.children}
          
    </header>
}