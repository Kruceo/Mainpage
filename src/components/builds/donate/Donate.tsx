import { locale } from "../../../lib/lang";
import Bar from "../../essential/Bar/Bar";
import Content from "../../essential/Content/Content";

export default function Donate() {
    document.title = `Kruceo - ${locale.about.title}`
    return <>
        <Bar></Bar>
        <Content className="first">
            <section>
                <h2 style={{ margin: "20px 20px 0px 20px" }}>{locale.pixTitle}</h2>
                <img src="/QRCODE.svg" alt="qrcode" style={{
                    width: 240,
                    borderRadius: 10,
                    margin: "5px 20px 20px 20px",
                    border: "#0003 2px solid"
                }} />
                <h2 style={{ margin: "0px 20px 0px 20px" }}>{locale.cryptoTitle}</h2>
                <h3 style={{ margin: "5px 20px 0px 20px", border: "#0003 2px solid", width: 'fit-content', padding: 10, borderRadius: 10 }}>0xA051560e7172fd8B8EE0060FFC970D40c4287209</h3>
            </section>
        </Content>
    </>
}