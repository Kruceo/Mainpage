import { useState } from "preact/hooks";
import { blue, links, orange, primary, red } from "../../../config/colors.mjs";
import Archive from "../essentials/Archive.jsx";
import Bar from "../essentials/Bar";
import Content from "../essentials/Content";
import { mediaStyle } from "../essentials/MediaQuery.jsx";
import { Window } from "../essentials/Window";

export default function Projects() {
    const [content, setContent] = useState([])
    let loading = content.length > 0 ? false : true
    if (content.length == 0)
        fetch('http://api.github.com/users/Kruceo/repos?sort=created', { mode: 'cors' }).then(res => {
            res.json().then(text => {
                const filtered = text.filter(each => {
                    return (each.homepage != ('' || undefined || null) && each.description != ('' || undefined || null))
                })
                setContent(filtered)

            })
        })
    console.log(content)



    return <>
        <Bar />
        <Content>

            <div style={mediaStyle(
                {
                    any: {
                        cursor: loading ? 'progress' : 'auto',
                        display: 'grid',
                        gridTemplateColumns: '1fr  1fr 1fr',
                        gap: '30px',
                        paddingTop: '50px',
                        paddingBottom: '30px'
                    },
                    mobile:{
                        gridTemplateColumns: '1fr',
                    }
                })}>
                {
                    content.map(each => {
                        return <Window width="100%" height="300px" buttons={false} title={each.name} scrollEffect={false}>
                            <div style={{ display: 'flex', padding: '10px', boxSizing: "border-box", flexDirection: 'column', color: 'white', width: '100%', height: '100%', position: 'relative' }}>
                                <p style={{ textAlign: 'center' }}>
                                    {each.description}
                                </p>


                                <div style={{

                                    display: "grid", gridTemplateColumns: '1fr 1fr 1fr', gap: '5px', width: '100%', marginTop: '5px'
                                }}>
                                    {each.topics.map(topic => {
                                        return <p style={{
                                            border: primary + '88 1px solid',
                                            borderRadius: '5px',
                                            padding: '4px', fontSize: '10px',
                                            boxSizing: 'border-box',
                                            width: '100%',
                                            textAlign: 'center'
                                        }}>{topic}</p>
                                    })}

                                </div>
                                <div style={{ marginTop: 'auto', marginBottom: '20px' }}>
                                    {each.language == 'JavaScript' ?
                                        <Archive name={each.language == "JavaScript" ? 'JS' : each.language} color={orange}></Archive> : ''
                                    }
                                    {each.language == 'Vue' ?
                                        <Archive name={each.language == "JavaScript" ? 'JS' : each.language} color={blue}></Archive> : ''
                                    }
                                    {each.language == 'HTML' ?
                                        <Archive name={each.language == "JavaScript" ? 'JS' : each.language} color={red}></Archive> : ''
                                    }
                                </div>
                                <p style={{
                                    position: 'absolute',
                                    top: 'calc(100% - 28px)',
                                    marginBottom: "0px",
                                    opacity: .2
                                }} href={each.clone_url}>{each.stargazers_count} ✴</p>
                                <a style={{
                                    marginTop: '0',
                                    marginBottom: "0px",
                                    textDecoration: 'underline',
                                    color: links
                                }} href={each.homepage == '' ? each.clone_url : each.homepage}>{each.full_name} </a>

                            </div>
                        </Window>
                    })

                }
            </div>

        </Content>
    </>
}