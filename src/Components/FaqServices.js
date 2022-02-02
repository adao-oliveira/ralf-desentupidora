import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import FaqServices from '../assets/data/FaqServices'
import Question from './Question'

function ChartSection() {
    return (
        <ChartStyled >
            <InnerLayout>
                <div className="container">
                    <div className="section first-section">
                        <div className="column-left">
                            <h2 className='text-left'>Nossos serviços</h2>
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
                        <div className="column-right">
                            <h2>Fazer orçamento</h2>
                            <p>Preencha o formulário abaixo e informe no campo MENSAGEM <br /> o tipo de seviço que precisa e entraremos em contato em breve </p>
                            <form className="form-faq">
                                <label className="label-input-faq" for="">
                                    <i className="far fa-user icon-form-faq"></i>
                                    <input type="text" placeholder="Nome completo" />
                                </label>

                                <label className="label-input-faq" for="">
                                    <i className="far fa-envelope icon-form-faq"></i>
                                    <input type="email" placeholder="E-mail" />
                                </label>

                                <label className="label-input-faq" for="">
                                    <i className="fas fa-phone icon-form-faq"></i>
                                    <input type="number" maxLength={11} placeholder="Número de telefone com (DDD)" />
                                </label>

                                <label className="label-input-faq" for="">
                                    <i className="far fa-comment-alt icon-form-faq"></i>
                                    <input type="text" placeholder="Mensagem" />
                                </label>

                                <button className="btn btn-form-faq">Enviar</button>
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
    .chart-left{
        width: 80%;
        @media screen and (max-width: 1347px) {
                width: 100%;
            }
        }
    }
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .section {
        background-color: var(--blue-primary);
        border-radius: 15px;
        justify-content: space-between;
        align-items: center;
        position: relative;
        width: 100%;
        padding: 20px;
    }
    .section::before {
        section: "";
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
    h2 {
        color: var(--white);
    }
    p {
        color: #fff;
        font-weight: 600;
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
    .btn-form-faq {
        background-color: var(--blue-primary);
        border: 1px solid var(--blue-primary);
        transition: background-color .5s;
        color: #fff;
    }
    .btn-form-faq:hover {
        background-color: #fff;
        border: 1px solid var(--blue-primary);
        color: var(--blue-primary);
    }
    .first-section a {
        text-decoration: none;
    }
    .first-section {
        display: flex;
    }
    .first-section .column-right {
        z-index: 11;
    }
    .column-left {
        text-align: center;
        width: 40%;
        z-index: 10;
    }
    .column-right {
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .form-faq {
        display: flex;
        flex-direction: column;
        width: 55%;
        background-color: #d1d1d1;
        padding: 20px;
        border-radius: 20px;
    }
    .form-faq input {
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
    .label-input-faq {
        background-color: var(--blue-primary);
        display: flex;
        align-items: center;
        margin: 8px;
        border-radius: 5px;
    }
    .icon-form-faq {
        color: #d1d1d1;
        padding: 0 5px;
    }
    
    /*VERSÃO MOBILE*/
    @media screen and (max-width: 1040px) {
        .section {
            width: 100%;
        }
    
        .section::before {
            width: 100%;
            height: 70%;
            top: 0;
            border-radius: 0;
        }
        .first-section {
            flex-direction: column;
            justify-content: space-around;
        }
    
        .column-left, .column-right {
            width: 100%;
        }
    
    @media screen and (max-width: 740px) {
        .form-faq {
            width: 50%;
        }
    }
    
    @media screen and (max-width: 425px) {
        .form-faq {
            width: 100%;
        }
    }
`;

export default ChartSection
