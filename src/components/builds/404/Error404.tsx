import { locale } from "../../../lib/lang";
import Bar from "../../essential/Bar/Bar";
import "./Error404.less"
import Content from "../../essential/Content/Content";
import img from '../../../assets/03.png'
import AButton from "../../essential/Button/AButton";
export default function Error404() {
    return <>
        <Bar></Bar>
        <Content className="first">
            <section id="err404">
                <div className="grid">
                    <img src={img} alt="/" />
                    <div className="text-box">
                        <h1>{locale[404].title}</h1>
                        <p>{locale[404].text}</p>
                        {/* <Button> */}
                        <AButton href="/about"><p>{locale.about.contactTitle}</p></AButton>
                        {/* </Button> */}
                    </div>
                    {/* <p>🛣️</p> */}
                </div>
            </section>
        </Content>
    </>
}