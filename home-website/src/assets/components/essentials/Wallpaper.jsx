import { background } from "../../colors.mjs";

export default function Wallpaper() {
    return <header style={{ position: 'fixed', zIndex: '-100' }}>
        <div style={{ position: 'relative',left:0,top:0 }}>
           
            <div style={{ zIndex: 0, background: background, width: '100vw', height: '100vh' }}></div>
            <img id="spikes   " style={{ zIndex: '5', animation: 'spikesMove 60s infinite ease-in-out', width: '100vw', position: 'absolute', left: '0px', top: 'calc(100vh - 58vw)', opacity: '1' ,  filter:'rop-shadow(0px 0px 40px #000f)'}} src="/MINIMALIST/1.svg" alt="" />
            <img id="backcloud" style={{ zIndex: '4', animation: 'cloudMove  40s infinite ease-in-out', width: '100vw', position: 'absolute', left: '0px', top: 'calc(100vh - 58vw)', opacity: '.5' , filter:'rop-shadow(0px 0px 40px #000f)'}} src="/MINIMALIST/3.png" alt="" />
            <img id="cloud    " style={{ zIndex: '6', animation: 'cloudMove  20s infinite ease-in-out', width: '100vw', position: 'absolute', left: '0px', top: 'calc(100vh - 58vw)', opacity: '.9' , filter:'rop-shadow(0px 0px 40px #000f)'}} src="/MINIMALIST/2.svg" alt="" />
            <img id="ground   " style={{ zIndex: '1', animation: 'cloudMove  40s infinite ease-in-out', width: '100vw', position: 'absolute', left: '0px', top: 'calc(100vh - 58vw)', opacity: '.5' , filter:'rop-shadow(0px 0px 40px #000f)'}} src="/MINIMALIST/4.png" alt="" />
            <img id="ground2  " style={{ zIndex: '2', animation: 'cloudMove  50s infinite ease-in-out', width: '100vw', position: 'absolute', left: '0px', top: 'calc(100vh - 58vw)', opacity: '.5' , filter:'rop-shadow(0px 0px 40px #000f)'}} src="/MINIMALIST/5.png" alt="" />
        </div>
    </header>
}