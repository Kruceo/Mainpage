export default function Section(props) {

    const sectionStyle = {width:'100%', height: 'calc(100vh - 45px)', display: "grid",gridTemplateColumns:'1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',gap:'40px',boxSizing:'border-box', justifyContent: "center", alignItems: "center",paddingTop:'50px',paddingBottom:'50px' }

    return <>
        <section style={sectionStyle}>{props.children}</section>
    </>
}
