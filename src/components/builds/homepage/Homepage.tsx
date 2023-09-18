import './Homepage.less'
import Bar from '../../essential/Bar/Bar'
import Footer from '../../essential/Bar/Footer'
import Welcome from './Welcome'
// import HomeSection2 from './HomeSection2'
import HomeSection1 from './HomeSection1'

function Homepage() {
    return (
        <>
            <Bar/>
            <Welcome />

            <HomeSection1 />

            {/* <HomeSection2 /> */}

            <Footer/>

        </>
    )
}

export default Homepage
