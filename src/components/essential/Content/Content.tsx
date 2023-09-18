import React from "react";
import "./Content.less"
export default function Content(props: React.HTMLAttributes<HTMLDivElement>) {
    return <header id="content" {...props}>
        
            {props.children}
          
    </header>
}