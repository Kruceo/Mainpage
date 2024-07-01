import { locale } from "../../../lib/lang";
import Bar from "../../essential/Bar/Bar";
import Footer from "../../essential/Bar/Footer";
import { Box } from "../../essential/Box/Box";
import Content from "../../essential/Content/Content";
import InnerContent from "../../essential/Content/InnerContent";
import Title from "../../essential/Title/Title";
import "./About.less"
export default function About() {
    document.title = `Kruceo - ${locale.about.title}`
    return <>
        <Bar></Bar>
        <Content className="first about-content">
            <InnerContent>
                <div>
                    <Title>{locale.about.title}</Title>
                </div>
                <div className="grid">


                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="NodeJS" />
                    <Box className="sub-box">
                        <p>{locale.about.item1Text}</p>
                    </Box>
                    <Box className="sub-box">
                        <p>{locale.about.item2Text}</p>
                    </Box>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" />
                    <img src="https://vitejs.dev/logo.svg" alt="Vite" />
                    <Box className="sub-box">
                        <p> {locale.about.item3Text}</p>
                    </Box>
                </div>
            </InnerContent>
        </Content>

        <Footer></Footer>
    </>
}