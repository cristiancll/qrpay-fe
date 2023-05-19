import React from 'react';
import CenterContainer from "../components/CenterContainer.jsx";

const AboutPage = () => {
    return (
        <CenterContainer middle>
            <h1>Sobre o QRPay</h1>
            <p>O QRPay é um sistema inovador projetado para simplificar e agilizar o processo de administração das compras dos clientes em eventos. Esqueça as filas intermináveis, o uso excessivo de papel e a complexidade dos pontos de venda (PoS) tradicionais! Com o QRPay, tudo o que você precisa é do seu celular e conexão com a internet para gerenciar suas transações de forma eficiente.</p>
            <p>Nosso sistema utiliza o poder do código QR para oferecer uma experiência conveniente e sem complicações aos participantes do evento. Com o QRPay, os clientes recebem um código QR personalizado, que contém todas as informações necessárias para realizar suas compras. Eles podem acessar o código QR por meio de seus dispositivos móveis e, ao longo do evento, adicionar novos pedidos ao código existente, eliminando a necessidade de ir ao caixa várias vezes.</p>
            <p>Imagine um evento onde os clientes recebem um código QR exclusivo na entrada. Esse código contém informações sobre a conta do cliente e o saldo disponível. À medida que desejam fazer compras, os clientes simplesmente apresentam seu código QR em cada ponto de venda. Os vendedores escaneiam o código e adicionam os itens selecionados à conta do cliente. O saldo é atualizado automaticamente e os clientes podem continuar a aproveitar o evento sem interrupções.</p>
            <p>Além disso, o QRPay oferece integração com o WhatsApp, tornando a experiência ainda mais prática para os clientes. Eles podem receber notificações sobre promoções especiais, atualizações do evento e até mesmo interagir com atendentes virtuais para obter assistência. Tudo isso de forma rápida e conveniente, sem precisar sair do aplicativo de mensagens.</p>
            <p>O QRPay é uma solução completa e personalizável, adaptável a diferentes tipos de eventos, desde festivais de música e feiras gastronômicas até conferências corporativas e exposições. Nossa plataforma robusta e segura garante a privacidade e a proteção dos dados dos clientes, cumprindo as regulamentações mais rigorosas de segurança.</p>
            <p>Chegou a hora de revolucionar a forma como seu evento administra as compras dos clientes. Elimine as filas e a complexidade dos pontos de venda tradicionais. Faça tudo pelo celular e pela internet com o QRPay. Entre em contato conosco hoje mesmo através do email <a href="mailto:sistema.qrpay@gmail.com">sistema.qrpay@gmail.com</a> e descubra como podemos tornar seu evento mais eficiente, prático e inesquecível para seus clientes.</p>
        </CenterContainer>
    );
};

export default AboutPage;
