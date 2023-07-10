import { Box } from "../../essential/Box/Box";
import Content from "../../essential/Content/Content";
import InnerContent from "../../essential/Content/InnerContent";
import Title from "../../essential/Title/Title";
import "./HomeSection1.less"
export default function HomeSection1() {
    return <Content>
        <InnerContent className='techs-content'>
            <Title>My Style</Title>
            <div id='techs'>
                <Box>
                    <div className="icon" style={{ width: 120, height: 120, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>📦</div>
                    <h4>Open Source</h4>
                    <p style={{ padding: 20, textAlign: 'center' }}>
                        My open-source projects are available for inspiration and collaboration. Feel free to explore and benefit from the solutions I share with the community.
                    </p>
                </Box>
                <Box>
                    <div className="icon" style={{ width: 120, height: 120, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>🔩</div>
                    <h4>Modularity</h4>
                    <p style={{ padding: 20, textAlign: 'center' }}>
                        I value modularity, which allows for efficient and flexible organization of the entire project.
                    </p>
                </Box>
                <Box>
                    <div className="icon" style={{ width: 120, height: 120, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>🗿</div>
                    <h4>Efficiency</h4>
                    <p style={{ padding: 20, textAlign: 'center' }}>
                    I focus on efficient and intuitive solutions in my projects.
                        </p>
                </Box>
                <Box>
                    <div className="icon" style={{ width: 120, height: 120, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>📚</div>
                    <h4>Continuous Learning</h4>
                    <p style={{ padding: 20, textAlign: 'center' }}>
                    I'm committed to continuous learning, always striving to improve my skills and stay up-to-date with the latest trends and technologies.
                        </p>
                </Box>

            </div>
        </InnerContent>
    </Content>
}