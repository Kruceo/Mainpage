import { locale } from "../../../lib/lang";
import { Box } from "../../essential/Box/Box";
import Title from "../../essential/Title/Title";
import "./AboutSection.less"
export default function HomeSection1() {
    return <section className='about-sec'>
            <Title>{locale.firstImpression.title}</Title>
            <div id='itens'>
                <Box>
                    <div className="icon" style={{ width: 120, height: 120, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>🏆</div>
                    <h4>{locale.firstImpression.box1Title}</h4>
                    <p style={{ padding: 20, textAlign: 'center' }}>
                        {locale.firstImpression.box1Text}
                    </p>
                </Box>
                <Box>
                    <div className="icon" style={{ width: 120, height: 120, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>🔩</div>
                    <h4>{locale.firstImpression.box2Title}</h4>
                    <p style={{ padding: 20, textAlign: 'center' }}>
                        {locale.firstImpression.box2Text}
                    </p>
                </Box>
                <Box>
                    <div className="icon" style={{ width: 120, height: 120, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>🗿</div>
                    <h4>{locale.firstImpression.box3Title}</h4>
                    <p style={{ padding: 20, textAlign: 'center' }}>
                        {locale.firstImpression.box3Text}
                    </p>
                </Box>
                <Box>
                    <div className="icon" style={{ width: 120, height: 120, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>⚗️</div>
                    <h4>{locale.firstImpression.box4Title}</h4>
                    <p style={{ padding: 20, textAlign: 'center' }}>
                        {locale.firstImpression.box4Text}
                    </p>
                </Box>
            </div>
       </section>
}