import Bar from "../../essential/Bar/Bar";
import Footer from "../../essential/Bar/Footer";
// import ProjectsSection1 from "./ProjectsSection1";
import ProjectsSection2 from "./ProjectsSection2";
import { locale } from "../../../lib/lang";
import Content from "../../essential/Content/Content";
import autoScroll from "../homepage/AutoScroll";

export default function Projects() {
    document.title = `Kruceo - ${locale.projects.title}`
    autoScroll()
    return <>
        <Bar></Bar>
        <Content>
            <ProjectsSection2></ProjectsSection2>
            {/* <ProjectsSection1></ProjectsSection1> */}
        </Content>
        <Footer></Footer>
    </>
}