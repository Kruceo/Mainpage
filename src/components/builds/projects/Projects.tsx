import Bar from "../../essential/Bar/Bar";
import Footer from "../../essential/Bar/Footer";
// import ProjectsSection1 from "./ProjectsSection1";
import ProjectsSection2 from "./ProjectsSection2";
import { locale } from "../../../lib/lang";

export default function Projects() {
    document.title = `Kruceo - ${locale.projects.title}`
    return <>
        <Bar></Bar>
        <ProjectsSection2></ProjectsSection2>
        {/* <ProjectsSection1></ProjectsSection1> */}
        <Footer></Footer>
    </>
}