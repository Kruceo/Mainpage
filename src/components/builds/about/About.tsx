import Bar from "../../essential/Bar/Bar";
import Footer from "../../essential/Bar/Footer";
import { Box } from "../../essential/Box/Box";
import Content from "../../essential/Content/Content";
import InnerContent from "../../essential/Content/InnerContent";
import Title from "../../essential/Title/Title";
import "./About.less"
export default function About() {
    return <>
        <Bar></Bar>
        <Content className="first about-content">
            <InnerContent>
                <div>
                <Title>About</Title>
                </div>
                <div className="grid">
                  
                   
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="NodeJS" />
                    <Box className="sub-box">
                        <p >
                        Kruceo is a full-stack developer with a strong background in software and web development. His knowledge in both frontend and backend enables him to contribute to solutions throughout all parts of a project.
                            </p>
                    </Box>
                    <Box className="sub-box">
                    <p>
                    With expertise in reactive and stylesheets technologies, along with his own stack, Kruceo delivers modern, efficient, and scalable projects.
                        </p>
                    </Box>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" />
                    <img src="https://vitejs.dev/logo.svg" alt="Vite" />
                    <Box className="sub-box">
                    <p>His fullstack development skills cover all stages of a project, from conception to implementation, ensuring a comprehensive and integrated approach.</p>
                    </Box>
                </div>
            </InnerContent>
        </Content>
      
        <Footer></Footer>
    </>
}