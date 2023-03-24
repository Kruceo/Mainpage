import { mediaStyle } from "./MediaQuery"

export default function Content(props) {
    return <header id="content" style={
        mediaStyle({
            mobile: {
                marginTop: '45px', marginInline: '10px'
            },
            tablet: {
                marginTop: '45px', marginInline: '90px'
            }
        })
    }>
        {props.children}
    </header>
}