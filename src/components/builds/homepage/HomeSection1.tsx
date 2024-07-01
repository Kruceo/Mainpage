import { locale } from "../../../lib/lang";
import { Box } from "../../essential/Box/Box";
import Content from "../../essential/Content/Content";
import InnerContent from "../../essential/Content/InnerContent";
import Title from "../../essential/Title/Title";
import "./HomeSection1.less"
export default function HomeSection1() {
    return <Content>
        <InnerContent className='techs-content'>
            <Title>{locale.firstImpression.title}</Title>
            <div id='techs'>
                <Box>
                    <div className="icon" style={{ width: 120, height: 120, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>📦</div>
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
                    <div className="icon" style={{ width: 120, height: 120, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>📚</div>
                    <h4>{locale.firstImpression.box4Title}</h4>
                    <p style={{ padding: 20, textAlign: 'center' }}>
                        {locale.firstImpression.box4Text}
                    </p>
                </Box>

            </div>
        </InnerContent>
    </Content>
}