import { blur, icon, primary, secondary, text } from "../../../config/colors.mjs";
import { Anchor } from "milhas";
export default function Bar(props){
    return <header style={
        {
            width:"100%",
            height:'45px',
            backgroundColor:secondary,
            position:'fixed',
            boxShadow:'0px 0px 30px #0008',
            left:'0px',
            top:'0px',
            zIndex:'100',
            backdropFilter:'blur('+blur+')',
            display:"flex",
            borderBottom:primary + ' 1px solid',
            alignItems:'center',
            
            
    
    }}>
        <img src={icon} alt="" style={{height:'35px',margin:'0 0 0 5px'}}></img>
        {/* <Anchor href='http://ola'></Anchor> */}
        <Anchor
        style={{margin:'0px 10px 0px 10px',color:text}}
        href="/">Home</Anchor>
        <Anchor
        style={{margin:'0px 10px 0px 0px',color:text}}
        href="/projects">Projects</Anchor>
        <Anchor
        style={{margin:'0px 10px 0px 0px',color:text}}
        href="/info">Info</Anchor>
        <Anchor href="/chatrgb"
        style={{
            opacity:1,
            marginLeft: "auto",
            marginRight:"20px",
            cursor:'pointer',color:text
        }}>
            ChatRGB
        </Anchor>
        {/* <div style={{margin:'0px 10px 0px 10px'}}>
            <a href="http://github.com/kruceo" target="_blank" rel="noopener noreferrer">
                <img src="/img/git.png" alt="" style={{opacity:.1}} />
            </a>
        </div> */}
    </header>
}