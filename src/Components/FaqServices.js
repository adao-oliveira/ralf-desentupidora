import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import FaqServices from '../assets/data/FaqServices';
import Question from './Question';

function ChartSection() {
    return (
        <ChartStyled >
            <InnerLayout>
                <div className="container">
                    <h3 style={{ color: 'var(--blue-primary)', textAlign: 'center', marginTop:'-4rem' }}>NOSSOS SERVIÇOS</h3>
                    <span id='po-article-header'></span>
                    <div className="chart-con">
                        <div className="chart-left">
                            <div className="questions-con">
                                {
                                    FaqServices.map((q) => {
                                        return <Question key={q.id} {...q} />
                                    })
                                }
                            </div>
                        </div>
                        <div className="chart-right">
                            <div className="stats">
                                {/* <img src={chart} alt="" /> */}
                                <form class="text-white" style={{ backgroundColor: 'var(--blue-primary)', padding: '10px', borderRadius: '10px' }}>
                                    <div class="card-header p-0">
                                        <div class="text-white text-center py-2">
                                            <h4>
                                                <i class="fa fa-envelope"></i> Precisando de Orçamento?
                                            </h4>
                                        </div>
                                    </div>
                                    <div class="card-body p-3">

                                        <div class="form-group">
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">
                                                        <i class="fa fa-user text-info"></i>
                                                    </div>
                                                </div>
                                                <input type="text" class="form-control" id="nome" name="nome" placeholder="Nome completo" required />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">
                                                        <i class="fa fa-envelope text-info"></i>
                                                    </div>
                                                </div>
                                                <input type="email" class="form-control" id="email" name="email" placeholder="Seu melhor e-mail" required />
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">
                                                        <i class="fa fa-comment text-info"></i>
                                                    </div>
                                                </div>
                                                <textarea class="form-control" placeholder="Mensagem" required></textarea>
                                            </div>
                                        </div>

                                        <div class="text-center">
                                            {/* <input type="submit" value="Enviar" class="btn btn-light rounded-0 py-2 w-50" /> */}
                                            <button type="submit" id="enviar" class="btn btn-light py-2">Enviar</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
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

    .faq {
        max-width:450px;
        margin: auto;
        position: relative;
        height: auto;
      }
      
      .faq-container {
        width: 100%;
        height: 100%;
      }
      
      .faq-label {
        cursor: pointer;
        width: 100%;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        border-radius: 5px;
      }
      
      .faq-label-text {
        color: var(--blue-primary);
        font-weight: bold;
      }
      
      .faq-label-icon {
        padding: 2px 3px;
        background: #808080;
        border-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .material-icons {
        color: white;
        transition: 0.3s ease;
      }
      
      .faq-answer {
        transition: 0.3s ease;
        margin-top: 15px;
        height: 0;
        border-radius: 6px;
        color: rgba(127, 121, 121, 1);
        overflow: hidden;
      }
      
      .faq-answer-content {
        padding: 10px 0 10px 15px;
      }
      
      .active {
        background: #FFFFFF;
        border: 1px solid #C7C4C4;
        height: auto;
        margin-bottom: 25px;
      }
      .rotate{
        transform: rotate(180deg)
      }
    
      #po-article-header:after {
        content: "";
        display: block;
        height: 5px;
        background: #09456c;
        width: 70px;
        margin: 0 auto;
        position: absolute;
        margin-top: 20px;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export default ChartSection
