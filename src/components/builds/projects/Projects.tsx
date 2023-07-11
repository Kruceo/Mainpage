import Bar from "../../essential/Bar/Bar";
import Footer from "../../essential/Bar/Footer";
import ProjectsSection1 from "./ProjectsSection1";

export default function Projects() {
    document.title = "Kruceo | Projects"
    return <>
        <Bar></Bar>
        <ProjectsSection1></ProjectsSection1>
        <Footer></Footer>
    </>
}