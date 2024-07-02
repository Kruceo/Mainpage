import './Homepage.less'
import Bar from '../../essential/Bar/Bar'
import Footer from '../../essential/Bar/Footer'
import Welcome from './Welcome'
// import HomeSection2 from './HomeSection2'
import HomeSection1 from './HomeSection1'
import Content from '../../essential/Content/Content'

function Homepage() {
    document.title = `Kruceo`
    return (
        <>
            <Bar />
            <Content>
                <Welcome />

                <HomeSection1 />

                {/* <HomeSection2 /> */}
            </Content>
            <Footer />

        </>
    )
}

export default Homepage
