import { useEffect } from "react";

export default function(){
    useEffect(()=>{
        window.scrollTo({top:0,left:0})
    },[])
}