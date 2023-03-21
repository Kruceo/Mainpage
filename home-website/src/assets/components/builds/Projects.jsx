import { useState } from "preact/hooks";
import { links, primary } from "../../../config/colors.mjs";
import Bar from "../essentials/Bar";
import Content from "../essentials/Content";
import Section from "../essentials/Section";
import { Window } from "../essentials/Window";

export default function Projects() {
    const [content, setContent] = useState([])
    let loading = content.length > 0?false:true
    console.log(loading)
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

            <div style={{cursor:loading?'progress':'auto', display: 'grid', gridTemplateColumns: '1fr  1fr 1fr', gap: '30px', paddingTop: '50px',paddingBottom:'30px' }}>
                {
                    content.map(each => {
                        return <Window width="100%" height="300px" buttons={false} title={each.name} scrollEffect={false}>
                            <div style={{ display: 'flex',padding:'10px', boxSizing:"border-box", flexDirection: 'column', color: 'white', width: '100%' ,height:'100%',position:'relative'}}>
                                <p style={{textAlign:'center' }}>
                                    {each.description}
                                </p>
                                <p
                                style={{
                                    fontSize:'12px',
                                    textAlign:'left',
                                    marginTop:'5px',
                                }}>
                                    {each.language}
                                </p>
                                <div style={{
                                    display:"grid",gridTemplateColumns:'1fr 1fr 1fr',gap:'5px',width:'100%',marginTop:'5px'
                                }}>
                                    {each.topics.map(topic => { return <p style={{
                                        background:primary,
                                        borderRadius:'5px',
                                        padding:'4px',fontSize:'10px',
                                        boxSizing:'border-box',
                                        width:'100%',
                                        textAlign:'center'
                                    }}>{topic}</p> })}
                                    
                                </div>
                                <p style={{
                                    position:'absolute',
                                    top:'calc(100% - 71px)',
                                    marginBottom:"45px",
                                    opacity:.2
                                }} href={each.clone_url}>{each.stargazers_count} ✴</p>
                                <a style={{
                                    marginTop:'auto',
                                    marginBottom:"45px",
                                    textDecoration:'underline',
                                    color:links
                                }} href={each.homepage == ''?each.clone_url:each.homepage}>{each.full_name} </a>
                               
                            </div>
                        </Window>
                    })

                }
            </div>

        </Content>
    </>
}