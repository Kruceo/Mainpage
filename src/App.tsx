import Homepage from "./components/builds/homepage/Homepage";
import "./App.less"
import { Path, Router } from "milhas";
import Projects from "./components/builds/projects/Projects";
import About from "./components/builds/about/About";
import Donate from "./components/builds/donate/Donate";
export default function App() {
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
    </Router>

    {/* <Projects></Projects> */}
  </>
}