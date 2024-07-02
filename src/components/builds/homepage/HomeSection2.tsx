import { Box } from "../../essential/Box/Box";
import "./HomeSection2.less"
export default function HomeSection2() {

    return <section className='homesection2 content'>
            <h1>Constantes Variaveis</h1>
            <div className="card">
                <img src="https://raw.githubusercontent.com/Kruceo/cdn/main/icons/cat_icon_colored.svg" alt="kruceo" />
                <Box>
                    <div style={{ padding: 10 }}>
                        <p>Minha especialidade é o desenvolvimento web e de software, mas também me aventuro em outras áreas, como modelagem 3D e design. Essa diversificação me permite explorar diferentes aspectos criativos e ampliar minha visão como desenvolvedor. Estou sempre buscando expandir meus conhecimentos e habilidades, experimentando novas tecnologias e técnicas. Estou entusiasmado em continuar crescendo e contribuindo para projetos inovadores.</p>
                    </div>
                </Box>
            </div>
    </section>
}