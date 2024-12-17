import Bar from "../../essential/Bar/Bar";
import Footer from "../../essential/Bar/Footer";
import Content from "../../essential/Content/Content";
import "./Torneio.less"
import torneioSSImg from '../../../assets/torneio_ss.jpeg'
import Title from "../../essential/Title/Title";
import Button from "../../essential/Button/Button";
import { useState } from "react";
import Smartphone from "./Smartphone";
import DownloadOnGooglePlayButton from "./DownloadOnGooglePlayButton";
export default function () {
    const [sended, setSended] = useState(false)
    return <>
        <Bar></Bar>
        <Content>
            <Title>Torneio</Title>
            <div className="grid">
                <div className="content">
                    <h1>Sobre</h1>
                    <p> Este é um aplicativo Android criado para proporcionar uma jogatina justa e equilibrada, ideal para organizar torneios onde todos os times joguem o mesmo tempo.</p>
                    <ul>
                        <li>Tabela de pontos corridos com dados completos.</li>
                        <li>Compartilhamento online de torneios.</li>
                        <li>Exportação de times via imagem.</li>
                        <li>Movimentação de jogadores entre relacionados e não relacionados.</li>
                        <li>Avaliação de jogadores para criação de times equilibrados.</li>
                        <li>Serviço de timer integrado com notificações.</li>
                    </ul>


                    <DownloadOnGooglePlayButton href="#" classname="torneio-google-play-button" topText="Em breve no" />
                </div>
                <Smartphone screenImage={torneioSSImg} />
            </div>
            <Title>Participar do Teste</Title>
            <div className="testing-content">
                <p>Ter pessoas reais participando dos testes do App é essencial para sua evolução.<br />Além de ser um requisito obrigatório para o mesmo estar presente no Google Play Store. <br/>Solicite acesso antecipado agora mesmo!</p>
                <form className={sended ? "sended" : ""} onSubmit={(e) => {
                    e.preventDefault()
                    const data = new FormData(e.target as HTMLFormElement)
                    fetch("https://torneio-testing-email.kruceo.com", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            email: data.get("email-input")?.toString().slice(0,256),
                            phone: data.get("phone-input")?.toString().slice(0,32)
                        })
                    })
                    setSended(true)
                }}>
                    <label htmlFor="email-input">Email*:</label>
                    <input placeholder="example@mail.com" required name="email-input" id="email-input" type="email" />
                    <label htmlFor="phone-input">Telefone:</label>
                    <input placeholder="98 7654 3210" name="phone-input" id="email-input" type="tel" />
                    <Button>Enviar</Button>
                </form>
                {sended ?
                    <p className="thanks">Obrigado pela Colaboração!</p>
                    : null
                }
            </div>
        </Content>
        <Footer></Footer>
    </>
}