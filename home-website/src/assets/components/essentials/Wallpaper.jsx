import { wallpaperURL } from "../../colors.mjs";

export default function Wallpaper() {
    return <header style={{ position: 'fixed', zIndex: '-100' }}>
        <div style={{ position: 'relative', filter: 'hue-rotate(20deg)' }}>
           
            <div style={{ zIndex: '0', background: '#bbf', width: '100vw', height: '100vh' }}></div>
            <img id="spikes   " style={{ zIndex: '2', animation: 'spikesMove 30s infinite', width: '100vw', position: 'absolute', left: '0px', top: '0px', opacity: '1' ,filter:'drop-shadow(0px 0px 40px #0003)'}} src="http://192.168.20.198:5174/1.png" alt="" />
            <img id="backcloud" style={{ zIndex: '1', animation: 'cloudMove 20s infinite', width: '100vw', position: 'absolute', left: '0px', top: '0px', opacity: '.5' ,filter:'drop-shadow(0px 0px 40px #0003)'}} src="http://192.168.20.198:5174/3.png" alt="" />
            <img id="cloud    " style={{ zIndex: '3', animation: 'cloudMove 30s infinite', width: '100vw', position: 'absolute', left: '0px', top: '0px', opacity: '.9' ,filter:'drop-shadow(0px 0px 40px #0003)'}} src="http://192.168.20.198:5174/2.png" alt="" />
        </div>
    </header>
}