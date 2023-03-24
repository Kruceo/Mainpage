import { mediaStyle } from "./MediaQuery"

export default function Section(props) {

    const sectionStyle = mediaStyle(
        {
            any:
            {
                ...{ width: '100%', height: 'calc(100vh - 45px)', display: "grid", gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr', boxSizing: 'border-box', justifyContent: "center", alignItems: "center", paddingTop: '50px', paddingBottom: '50px' },
                ...props.style??{}
            }
            , mobile: {
                gap: '20px 0px',
            },
            tablet: {
                gap: '10px'
            }
        })

    return <>
        <section style={sectionStyle}>{props.children}</section>
    </>
}
