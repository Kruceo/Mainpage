import Bar from "../../essential/Bar/Bar";
import Footer from "../../essential/Bar/Footer";
import ProjectsSection1 from "./ProjectsSection1";
import ProjectsSection2 from "./ProjectsSection2";

export default function Projects() {
    document.title = "Kruceo | Projects"
    return <>
        <Bar></Bar>
        <ProjectsSection2></ProjectsSection2>
        <ProjectsSection1></ProjectsSection1>
        <Footer></Footer>
    </>
}