import './Homepage.less'
import Bar from '../../essential/Bar/Bar'
import Footer from '../../essential/Bar/Footer'
import Welcome from './Welcome'
import AboutSection from './AboutSection'
import Content from '../../essential/Content/Content'
import PresentPortfolioSection from './PresentPortfolioSection'
import HomeSection3 from './HomeSection3'
import autoScroll from './AutoScroll'

function Homepage() {
    document.title = `Kruceo`
    autoScroll()
    return (
        <>
            <Bar />
            <Content>
                <Welcome />
                <AboutSection />
                <HomeSection3 />
                <PresentPortfolioSection />
            </Content>
            <Footer />
        </>
    )
}

export default Homepage
