import { links, text } from "../../colors.mjs";
import Bar from "../essentials/Bar";
import Content from "../essentials/Content";
import Section from "../essentials/Section";
import { Window } from "../essentials/Window";

export default function Info(){
    return <>
    <Bar/>
    <Content>
        <Section>
            <Window width="100%" title='Social' style={{gridColumn:' 1 / span 4',color:text}}>
                <div style={{padding:'10px'}}>
                <p>
                    Email: contact@kruceo.com<br></br>
                    Github: <a style={{
                        color:links,
                        textDecoration:'underline'
                    }} href="https://github.com/kruceo">Kruceo</a> <br></br> 
                    Linkedin: <a style={{
                        color:links,
                        textDecoration:'underline'
                    }} href="https://www.linkedin.com/in/kruceo/">Kruceo</a>
                </p>
                </div>
            </Window>

            <Window width="100%" title='Social' style={{gridColumn:' 5 / span 8',gridRow:'1 / span 2'}}>
                <p>
                    Email: contact@kruceo.com<br></br>
                    Github: Kruceo <br></br> 
                    Telegram: 123
                </p>
            </Window>
            <Window width="100%" title='Social' style={{gridColumn:' 1 / span 4'}}>
                <p>
                    Email: contact@kruceo.com<br></br>
                    Github: Kruceo <br></br> 
                    Telegram: 123
                </p>
            </Window>
        </Section>
    </Content>
    
    </>
}