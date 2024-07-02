import { locale } from "../../../lib/lang";
import Bar from "../../essential/Bar/Bar";
import { Box } from "../../essential/Box/Box";
import Content from "../../essential/Content/Content";
import Title from "../../essential/Title/Title";

export default function Error404() {
    return <>
        <Bar></Bar>
        <Content className="first">
            <section>
                <div style={{marginTop:'40px'}}>
                    <Box style={{
                        padding:20,
                        display:'flex',
                        flexDirection:'column',
                        fontSize:60
                    }}>
                        <Title>{locale[404].text}</Title>
                        <p>🛣️</p>
                    </Box>
                </div>
            </section>
        </Content>
    </>
}