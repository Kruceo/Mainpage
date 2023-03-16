import { green, red, yellow } from "../../colors.mjs"

export function Window(props) {
    const w = props.width??16*50
    const h = props.height??9*50

    return <>
        <div style={
            {
                width: w + 'px',
                height: h + 'px',
                background: '#181818',
                boxShadow:'0px 0px 10px',
                borderRadius: '5px'
            }}>
            <div>
                <div style={
                    {
                        position: 'relative',
                        display: "flex",
                        background: 'transparent',
                        width: '100%',
                        height: '25px',
                        boxSizing: 'border-box'
                    }}>
                    <img src="https://raw.githubusercontent.com/Kruceo/KruceoMain/main/docs/public/img/logo.png" alt="" style={{
                        width: '15px',
                        position: 'absolute',
                        padding: '5px'
                    }} />
                    <p style={{
                        position: 'absolute',
                        width: "100%",
                        textAlign: 'center',
                        marginRight: '0',
                        marginLeft: 'auto',
                        color: '#fff8',
                        padding: "2px"
                    }}
                    >
                        • {props.title??'Page title'}
                    </p>
                    <div style={
                        {
                            position: 'absolute',
                            width: "100%",
                            display: "flex"
                        }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr 1fr',
                            gap: '5px',
                            marginRight: '0px',
                            padding: '5px'
                        }}>
                            <WindowButton bg={green}/>
                            <WindowButton bg={yellow}/>
                            <WindowButton bg={red}/>
                        </div>
                    </div>
                </div>

                <div>
                        {props.children}
                </div>
            </div>
        </div>
    </>
}


function WindowButton(props) {
    return <button style={{
        width: "15px",
        height: "15px",
        borderRadius: '100%',
        border: 'none',
        padding: '0px',
        background: props.bg ?? red
    }} />
}