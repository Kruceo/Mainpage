import { useEffect, useState } from "preact/hooks"

export default function MediaQuery(props) {
    const getCurrentDevice = () => {
        let sel = ''
        Object.entries(window.queries).forEach(each => {
            if (window.visualViewport.width > each[1]) {
                sel = each[0]
            }
        })
        return sel
    }
    window.queries = {
        any: 0,
        mobile: 300,
        tablet: 600,
        notebook: 800,
        desktop: 1000,
        tv: 1200,
        giant: 2000
    }
    const resizeHandler = ()=>{
        const newDevice = getCurrentDevice()
        
        if (newDevice != oldDevice) {
            console.log(oldDevice,newDevice)
            setOldDevice(newDevice)
        }
    }
    window.removeEventListener('resize',resizeHandler)
    window.addEventListener('resize', resizeHandler)
    const [oldDevice, setOldDevice] = useState('any')
    
    return props.children
}

export function mediaStyle(style) {
    let toReturn = ''

    if (window.visualViewport.width > window.queries.mobile) {
        toReturn = style.mobile ?? {}
    }
    if (window.visualViewport.width > window.queries.tablet) {
        toReturn = style.tablet ?? {}
    }
    let build = ''
    if (typeof (toReturn) == 'object') {
        build = Object.assign((style.any ?? {}), toReturn)
    }
    if (typeof (toReturn) == 'string') {
        build = style.any ?? '' + ' ' + toReturn
    }

    console.warn(build, toReturn)
    return build
}