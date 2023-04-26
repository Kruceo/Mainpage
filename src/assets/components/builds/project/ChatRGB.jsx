import { Anchor } from "milhas";
import { blue, green, lightBlue, links, orange, primary, red, secondary, text, yellow } from "../../../../config/colors.mjs";
import Archive from "../../essentials/Archive.jsx";
import Bar from "../../essentials/Bar";
import Content from "../../essentials/Content";
import { mediaStyle } from "../../essentials/MediaQuery.jsx";
import Section from "../../essentials/Section";
import { Window } from "../../essentials/Window";
import { useEffect, useState } from "preact/hooks";

export default function ChatRGB() {
    return <>
        <Bar />
        <Content>
            <Section style={mediaStyle({
                any:{
                    height:'100%'
                },
                laptop:{
                    height:"calc(100vh - 45px)"
                }
            })}>
                <Window title={"Config"} style={mediaStyle({
                    any: {
                        gridColumn: ' 1 / span 12'
                    },
                    laptop:{
                        gridColumn: ' 1 / span 6'
                    }
                })}>
                    <div
                        style={{
                            width: "100%",
                            height: '100%',
                            padding: "10px",
                            boxSizing: 'border-box',
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr 1fr 1fr'

                        }}
                    >
                        <div style={{ gridColumn: '4 span', width: "100%" }}>
                            <Message time="10:22:45" delay={500} left user="kruceo" >/setkey sr-xyzxyz</Message>
                            <Message time="10:22:54" delay={750} user="ChatRGB">Key applied, try a test using "chat hello" 😁 </Message>
                            <Message time="10:23:12" delay={1000} left user="kruceo" >/setroleplay respond like a Japan samurai</Message>
                            <Message time="10:23:20" delay={1250} user="ChatRGB">Ok 😁</Message>
                        </div>
                    </div>
                </Window>
                <Window title={"Chat"} style={mediaStyle({
                    any: {
                        gridColumn: ' 1 / span 12 '
                    },
                    laptop: {
                        gridColumn: ' 7 / span 6 '
                    }
                })}>
                    <div
                        style={{
                            width: "100%",
                            height: '100%',
                            padding: "10px",
                            boxSizing: 'border-box',
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr 1fr 1fr'

                        }}
                    >
                        <div style={{ gridColumn: '4 span' }}>
                            <Message time="10:22:00" delay={1500} left user="kruceo">Chat what you prefer, a katana or a wakizashi?</Message>
                            <Message time="10:22:02" delay={1750} user="ChatRGB"    >I prefer a katana. It is a symbol of honor and strength for the samurai.</Message>
                            <Message time="10:23:04" delay={2000} left user="kruceo">Chat why?</Message>
                            <Message time="10:23:06" delay={2250} user="ChatRGB"    >A katana is a symbol of honor and strength for the samurai because it is a weapon that requires skill and discipline to wield. It is a reminder of the samurai's commitment to justice and their dedication to protecting the people.</Message>
                        </div>
                    </div>
                </Window>
            </Section>
            <Section style={mediaStyle({
                any:{
                    height:'100%'
                },
                laptop:{
                    height:"calc(100vh - 45px)"
                }
            })}>
                <Window title="About" style={mediaStyle({
                    any: {
                        gridColumn: ' 1 / span 12 '
                    },
                    laptop: {
                        gridColumn: ' 1 / span 8 '
                    }
                })}>
                    <div style={{
                        padding: '10px',
                        color: 'white'
                    }}>
                        <Message user="ChatRGB" delay={500} left time={(new Date()).toLocaleString().split(' ')[1]}>ChatRGB is a powerful chat bot that is hosted by its creator, Kruceo, and uses the OpenAI API.</Message>
                        <Message user="ChatRGB" delay={1000} left time={(new Date()).toLocaleString().split(' ')[1]}>With its impressive features, including support for context, history, roleplays, and nicknames, ChatRGB provides users with a unique and personalized conversation experience.</Message>
                        <Message user="ChatRGB" delay={1500} left time={(new Date()).toLocaleString().split(' ')[1]}>It's important to note, however, that there is no guarantee that the server will always be online, as ChatRGB is a personal project.</Message>
                        <Message user="ChatRGB" delay={2000} left time={(new Date()).toLocaleString().split(' ')[1]}>While Kruceo is dedicated to keeping the server up and running as much as possible, users may experience occasional downtime.</Message>
                    </div>
                </Window>
                <Window title="Use" style={mediaStyle({
                    any: {
                        zIndex:2,
                        gridColumn: ' 1 / span 12 '
                    },
                    laptop: {
                        gridColumn: ' 9 / span 4 '
                    }
                })}>
                   <div style={{
                    display:'grid',
                    padding:'10px',
                    boxSizing:'border-box',
                    textAlign:'center',
                    width:'100%',
                    height:'100%',
                    justifyContent:'center',
                    alignItems:'center',
                    gridTemplateRows:'1fr 1fr 1fr'
                   }}>
                    {/* <p style={{color:text,zIndex:1}}>Obtain an invitation and invite the bot to join your server.</p> */}
                    <a style={{
                        background:links,
                        borderRadius:10,
                        padding:10,
                        fontSize:24,
                        zIndex:1
                    }} target="_blank" href="https://discord.com/api/oauth2/authorize?client_id=1095357835476488252&permissions=395137251392&scope=bot">Get on Discord</a>
                    <a style={{
                        background:links,
                        opacity:'.85',
                        borderRadius:10,
                        padding:10,
                        zIndex:1
                    }} href="https://github.com/kruceo/chatrgb">View on Github</a>
                    <Anchor style={{
                        background:links,
                        opacity:'.85',
                        borderRadius:10,
                        padding:10,
                        zIndex:1
                    }} href="/info">About Kruceo</Anchor>
                    <img src="/cat_logo.svg" alt="" style={{
                        position:'absolute',
                        top:'40%',
                        zIndex:0
                    }} />
                   </div>
                </Window>
            </Section>
        </Content>

    </>
}

function Message(props) {
    const id = "message" + (new Date()).getTime() + parseInt(Math.random() * 1000)
    const [width,setWidth] = useState(Math.random()*30)
    useEffect(() => {
        setTimeout(() => {
            document.querySelector('#' + id).style.opacity = 1
            document.querySelector('#' + id).style.transform = "scale(1)"
        }, props.delay / 2 ?? 1000)
    }, [])
    return <div id={id} style={{
        border: primary + ' 2px solid',
        color: text,
        minWidth: '40%',
        maxWidth: (60 + width) + "%",
        width: 'fit-content',
        padding: '10px',
        borderRadius: '10px',
        marginBottom: '10px',
        marginLeft: props.left ? '0px' : 'auto',
        marginRight: props.left ? 'auto' : '0px',
        opacity: 0,
        transform: 'scale(0)',
        transition: 'transform 200ms , opacity 500ms'
    }}>
        <div style={{ display: 'flex' }}>
            <p style={{ color: text + 88, fontSize: 14, marginLeft: "0px" }}>{props.user ?? 'user'}</p>
            <p style={{ color: text + 88, fontSize: 14, marginRight: "0px" }}>{props.time ?? '15:55'}</p>
        </div>
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