import { Dispatch, SetStateAction, useState } from "react";
import Content from "../../essential/Content/Content";
import InnerContent from "../../essential/Content/InnerContent";
import "./ProjectsSection2.less"
// import { Anchor } from "milhas";
import Loading from "../../essential/Loading/Loading";
import Title from "../../essential/Title/Title";
import HiddenItem from "./HiddenItem";

interface repository {
    description: string,
    homepage: string,
    name: string,
    archived: boolean,
    clone_url: string,
    html_url: string
}
export default function ProjectsSection2() {
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
    return <Content className="projects first">
        <InnerContent className='projects table'>
            <Title>Portfolio</Title>
            <div id='grid'>
                    <HiddenItem className="hidden-portfolio-item" 
                        buttonContent={<h3>🐦 Bird Company</h3>}>
                        <div className="inner">
                            <h4>Stack</h4>
                            <p>SolidJS</p>
                            <p>Vite</p>
                            <p>Typescript</p>
                            <div>
                            <a href="https://birdcompany-website-portfolio.pages.dev/">View</a>
                            </div>
                        </div>
                        
                    </HiddenItem>
            </div>
        </InnerContent>
    </Content>
}