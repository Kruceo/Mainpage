import img from '../../../assets/Com5.png';
import img2 from '../../../assets/2.png';
import { locale } from '../../../lib/lang';
import "./HomeSection3.less"
export default function HomeSection3() {
    return <section className='homesection3 content'>

        <div className="card">
            <div className='img'>
                <img src={img} alt="" />
                <img src={img2} alt="" />
            </div>

            <div className="text-box">
                <h1>{locale.iceBrakeSection.title}</h1>
                {/* <p>A cara da Kruceo é o gato, mas nós somos um camaleão quando o assunto é estilo.</p><p>Isso reflete exatamente a essência da Kruceo, com uma identidade forte e marcante, mas uma flexibilidade incrível para se adaptar a diferentes necessidades e estilos. </p> */}
                {/* <p>Seja no minimalismo elegante ou em algo mais extravagante e cheio de cores, a Kruceo sempre entrega uma solução que se encaixa perfeitamente no contexto, com um toque único de criatividade.</p> */}
                {/* <p>Minha especialidade é o desenvolvimento web e de software, mas também me aventuro em outras áreas, como modelagem 3D e design. Essa diversificação me permite explorar diferentes aspectos criativos e ampliar minha visão como desenvolvedor. Estou sempre buscando expandir meus conhecimentos e habilidades, experimentando novas tecnologias e técnicas. Estou entusiasmado em continuar crescendo e contribuindo para projetos inovadores.</p> */}
                <p>{locale.iceBrakeSection.text}</p>
                {/* <p>O café pode ser um expresso forte, um latte cremoso ou até um gelado refrescante, mas no fundo, é sempre café. </p> <p>Assim como a Kruceo, que se adapta ao estilo, mas nunca perde sua essência. </p> */}
            </div>
        </div>
    </section>
}