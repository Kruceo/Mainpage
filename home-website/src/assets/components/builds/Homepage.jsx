import { useEffect } from "preact/hooks";
import { ascii, icon, links, secondary, text } from "../../../config/colors.mjs";
import { Window } from "../essentials/Window";
import { initAllSliders } from "bananaslider";
import Bar from "../essentials/Bar.jsx";
import Content from "../essentials/Content.jsx";
import { highlights } from "../../../config/content.mjs";
import Section from "../essentials/Section.jsx";
import MediaQuery, { mediaStyle } from "../essentials/MediaQuery.jsx";
export function Homepage(props) {


    useEffect(() => {
        const user = '<span class="cmd cmd_root">root@web:/# </span>'
        const cmd = document.querySelector('#cmd')
        cmd.innerHTML = ''
        const userWrite = (text) => { cmd.innerHTML = text }
        const userAppend = (text) => { cmd.innerHTML += text }
        let oldtext = cmd.innerHTML
        userWrite(user)
        const init = digitation('run ./user/welcome.burr --out=screen', 40, 200,
            (txt) => {
                userWrite("<div class='cmd_line'>" + user + "<p class='cmd'>" + txt + "</p></div>")
            },
            () => {
                const time = 100

                // userWrite(oldtext +"<div class='cmd_line'></div>")
                // userWrite(oldtext +"<div class='cmd_line'></div>")
                oldtext = cmd.innerHTML
                ascii.split('\n').forEach((each, index) => {
                    setTimeout(() => {
                        userWrite(oldtext + "<div class='cmd_line'><p class='cmd cmd_color" + index + "'>" + each + "</p></div>")
                        oldtext = cmd.innerHTML
                    }, 1000 + time * index)
                })
                setTimeout(() => {
                    setTimeout(() => {
                        userWrite(oldtext +
                            "<div class='cmd_line'><p class='cmd cmd_color8'>OS:</p> FailOS 0.20.23</div>" +
                            "<div class='cmd_line'><p class='cmd cmd_color8'>CPU:</p> Burning...</div>" +
                            "<div class='cmd_line'><p class='cmd cmd_color8'>GPU:</p> Broken...</div>" +
                            "<div class='cmd_line'><p class='cmd cmd_color8'>Memory:</p> 134kb free</div>" +
                            "<div class='cmd_line'><p class='cmd cmd_color8'>Resolution:</p> " + window.visualViewport.width + 'x' + window.visualViewport.height + "</div>")
                        oldtext = cmd.innerHTML
                        userWrite(oldtext + "<div class='cmd_line'>" + user + "</div>")
                        setTimeout(() => {
                            digitation('Welcome from Kruceo!', 0, 100, (txt) => {
                                userWrite(oldtext + "<div class='cmd_line'>" + user + txt + "</div>")
                            })
                        }, 1000)
                    }, 500)
                }, 1000 + 10 * time)

            })

        initAllSliders()
    })

    return <>

        <Bar></Bar>

        <Content>
            <Section mobile={{ display: 'block' }}>
                <Window width="100%" height="100%" title="Welcome" style={{ gridColumn: '1 / span 12', }}>
                    <div style={{

                        boxSizing: 'border-box',
                        fontSize: '15px',
                        fontFamily: 'monospace',
                        display: "flex", margin: "0 0", flexDirection: 'column',
                        padding: '5px',
                        color: text,
                        width: '100%',
                        height: '100%',
                        whiteSpace: 'pre-wrap'
                    }} id="cmd">{'starting...'}</div>
                </Window>
            </Section>

            <Section style={mediaStyle({
                mobile:{
                    display:'none'
                },
                tablet:{
                    background:'blue'
                }
            })}>
                <Window title="Open source" width="100%" height="100%" style={{ gridColumn: 'span 4 / span 6' }} buttons={false}>
                    <Message
                        message="You will reach open source library here"
                        img="/img/cadeado.png" />
                </Window>
                <Window title="Easy library" width="100%" height="100%" style={{ gridColumn: 'span 4 / span 6' }} buttons={false}>
                    <Message
                        message="Get libraries to make your work a little bit more easy"
                        img="/img/mesa.png" />
                </Window>
                <Window title="Modularity" width="100%" height="100%" style={{ gridColumn: 'span 4 / span 6' }} buttons={false}>
                    <Message
                        message="Value modular projects to a easy implement in diversity occasions "
                        img="/img/chave.png" />
                </Window>
            </Section>
            <Section>

                <Window title="Highlights" width="100%" height="100%" style={{ gridColumn: '1 / span 12' }}>

                    <slider cooldown={0} style={{ height: "100%" }}>
                        {
                            highlights.map(each => {
                                return <slide
                                    style={{
                                        width: '100%'
                                    }}>
                                    <Card
                                        title={each.title}
                                        content={each.content}
                                        link={each.link ?? 'null'}
                                        img={each.img}
                                        style={{
                                            // width: "10ox"
                                        }}
                                    >

                                    </Card>
                                </slide>
                            })
                        }
                    </slider>
                </Window>
            </Section>
        </Content>
    </>
}


function* letterGenerator(content) {
    let ctt = content.split('')
    for (let i = 0; i < ctt.length; i++) {
        yield ctt[i]
    }
}

function digitation(content, min, max, callback, onclose) {

    const dig = letterGenerator(content)
    const clbk = callback ?? new Function('return null')
    let random = () => {
        const rdm = (min + Math.random() * max) - min
        return rdm
    }
    let text = ''
    const write = (time) => {
        setTimeout(() => {
            const next = dig.next()
            if (!next.done) {
                text += '' + next.value + ''
                clbk(text)
                write(random())
            }
            else { onclose() }
        }, time);
    }

    write(1000)
}

function Card(props) {
    // alert(img.width)

    return <div style={{ width: "100%", height: "100%", display: 'flex', flexDirection: 'column' }}>
        <div style={{ width: '100%', color: text, padding: "10px", boxSizing: 'border-box' }}>
            <h2>{props.title}</h2>
            <p>

                {props.content}
            </p>
        </div>
        <div style={{ width: '100%', display: 'flex', marginTop: 'auto', marginBottom: '20px', justifyContent: 'center' }}>
            <img src={props.img} style={{ height: '148px', borderRadius: '10px', margin: '0' }} alt="" />
        </div>

        <div style={{ width: '100%', display: 'flex', marginTop: 'auto', marginBottom: '20px', justifyContent: 'center' }}>

            <a style={{ marginTop: 'auto', margin: '0px 0px 0px 20px', color: links }} href={props.link}>Go to example</a>
            <a style={{ marginTop: 'auto', margin: 'auto 20px 0px auto', color: links }} href={props.link}>Take a look</a>
        </div>

    </div>
}


function Message(props) {

    return <header style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <div style={{
            display: 'flex', flexDirection: 'column', textAlign: "center", background: 'transparent', padding: '20px', borderRadius: '10px',
            // boxShadow: '0px 0px 20px #0008',
            color: 'white',
        }}>
            <img style={{ width: 150, marginBottom: '20px' }} src={props.img} alt="" />
            <p style={{ width: 290, height: 40 }}>{props.message}</p>
        </div>
    </header>
}