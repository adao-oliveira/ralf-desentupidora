import React from 'react'
import { InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';
import bgCircles from '../img/circleBg.svg';
import { BsDiamondFill } from "react-icons/bs";

function MessagingSection() {
    return (
        <MessageStyle>
            <InnerLayout>
                <div className="message-con">
                    <div className="left-items">
                        <img src={bgCircles} alt="" className="bgCircle" />
                        <h2 className="secondary-heading">
                            SOBRE NÓS
                        </h2>
                        <p style={{marginBottom:'2rem'}}>
                            A Desentupidora em Campinas trabalha com prestação de serviço de desentupimento com atendimento emergencial 24 horas.
                            Contamos com suporte e serviços altamente qualificados em sistemas de desentupimento, estamos de prontidão para atender aos chamados de desentupimento de pias, vasos sanitários, ralos, colunas industriais, esgoto e redes de esgoto.
                            Acreditamos que para alcançar a excelência é necessário qualidade no serviço e na Desentupidora Ralf em Campinas você pode confiar. Temos anos de experiência e possuímos atendimento emergencial 24 horas.
                        </p>
                    </div>
                    <div className="right-items">
                        <h2 className="secondary-heading">
                            VANTAGENS DE CONTRATAR A DESENTUPIDORA EM CAMPINAS:
                        </h2>
                        <p className="m-para">
                            <BsDiamondFill /> <strong>PREÇO JUSTO</strong>
                            <p className="m-para">Na <strong>Desentupidora em Campinas</strong>, você encontra o melhor preço e sendo a mais preparada para atender seus clientes com urgência em serviços.</p>

                            <BsDiamondFill /> <strong>ATENDIMENTO RÁPIDO</strong>
                            <p className="m-para">Serviços de <strong>Desentupimento em Campinas</strong> em residências, comércios, prédios, escritórios, salões, igrejas, entre outros.</p>

                            <BsDiamondFill /> <strong>COBERTURA DE ORÇAMENTOS</strong>
                            <p className="m-para">Entre em contato com nossos atendentes e solicite um orçamento. Oferecemos ampla cobertura de orçamentos, para todos Serviços que realizamos em Campinas .</p>
                        </p>
                        <img src={bgCircles} alt="" className="bgCircle" />
                    </div>
                </div>
            </InnerLayout>
        </MessageStyle>
    )
}

const MessageStyle = styled.section`
h2{
    font-size: 25px;
    margin-bottom: 20px;
}
    .message-con{
        margin-top: 150px;
        margin-bottom: 150px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 1347px){
            grid-template-columns: repeat(1, 1fr);
        }
    }


    .left-items{
        position: relative;
        padding-right: 2rem;
        .m-para{
            padding: 1rem 0;
        }
        .images-con{
            display: flex;
            align-items: center;
            .image-2, .image-3, .image-4, .image-5{
                margin-left: -22px;
            }
        }
        .bgCircle{
            position: absolute;
            top: -30%;
            left: 0;
            z-index: -1;
        }
    }
    .right-items{
        position: relative;
        img{
            padding-left: 2rem;
        }
        .bgCircle{
            position: absolute;
            bottom: -15%;
            right: 0;
            z-index: -1;
        }
    }
`;

export default MessagingSection;
