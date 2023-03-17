import Anchor from "milhas";
import Bar from "../essentials/Bar";
import Content from "../essentials/Content";
import Wallpaper from "../essentials/Wallpaper";
import { Window } from "../essentials/Window";

export default function ERR404() {
    return <>
        <Bar></Bar>
        <Wallpaper></Wallpaper>
        <Content>
            <section style={{height:'calc(100vh - 45px)',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Window title="Warning" width='400px' height="400px">
                    <header style={{ width: "100%", height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', flexDirection: 'column' }}>
                        <h2>ERROR 404</h2>
                        <p>This path does not seem to exist!</p>
                        <Anchor href="/" style={{ color: '#77f', textDecoration: 'underline' }}>Go back</Anchor>
                        <p style={{ fontSize: '80px', margin: '20px' }}>⚠️</p>
                    </header>
                </Window>
            </section>
        </Content>
    </>
}