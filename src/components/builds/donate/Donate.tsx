import Bar from "../../essential/Bar/Bar";
import Content from "../../essential/Content/Content";
import InnerContent from "../../essential/Content/InnerContent";
import Title from "../../essential/Title/Title";

export default function Donate() {
    document.title = "Kruceo | Donate"
    return <>
        <Bar></Bar>
        <Content className="first">
            <InnerContent>
                <h2 style={{margin:"20px 20px 0px 20px"}}>Pix:</h2>
                <img src="/QRCODE.svg" alt="qrcode" style={{
                    width:240,
                    borderRadius:10,
                    margin:"5px 20px 20px 20px",
                    border:"#0003 2px solid"
                }}/>
                <h2 style={{margin:"0px 20px 0px 20px"}}>BNB or ETH chain:</h2>
                <h3 style={{margin:"5px 20px 0px 20px",border:"#0003 2px solid",width:'fit-content',padding:10,borderRadius:10}}>0xA051560e7172fd8B8EE0060FFC970D40c4287209</h3>
            </InnerContent>
        </Content>
    </>
}