import { useEffect, useState } from "preact/hooks"

export default function MediaQuery(props) {
    window.queries = {
        any: 0,
        mobile: 300,
        tablet: 700,
        laptop: 900,
        desktop: 1200,
        tv: 1500,
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
    else return (() => { return <>{props.children}</> })()
}

export function mediaStyle(style) {

    const [state, setState] = useState(true)

    let toReturn = {}

    Object.entries(window.queries).forEach(each => {
        if (window.visualViewport.width > each[1]) {
            const select = style[each[0]] ?? toReturn
            console.log(select)
            if (typeof (select) == 'object') toReturn = Object.assign(toReturn, style[each[0]])

            else {
                toReturn = select

            }
        }
    })


    let build = ''
    if (typeof (toReturn) == 'object') {
        build = Object.assign((style.any ?? {}), toReturn)
    }
    if (typeof (toReturn) == 'string') {
        build = style.any ?? '' + ' ' + toReturn
    }
    window.addEventListener('resized', () => {
        setState(!state)
    })
    console.log(toReturn, build)

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


