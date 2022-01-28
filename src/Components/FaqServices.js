import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import FaqServices from '../assets/data/FaqServices';
import Question from './Question';

function ChartSection() {
    return (
        <ChartStyled >
            <InnerLayout>
            <div class="container">
            <div class="content first-content">
                <div class="first-column">
                    <h2>Nossos serviços</h2>
                    <div class="social-media">
                    <div className="chart-left">
                                <div className="questions-con">
                                    {
                                        FaqServices.map((q) => {
                                            return <Question key={q.id} {...q} />
                                        })
                                    }
                                </div>
                            </div>
                    </div>
                    {/* <!-- social media --> */}
                </div>
                <div class="second-column">
                    <h2 class="title-second">Fazer orçamento</h2>
                    <p class="description-second">Preencha o formulário abaixo e informe no campo MENSAGEM <br /> o tipo de seviço que precisa e entraremos em contato em breve </p>
                    <form class="form">
                        <label class="label-input" for="">
                            <i class="far fa-user icon-modify"></i>
                            <input type="text" placeholder="Nome completo" />
                        </label>

                        <label class="label-input" for="">
                            <i class="far fa-envelope icon-modify"></i>
                            <input type="email" placeholder="E-mail" />
                        </label>

                        <label class="label-input" for="">
                            <i class="fas fa-phone icon-modify"></i>
                            <input type="number" maxLength={11} placeholder="Número de telefone com (DDD)" />
                        </label>

                        <label class="label-input" for="">
                            <i class="far fa-comment-alt icon-modify"></i>
                            <input type="text" placeholder="Mensagem" />
                        </label>

                        <button class="btn btn-second">Enviar</button>
                    </form>
                </div>
                {/* <!-- second column --> */}
            </div>
        </div>
            </InnerLayout>
        </ChartStyled >
    )
}

const ChartStyled = styled.section`
    .chart-con{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 1347px){
            grid-template-columns: repeat(1, 1fr);
        }
        .chart-left{
            width: 80%;
            @media screen and (max-width: 1347px){
                width: 100%;
            }
            .stats{
                img{
                    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
                    border-radius: 62px;
                    width: 100%;
                }
                .stats-money{
                    display: flex;
                    padding-bottom: 1.3rem;
                    justify-content: space-between;
                }
            }
        }

        .chart-right{
            p{
                padding: 1.3rem 0;
            }
        }
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        // height: 100vh;
    }
    .content {
        background-color: #d1d1d1;
        border-radius: 15px;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }
    .content::before {
        content: "";
        position: absolute;
        background-color: var(--blue-primary);
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        left: 0;
    }
    .title {
        font-size: 28px;
        font-weight: bold;
        text-transform: capitalize;
    }
    .title-second {
        color: var(--blue-primary);
    }
    .description-second {
        color: #7f8c8d;
        font-size: 14px;
        font-weight: 300;
        line-height: 30px;
    }
    .btn {
        border-radius: 15px;
        text-transform: uppercase;
        color: var(--blue-primary);
        font-size: 10px;
        padding: 10px 50px;
        cursor: pointer;
        font-weight: bold;
        align-self: center;
        border: none;
        margin-top: 1rem;
    }
    .btn-second {
        background-color: var(--blue-primary);
        border: 1px solid var(--blue-primary);
        transition: background-color .5s;
        color: #fff;
    }
    .btn-second:hover {
        background-color: #fff;
        border: 1px solid var(--blue-primary);
        color: var(--blue-primary);
    }
    .first-content a {
        text-decoration: none;
    }
    .first-content {
        display: flex;
    }
    .first-content .second-column {
        z-index: 11;
    }
    .first-column {
        text-align: center;
        width: 40%;
        z-index: 10;
    }
    .second-column {
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .form {
        display: flex;
        flex-direction: column;
        width: 55%;
    }
    .form input {
        height: 45px;
        width: 100%;
        border: none;
        background-color: #ecf0f1;
        color: var(--blue-primary);
        font-weight: 600;
        padding-left: 5px;
        outline: none;
        outline-color: none;
    }
    input:-webkit-autofill 
    {    
        -webkit-box-shadow: 0 0 0px 1000px #ecf0f1 inset !important;
        -webkit-text-fill-color: #000 !important;
    }
    .label-input {
        background-color: #d1d1d1;
        display: flex;
        align-items: center;
        margin: 8px;
        border-radius: 5px;
    }
    .icon-modify {
        color: var(--blue-primary);
        padding: 0 5px;
    }
    
    /* second content*/
    
    .second-content {
        position: absolute;
        display: flex;
    }
    .second-content .first-column {
        order: 2;
        z-index: -1;
    }
    .second-content .second-column {
        order: 1;
        z-index: -1;
    }
    
    /*VERSÃO MOBILE*/
    @media screen and (max-width: 1040px) {
        .content {
            width: 100%;
            // height: 100%;
        }
    
        .content::before {
            width: 100%;
            height: 70%;
            top: 0;
            border-radius: 0;
        }
        .first-content, .second-content {
            flex-direction: column;
            justify-content: space-around;
        }
    
        .first-column, .second-column {
            width: 100%;
        }
    
    @media screen and (max-width: 740px) {
        .form {
            width: 50%;
        }
    }
    
    @media screen and (max-width: 425px) {
        .form {
            width: 100%;
        }
    }
`;

export default ChartSection
