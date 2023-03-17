import { Path } from 'milhas/src/components/Path'
import Router from 'milhas/src/components/Router'
import { useState } from 'preact/hooks'
import './app.css'
import E404 from 'milhas/src/components/E404.jsx'
import { Homepage } from './assets/components/builds/Homepage'
import ERR404 from './assets/components/builds/404'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Path as="/" absolute>
          <Homepage></Homepage>
        </Path>
        <Path as="/info" absolute>1232412312312312</Path>
        <E404>
          <ERR404></ERR404>
        </E404>
      </Router>

    </>
  )
}
