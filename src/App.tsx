import Homepage from "./components/builds/homepage/Homepage";
import "./App.less"
import { E404, Path, Router } from "milhas";
import Projects from "./components/builds/projects/Projects";
import About from "./components/builds/about/About";
import Donate from "./components/builds/donate/Donate";
import Error404 from "./components/builds/404/Error404";
import Docs from "./components/builds/docs/Docs";
import Torneio from "./components/builds/torneio/Torneio";
export default function App() {

  window.localStorage.getItem('dark-mode')??window.localStorage.setItem("dark-mode","1")

  return <>
    <Router>
      <Path as="/" absolute>
        <Homepage />
      </Path>
      <Path as="/projects" absolute>
        <Projects />
      </Path>
      <Path as="/about" absolute>
        <About />
      </Path>
      <Path as="/donate" absolute>
        <Donate />
      </Path>
      <Path as="/doc" absolute>
        <Docs/>
      </Path>
     
      <Path as="/torneio-app" absolute>
        <Torneio/>
      </Path>
   
      <E404>
        <Error404></Error404>
      </E404>
    </Router>
  </>
}