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


                    <DownloadOnGooglePlayButton href="https://play.google.com/store/apps/details?id=com.kruceo.torneio" classname="torneio-google-play-button" />
                </div>
                <Smartphone screenImage={torneioSSImg} />
            </div>
           
        </Content>
        <Footer></Footer>
    </>
}