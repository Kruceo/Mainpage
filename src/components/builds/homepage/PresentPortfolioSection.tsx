import { Box } from "../../essential/Box/Box"
import "./PresentPortfolioSection.less"
import { locale } from "../../../lib/lang"
import AButton from "../../essential/Button/AButton"
export default function HomeSection2() {
    return <section className='highlight'>
        {/* <Title>Take a good see</Title> */}
        <Box className="project-box">
            {/* <h1>Title</h1> */}
            <img src="https://avatars.githubusercontent.com/u/98596719?v=4" alt="" />
            <div>
                <p>{locale.presentPortfolioSection.text}</p>

                <div className="buttons">
                    <AButton target="_blank" href="https://github.com/Kruceo?tab=repositories">
                        <i className="icon-github"></i>  Github
                    </AButton>
                    <AButton target="_blank" href="https://www.npmjs.com/~kruceo">
                        <i className="icon-npm"></i>  NPM
                    </AButton>

                    <AButton href="/projects">
                        <i className="icon-books"></i>  {locale.projects.title}
                    </AButton>
                </div>
            </div>
        </Box>
    </section>
}