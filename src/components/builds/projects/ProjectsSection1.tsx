import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Box } from "../../essential/Box/Box";
import Content from "../../essential/Content/Content";
import InnerContent from "../../essential/Content/InnerContent";
import "./ProjectsSection1.less"
// import { Anchor } from "milhas";
import Loading from "../../essential/Loading/Loading";
import Title from "../../essential/Title/Title";

interface repository {
    description: string,
    homepage: string,
    name: string,
    archived: boolean,
    clone_url: string,
    html_url:string
}
export default function ProjectsSection1() {
    const nameFilter = "contactron,kruceolauncher,mainpage,typein"
    const [content, setContent]: [repository[], Dispatch<SetStateAction<never[]>>] = useState([])
    let loading = content.length > 0 ? false : true
    if (content.length == 0)
        fetch('https://api.github.com/users/Kruceo/repos?sort=created', { mode: 'cors' }).then(res => {
            res.json().then(text => {
                const filtered = text.filter((repo: repository) => {
                    return (!repo.archived && repo.homepage != ('' || undefined || null) && repo.description != ('' || undefined || null) && !repo.description.includes('[notshow]') && !nameFilter.includes(repo.name.toLowerCase()))
                })
                setContent(filtered)
            })
        })

    if (loading) return <Content className="first"><InnerContent><Loading></Loading></InnerContent></Content>
    return <Content className="projects">
        <InnerContent className='projects table'>
            <Title>Projects</Title>
            <div id='grid'>
                {
                    content.map((each, index) => {
                        return <Box key={"project" + index}>
                            <div className="icon">
                            📂
                                {/* <img src={each.html_url + '/blob/main/icon.png?raw=true'} alt="📂" /> */}
                            </div>
                            <h4 style={{ textTransform: "capitalize" }}>{each.name}</h4>
                            <p style={{ padding: 20, textAlign: 'center' }}>{each.description}</p>
                            <div className="projects-footer">
                                <Link className="left" src="/github.png" href={each.clone_url} />
                                <a target="_blank" className="projects link right" href={each.html_url + '#readme'}>Docs</a>
                            </div>
                        </Box>
                    })
                }

            </div>
        </InnerContent>
    </Content>
}

function Link(props: {
    href?: string,
    src?: string
    children?: ReactNode | ReactNode[],
    className:string
}) {
    return <a className={"projects link " + props.className} target="_blank" href={props.href}>
        <div style={{ backgroundImage: `url(${props.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', width: 20, height: 20, filter: "", opacity: .5,mixBlendMode:"difference" }}>{props.children}</div>
    </a>
}