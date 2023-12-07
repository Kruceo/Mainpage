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
                        Feel free to explore and collaborate on the open-source projects. Your contributions and insights are valued as the projects continue to evolve. Join the community effort to enhance and refine these solutions, fostering a collaborative environment for innovation and shared knowledge.
                    </p>
                </Box>
                <Box>
                    <div className="icon" style={{ width: 120, height: 120, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>🔩</div>
                    <h4>Modularity</h4>
                    <p style={{ padding: 20, textAlign: 'center' }}>
                    See Kruceo's acknowledgment of modularity's value in efficiently organizing their projects, demonstrating dedication to scalable solutions that significantly contribute to project success.
                    </p>
                </Box>
                <Box>
                    <div className="icon" style={{ width: 120, height: 120, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>🗿</div>
                    <h4>Efficiency</h4>
                    <p style={{ padding: 20, textAlign: 'center' }}>
                        Kruceo has efficient and intuitive solutions at the core of their projects, emphasizing a commitment to streamlined and user-friendly outcomes. 
                        </p>
                </Box>
                <Box>
                    <div className="icon" style={{ width: 120, height: 120, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>📚</div>
                    <h4>Continuous Learning</h4>
                    <p style={{ padding: 20, textAlign: 'center' }}>
                    
                        Kruceo values continuous learning, recognizing it as a cornerstone for personal and professional growth. This commitment underscores an ongoing dedication to staying informed, adapting to evolving trends, and refining skills. 
                        </p>
                </Box>

            </div>
        </InnerContent>
    </Content>
}