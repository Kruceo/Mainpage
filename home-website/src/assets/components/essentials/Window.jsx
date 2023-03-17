import { useEffect } from "preact/hooks"
import { green, primary, red, secondary, yellow } from "../../colors.mjs"

export function Window(props) {
    const w = props.width ?? '100%'
    const h = props.height ?? 9 * 50
    const randomId = 'window_' + parseInt(Math.random() * 10000)
    useEffect(() => {
        const wdw = document.querySelector('#' + randomId)

        // ('scroll',)
        window.addEventListener('scroll', (e) => {
            const scroll = parseInt(window.scrollY)
            const top = wdw.offsetTop
            const bottom = top + wdw.clientHeight

            console.log(scroll, bottom, wdw.id)
            if (scroll >= bottom - 200) {
                console.log(1)
                wdw.style.scale = 0.5
                wdw.style.opacity = 0

            }
            if (scroll + 200 < bottom) {
                wdw.style.scale = 1
                wdw.style.opacity = 1
            }
            if (scroll < top - 400) {
                wdw.style.scale = 0.5
                wdw.style.opacity = 0
            }
        })
    })
    return <>
        <div id={randomId} style={
            {
                width: w,
                height: h,
                // background: secondary,
                border: primary + ' 1px solid',
                boxShadow: '0px 0px 20px black',
                borderRadius: '10px',
                transition: 'scale 250ms, opacity 250ms',
                overflow: 'hidden'
            }
        }>
            <div>
                <div style={
                    {
                        position: 'relative',
                        display: "flex",
                        background: secondary,
                        width: '100%',
                        height: '45px',
                        boxSizing: 'border-box'
                    }}>
                    <div style={{ position: 'absolute', display: "flex", color: '#fff8', padding: '5px' }}>
                        {/* <img src="https://raw.githubusercontent.com/Kruceo/KruceoMain/main/docs/public/img/logo.png" alt="" style={{
                            width: '35px',

                        }} /> */}
                        <div style={{
                        }}>
                            {props.navigate}
                        </div>
                    </div>
                    <p style={{
                            position: 'absolute',
                    width: "100%",
                    fontSize:'25px',
                    textAlign: 'center',
                    marginRight: '0',
                    marginLeft: 'auto',
                    color: '#fff8',
                    padding: "5px"
                    }}
                    >
                    • {props.title ?? 'Page title'}
                </p>
                <div style={
                    {
                        height: '100%',
                        position: 'absolute',
                        width: "100%",
                        display: "flex"
                    }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr',
                        gap: '10px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: '7px',
                        padding: '5px'
                    }}>
                        <WindowButton bg={green} />
                        <WindowButton bg={yellow} />
                        <WindowButton bg={red} />
                    </div>
                </div>
            </div>

            <div style={
                {
                    width: '100%', height: (h.replace('px', '') - 25) + 'px',
                    backdropFilter: 'blur(10px)',
                    background: secondary + 'cc'
                }}>
                {props.children}
            </div>
        </div>
    </div>
    </>
}


function WindowButton(props) {
    return <button style={{
        width: "20px",
        height: "20px",
        borderRadius: '100%',
        border: 'none',
        padding: '0px',
        background: props.bg ?? red
    }} />
}