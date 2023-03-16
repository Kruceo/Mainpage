import { useEffect } from "preact/hooks";
import { ascii } from "../../colors.mjs";
import { Window } from "../essentials/Window";

export function Homepage(props) {
    const user = '[Kruceo] ~ '
    const cmd = document.querySelector('#cmd')
    const userWrite = (text)=> {cmd.innerHTML = '[Kruceo] ~ ' + text}
    const userAppend = (text)=> {cmd.innerHTML += '\n[Kruceo] ~ ' + text}


    useEffect(() => {
        const init = digitation('neofetch', 100, 100,
            (text) => {
                userWrite(text)
            },
            () => {
                setTimeout(()=>{
                    userAppend(ascii + '\nVersion: 0.0.1\nResolution: ' +window.visualViewport.width + 'x' +window.visualViewport.height + 
                    '\nGithub: https://github.com/Kruceo' )

                    setTimeout(()=>{
                        digitation('init',100,100,(text2)=>{
                            cmd.innerHTML = cmd.innerHTML +'\n'+ user + text2
                            
                        })
                    },1500)

                },1000)
            })
    })

    return <Window width="900" height="600" title="Terminal">
        <p style={{ fontFamily:'monospace',display:"flex",padding: '5px', color: "white", width: '100%',whiteSpace:'pre-wrap' }} id="cmd">{}</p>
        
    </Window>
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


