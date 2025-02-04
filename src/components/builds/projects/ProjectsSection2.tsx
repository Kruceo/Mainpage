import "./ProjectsSection2.less"
import Title from "../../essential/Title/Title";
import HiddenItem from "./HiddenItem";
import { locale } from "../../../lib/lang";
import MasonryLayout from "./MasonryLayout";

export default function ProjectsSection2() {
    return <section className="projects">
        <div className="title-container">
            <Title>{locale.projects.title}</Title>
        </div>
        <p>{locale.projects.text}</p>
        <MasonryLayout rules={{ 550: 1, 1200: 2, 12000: 3 }} id="grid">
            <Item name="🥅 Torneio App" desc={locale.projects.item3Desc}
                stack={["Kotlin", "Android", "Android Jetpack"]}
                viewUrl="/torneio-app" />
            <Item name="👩‍🦰 Person NER AI Model" desc={locale.projects.item4Desc}
                stack={["Python", "Torch", "Transformers", "Datasets"]}
                viewUrl="https://huggingface.co/spaces/rafola/person-searcher" />
            <Item name="🐦 Bird Company" desc={locale.projects.item1Desc}
                stack={["Typescript", "SolidJS", "Vite"]}
                viewUrl="https://birdcompany-website-portfolio.pages.dev" />
            <Item name="🐟 Easyfish" desc={locale.projects.item2Desc}
                stack={["React", "Typescript", "Tailwind CSS", "Axios", "Express.js", "Sequelize", "PostgreSQL"]}
                viewUrl="https://easyfish.kruceo.com" mayNotWork />



        </MasonryLayout>
    </section>
}


export function Item(props: { name: string, desc: string, stack: string[], viewUrl: string, mayNotWork?: boolean }) {
    return <HiddenItem defaultOpened className="hidden-portfolio-item"
        buttonContent={<h3>{props.name}</h3>}>
        <div className="inner">
            <p className="project-desc">{props.desc}</p>
            <h4>{locale.projects.stackTitle}</h4>
            {props.stack.map(tech => <p key={tech + props.name}>• {tech}</p>)}
            <div>
                <a title={props.mayNotWork ? locale.thisMayNotWork : undefined} target="_blank" href={props.viewUrl}>{locale.projects.view} {props.mayNotWork ? "⚠️" : ""}</a>
            </div>
        </div>
    </HiddenItem>
}