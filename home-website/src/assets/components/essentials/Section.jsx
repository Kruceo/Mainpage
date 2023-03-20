export default function Section(props) {

    const sectionStyle = { height: 'calc(100vh - 45px)', display: "flex", justifyContent: "center", alignItems: "center" }

    return <>
        <section style={sectionStyle}>{props.children}</section>
    </>
}
