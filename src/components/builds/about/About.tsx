import { locale } from "../../../lib/lang";
import Bar from "../../essential/Bar/Bar";
import Footer from "../../essential/Bar/Footer";
import Content from "../../essential/Content/Content";
import Title from "../../essential/Title/Title";
import "./About.less"
import catImg from '../../../assets/04.png'
export default function About() {
    document.title = `Kruceo - ${locale.about.title}`
    return <>
        <Bar></Bar>
        <Content>
            <section className="about">
                <div className="title-container">
                    <Title>{locale.about.title}</Title>
                </div>

                <p className="presentation">
                    {locale.about.presentationText}
                </p>
                <div className="title-container">
                    <Title>{locale.about.platformsTitle}</Title>
                </div>
                <ul className="platforms-list">
                    <li>
                        <a href="NPM">
                            <i className="icon-github"></i> Github
                        </a>
                    </li>
                    <li>
                        <a href="NPM">
                            <i className="icon-npm"></i> NPM
                        </a>
                    </li>
                    <li className="comming">
                        <i className="icon-discord"></i> Discord
                    </li>
                    <li className="comming">
                        <i className="icon-hf"></i> HuggingFace
                    </li>
                </ul>
                <div className="center-image">

                </div>
               
                {/* <Box className="donate-grid">
                    <Title>Some Ways to Donate</Title>
                    <HideItem className="way"
                        buttonContent={<strong><i className="icon-coin-dollar" /> PIX (BRASIL)</strong>}>
                        <img src="/QRCODE.svg" alt="qrcode" style={{
                            width: "100%"
                        }} />
                    </HideItem>
                    <HideItem className="way"
                        buttonContent={<strong><i className="icon-coin-dollar" /> ETH & BNB</strong>}>
                        <p>0xA051560e7172fd8B8EE<br />0060FFC970D40c4287209</p>
                    </HideItem>
                </Box> */}
                <div className="contact-container">
                    <img src={catImg} alt="cat" />
                    <div className="inner">
                        <div className="title-container">
                            <Title>{locale.about.contactTitle}</Title>
                        </div>
                        <p>{locale.about.contactText}</p>
                        <ul>
                            <li>
                                <strong><i className="icon-mail2"></i></strong> {" "}
                                contact@kruceo.com
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </Content>

        <Footer></Footer>
    </>
}