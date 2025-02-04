import { locale } from "../../../lib/lang";
import Bar from "../../essential/Bar/Bar";
import Footer from "../../essential/Bar/Footer";
import Content from "../../essential/Content/Content";
import Title from "../../essential/Title/Title";
import "./About.less"
import catImg from '../../../assets/04.webp'
import autoScroll from "../homepage/AutoScroll";
export default function About() {
    document.title = `Kruceo - ${locale.about.title}`
    autoScroll()
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
                        <a href="https://github.com/kruceo" target="_blank">
                            <i className="icon-github"></i> Github
                        </a>
                    </li>
                    <li>
                        <a href="https://www.npmjs.com/~kruceo" target="_blank">
                            <i className="icon-npm"></i> NPM
                        </a>
                    </li>
                    <li className="">
                        <a href="https://huggingface.com/rafola" target="_blank">
                            <i className="icon-hf3"></i> HuggingFace
                        </a>
                    </li>
                    <li className="comming">
                        <i className="icon-discord"></i> Discord
                    </li>
                </ul>
                <div className="center-image"></div>
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