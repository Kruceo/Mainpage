import { useEffect, useState } from "preact/hooks"

export default function MediaQuery(props) {
    window.queries = {
        any: 0,
        mobile: 300,
        tablet: 600,
        laptop: 800,
        desktop: 1000,
        tv: 1200,
        giant: 2000
    }

   



    const resizeHandler = (e) => {

        const nd = getCurrentDevice()
        if (nd != device) {
            console.log('different')
            device = (nd)
            setRefresh(!refresh)
        }
    }
   
    window.onresize = () => {
        const size = window.visualViewport.width
        setTimeout(() => {
            if (window.visualViewport.width == size) {
                window.dispatchEvent(new Event('resized'))
            }
        }, 100);
    }
    window.addEventListener('resized', () => {
        resizeHandler()
        setRefresh(!refresh)
    })
    const [refresh, setRefresh] = useState(true)
    let device = getCurrentDevice()
    if (refresh) return props.children
    else return (()=>{ return <>{props.children}</>})()
}

export function mediaStyle(style) {

    const [state,setState] = useState(true)

    let toReturn = ''

    const current = getCurrentDevice()

    toReturn = style[current]??{}
    let build = ''
    if (typeof (toReturn) == 'object') {
        build = Object.assign((style.any ?? {}), toReturn)
    }
    if (typeof (toReturn) == 'string') {
        build = style.any ?? '' + ' ' + toReturn
    }
    window.addEventListener('resized',()=>{
        setState(!state)
    })
    console.log(current)
    return build
}


const getCurrentDevice = () => {
    let sel = ''
    Object.entries(window.queries).forEach(each => {
        if (window.visualViewport.width > each[1]) {
            sel = each[0]
        }
    })
    return sel
}


