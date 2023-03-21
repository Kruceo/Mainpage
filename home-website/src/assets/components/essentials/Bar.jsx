import { icon, primary, secondary } from "../../../config/colors.mjs";
import Router from "milhas/src/components/Router.jsx";
import {Path} from 'milhas/src/components/Path.jsx'
import Anchor from 'milhas/src/components/Anchor.jsx'
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
            backdropFilter:'blur(10px)',
            display:"flex",
            borderBottom:primary + ' 1px solid',
            alignItems:'center'
    
    }}>
        <img src={icon} alt="" style={{height:'35px',margin:'0 0 0 5px'}}></img>
        {/* <Anchor href='http://ola'></Anchor> */}
        <Anchor
        style={{margin:'0px 10px 0px 10px',color:'white'}}
        href="/">Home</Anchor>
        <Anchor
        style={{margin:'0px 10px 0px 0px',color:'white'}}
        href="/projects">Projects</Anchor>
        <Anchor
        style={{margin:'0px 10px 0px 0px',color:'white'}}
        href="/info">Info</Anchor>
        <div style={{margin:'0px 10px 0px auto'}}>
            <a href="http://github.com/kruceo" target="_blank" rel="noopener noreferrer">
                <img src="../../../../public/img/git.png" alt="" style={{opacity:.1}} />
            </a>
        </div>
    </header>
}