import { blue, green, lightBlue, links, orange, primary, red, text, yellow } from "../../../config/colors.mjs";
import Archive from "../essentials/Archive.jsx";
import Bar from "../essentials/Bar";
import Content from "../essentials/Content";
import { mediaStyle } from "../essentials/MediaQuery.jsx";
import Section from "../essentials/Section";
import { Window } from "../essentials/Window";

export default function Info() {
    return <>
        <Bar />
        <Content>
            <Section style={mediaStyle({
                mobile: {
                    height: 'auto'
                },
                desktop: {
                    height: '90%'
                }
            })}>
                <Window width="100%" scrollEffect={false} title='Social' style={
                    mediaStyle({
                        any: {
                            color: text
                        },
                        mobile: {
                            gridColumn: ' 1 / span 12'
                        },
                        desktop: {
                            gridColumn: ' 1 / span 4'
                        }
                    })}>
                    <div style={{ padding: '10px' }}>
                        <p>
                            <span style={{ color: yellow }}>Email:</span> contact@kruceo.com<br></br>
                            <span style={{ color: yellow }}>Github:</span> <a style={{
                                color: links,
                                textDecoration: 'underline'
                            }} href="https://github.com/kruceo">Kruceo</a> <br></br>
                            <span style={{ color: yellow }}>Linkedin:</span> <a style={{
                                color: links,
                                textDecoration: 'underline'
                            }} href="https://www.linkedin.com/in/kruceo/">Kruceo</a>
                        </p>

                    </div>
                </Window>

                <Window width="100%" scrollEffect={false} title='Experience' style={mediaStyle({
                    any: {
                        color: text
                    },
                    mobile: {
                        gridColumn: ' 1 / span 12'
                    },
                    desktop: {
                        gridColumn: ' 5 / span 8',
                        gridRow: '1 / span 2'
                    }
                })}>
                    <div style={{ padding: '10px', height: '100%', display: 'flex', flexDirection: 'column', margin: '0px 0px', boxSizing: 'border-box' }}>

                        <h2 style={{ textAlign: 'left', margin: '5px 0' }}>Technologies</h2>
                        <Tech cols={mediaStyle({
                            mobile:'4',
                            tablet:'6',
                            laptop:'8'
                        })}>
                            <Block img="https://br.vuejs.org/images/logo.svg" name="Vue.JS"></Block>
                            <Block img="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" name="React"></Block>
                            <Block img="https://preactjs.com/assets/branding/symbol.svg" name="Preact"></Block>
                            <Block img="/img/docker.svg" name="NodeJS"></Block>
                            <Block img="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" name="Express"></Block>
                            <Block img="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" name="Git"></Block>
                            <Block img="https://vitejs.dev/logo.svg" name="Vite"></Block>
                            <Block img="/img/remix.svg" name="Remix"></Block>
                            <Block img="https://www.electronjs.org/assets/img/logo.svg" name="Electron"></Block>
                            {/* <Block img="https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png" name="Remix"></Block> */}
                            <Block img="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" name="Remix"></Block>
                        </Tech>
                        <h2 style={{ textAlign: 'left', margin: '5px 0' }}>Languages</h2>
                        <Tech cols={mediaStyle({
                            mobile: '4',
                            tablet:'6',
                            laptop: '8'
                        })}>
                            <Block color={yellow} name="JS"></Block>
                            <Block color={blue} name="TS"></Block>
                            <Block color={orange} name="JAVA"></Block>
                            <Block color={lightBlue} name="C#"></Block>
                            <Block color={green} name="HTML"></Block>
                            <Block color={red} name="CSS"></Block>
                            <Block color={blue} name="Py"></Block>
                        </Tech>
                        <h3 style={{ opacity: .1, marginTop: 'auto' }}>Thanks the interest</h3>
                    </div>

                </Window>
                <Window width="100%" scrollEffect={false} title='Donate' style={mediaStyle({
                    any: {
                        color: text
                    },
                    mobile: {
                        gridColumn: ' 1 / span 12'
                    },
                    desktop: {
                        gridColumn: ' 1 / span 4'
                    }
                })}>
                    <div style={{ padding: '10px' }}>
                        <p>
                            <span style={{ color: yellow }}>BNB:</span> &lt;comming soon&gt; <br></br>
                            <span style={{ color: yellow }}>ETH:</span> &lt;comming soon&gt;<br></br>
                            <span style={{ color: yellow }}>PIX:</span> &lt;comming soon&gt;<br></br>
                        </p>
                    </div>
                </Window>
            </Section>
        </Content>

    </>
}

function Block(props) {
    return <div style={{ background: '#0000', width: '100%', height: '100%', boxSizing: 'border-box', padding: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
        {
            props.img
                ? <img src={props.img} alt="" style={
                    {
                        background: '#fff0', borderRadius: '10px', padding: 4,
                        height: '100%',
                        width: '100%'
                    }} />
                : <Archive name={props.name} color={props.color} width="100%" height="100%"></Archive>
        }
    </div>
}

function Tech(props) {
    return <div style={{ width: '100%', marginBottom: '20px', display: 'grid', gridTemplateColumns: 'repeat(' + (props.cols ?? 9) + ',1fr)', gap: '10px', background: '#0002', borderRadius: '10px', height: "min-content" }}>
        {props.children}
    </div>
}


const cached = `<Block img="https://br.vuejs.org/images/logo.svg" name="Vue.JS"></Block>
<Block img="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" name="React"></Block>
<Block img="https://preactjs.com/assets/branding/symbol.svg" name="Preact"></Block>
{/* <Block img="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" name="NodeJS"></Block> */}
<Block img="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" name="Express"></Block>
<Block img="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" name="Git"></Block>
<Block img="https://vitejs.dev/logo.svg" name="Vite"></Block>
<Block img="../../../../public/img/remix.svg" name="Remix"></Block>
<Block img="https://www.electronjs.org/assets/img/logo.svg" name="Electron"></Block>
{/* <Block img="https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png" name="Remix"></Block> */}
<Block img="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" name="Remix"></Block>`