import { Path } from 'milhas/src/components/Path'
import Router from 'milhas/src/components/Router'
import { useState } from 'preact/hooks'
import './app.css'
import E404 from 'milhas/src/components/E404.jsx'
import { Homepage } from './assets/components/builds/Homepage'
import ERR404 from './assets/components/builds/404'
import Wallpaper from './assets/components/essentials/Wallpaper'
import Projects from './assets/components/builds/Projects'
import Info from './assets/components/builds/Info'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Wallpaper></Wallpaper>
      <Router>
        <Path as="/" absolute>
          <Homepage />
        </Path>

        <Path as="/projects" absolute>
          <Projects />
        </Path>

        <Path as="/info" absolute>
          <Info />
        </Path>

        <E404>
          <ERR404></ERR404>
        </E404>

        <Path as="/wallpaper" absolute>
          <Wallpaper></Wallpaper>
        </Path>
      </Router>

    </>
  )
}
