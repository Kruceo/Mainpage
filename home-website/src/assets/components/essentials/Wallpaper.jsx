import { wallpaperURL } from "../../colors.mjs";

export default function Wallpaper(){
    return <header style={{position:"fixed",left:'0',top:'0',width:'100vw',height:'100vh',zIndex:'-100',
    background:'url('+wallpaperURL+')',
    backgroundSize:'cover'
}}></header>
}