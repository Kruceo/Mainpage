import Content from "../../essential/Content/Content";
import InnerContent from "../../essential/Content/InnerContent";
import "./ProjectsSection2.less"
import Title from "../../essential/Title/Title";
import HiddenItem from "./HiddenItem";

export default function ProjectsSection2() {
    return <Content className="projects first">
        <InnerContent className='projects table'>
            <Title>Highlights</Title>
            <div id='grid'>
                    <HiddenItem className="hidden-portfolio-item" 
                        buttonContent={<div><h3>🐦 Bird Company</h3> <p></p></div> }>
                        <div className="inner">
                            <p className="project-desc">Just a small landing page.</p>
                            <h4>Stack</h4>
                            <p>• SolidJS</p>
                            <p>• Vite</p>
                            <p>• Typescript</p>
                            <div>
                            <a href="https://birdcompany-website-portfolio.pages.dev/">View</a>
                            </div>
                        </div>
                        
                    </HiddenItem>
                    <HiddenItem className="hidden-portfolio-item" 
                        buttonContent={<h3>🐟 Easyfish</h3>}>
                        <div className="inner">
                            <p className="project-desc">A sea product focused transaction manager with multiple features.</p>
                            <h4>Stack</h4>
                            <p>• React</p>
                            <p>• Vite</p>
                            <p>• Typescript</p>
                            <p>• Express</p>
                            <p>• Sequelize</p>
                            <p>• PostgreSQL</p>
                            <div>
                            <a title="This may not work" href="https://easyfish.kruceo.com">View ⚠️</a>
                            </div>
                        </div>
                        
                    </HiddenItem>
            </div>
        </InnerContent>
    </Content>
}