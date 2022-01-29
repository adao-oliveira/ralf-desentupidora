import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'

function Orcamento() {
    return (
        <BudgetStyled >
            <InnerLayout>
                <div className="container">
                    <div className="content first-content">
                        <div className="first-column">
                            <h2 className="title title-primary">Atendimento online?</h2>
                            <p className="description description-primary">Entre em contato através do nosso Whatsapp</p>
                            <button id="signin" className="btn btn-primary">
                                <a href='https://api.whatsapp.com/send?phone=5519997514121&text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20com%20um%20caso%20de%20entupimento!'>
                                    Entrar em contato
                                </a>
                            </button>
                            <p className="description description-primary mt-4">Visite nossas redes sociais</p>
                            <div className="social-media">
                                <ul className="list-social-media">
                                    <a className="link-social-media" href="https://facebook.com/">
                                        <li className="item-social-media">
                                            <i className="fab fa-facebook-f"></i>
                                        </li>
                                    </a>
                                    <a className="link-social-media" href="https://facebook.com/">
                                        <li className="item-social-media">
                                            <i className="fab fa-instagram"></i>
                                        </li>
                                    </a>
                                    <a className="link-social-media" href="https://facebook.com/">
                                        <li className="item-social-media">
                                            <i className="fab fa-whatsapp"></i>
                                        </li>
                                    </a>
                                </ul>
                            </div>
                            {/* <!-- social media --> */}
                        </div>
                        <div className="second-column">
                            <h2 className="title title-second">Fazer orçamento</h2>
                            <p className="description description-second">Preencha o formulário abaixo e informe no campo MENSAGEM <br /> o tipo de seviço que precisa e entraremos em contato em breve </p>
                            <form className="form">
                                <label className="label-input" for="">
                                    <i className="far fa-user icon-modify"></i>
                                    <input type="text" placeholder="Nome completo" />
                                </label>

                                <label className="label-input" for="">
                                    <i className="far fa-envelope icon-modify"></i>
                                    <input type="email" placeholder="E-mail" />
                                </label>

                                <label className="label-input" for="">
                                    <i className="fas fa-phone icon-modify"></i>
                                    <input type="number" maxLength={11} placeholder="Número de telefone com (DDD)" />
                                </label>

                                <label className="label-input" for="">
                                    <i className="far fa-comment-alt icon-modify"></i>
                                    <input type="text" placeholder="Mensagem" />
                                </label>

                                <button className="btn btn-second">Enviar</button>
                            </form>
                        </div>
                        {/* <!-- second column --> */}
                    </div>
                </div>
            </InnerLayout>
        </BudgetStyled >
    )
}

const BudgetStyled = styled.section`
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.content {
    background-color: #fff;
    border-radius: 15px;
    width: 960px;
    height: 50%;
    justify-content: space-between;
    align-items: center;
    position: relative;
}
.content::before {
    content: "";
    position: absolute;
    background-color: var(--blue-primary);
    width: 40%;
    height: 100%;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    left: 0;
}
.title {
    font-size: 28px;
    font-weight: bold;
    text-transform: capitalize;
}
.title-primary {
    color: #fff;
}
.title-second {
    color: var(--blue-primary);
}
.description {
    font-size: 14px;
    font-weight: 300;
    line-height: 30px;
}
.description-primary {
    color: #fff;
}
.description-second {
    color: #7f8c8d;
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
.btn-primary {
    background-color: #d1d1d1;
    border: 1px solid #fff;
    transition: background-color .5s;
}
.btn-primary:hover {
    background-color: #fff;
    color: var(--blue-primary);
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
.social-media {
    margin: 1rem 0;
}
.link-social-media:not(:first-child){
    margin-left: 10px;
}
.link-social-media .item-social-media {
    transition: background-color .5s;
}
.link-social-media:hover .item-social-media{
    background-color: #d1d1d1;
    color: #fff;
    border-color: #d1d1d1;
}
.list-social-media {
    display: flex;
    list-style-type: none;
}
.item-social-media {
    border: 1px solid #d1d1d1;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: #95a5a6;
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
.password {
    color: #34495e;
    font-size: 14px;
    margin: 15px 0;
    text-align: center;
}
.password::first-letter {
    text-transform: capitalize;
}



.sign-in-js .first-content .first-column {
    z-index: -1;
}

.sign-in-js .second-content .second-column {
    z-index: 11;
}
.sign-in-js .second-content .first-column {
    z-index: 13;
}

.sign-in-js .content::before {
    left: 60%;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    animation: slidein 1.3s; /*MODIFIQUEI DE 3s PARA 1.3s*/

    z-index: 12;
}

.sign-up-js .content::before {
    animation: slideout 1.3s; /*MODIFIQUEI DE 3s PARA 1.3s*/

    z-index: 12;
}

.sign-up-js .second-content .first-column,
.sign-up-js .second-content .second-column {
    z-index: -1;
}

.sign-up-js .first-content .second-column {
    z-index: 11;
}

.sign-up-js .first-content .first-column {
    z-index: 13;    
}


/* DESLOCAMENTO CONTEÚDO ATRÁS DO CONTENT:BEFORE*/
.sign-in-js .first-content .second-column {

    z-index: -1;
    position: relative;
    animation: deslocamentoEsq 1.3s; /*MODIFIQUEI DE 3s PARA 1.3s*/
}

.sign-up-js .second-content .second-column {
    position: relative;
    z-index: -1;
    animation: deslocamentoDir 1.3s; /*MODIFIQUEI DE 3s PARA 1.3s*/
}

/*ANIMAÇÃOO CSS PARA O CONTEÚDO*/

@keyframes deslocamentoEsq {

    from {
        left: 0;
        opacity: 1;
        z-index: 12;
    }

    25% {
        left: -80px;
        opacity: .5;
        /* z-index: 12; NÃO HÁ NECESSIDADE */
    }

    50% {
        left: -100px;
        opacity: .2;
        /* z-index: 12; NÃO HÁ NECESSIDADE */
    }

    to {
        left: -110px;
        opacity: 0;
        z-index: -1;
    }
}


@keyframes deslocamentoDir {

    from {
        left: 0;
        z-index: 12;
    }

    25% {
        left: 80px;
        /* z-index: 12;  NÃO HÁ NECESSIDADE*/
    }

    50% {
        left: 100px;
        /* z-index: 12; NÃO HÁ NECESSIDADE*/
        /* background-color: yellow;  Exemplo que dei no vídeo*/
    }

    to {
        left: 110px;
        z-index: -1;
    }
}


/*ANIMAÇÃO CSS*/

@keyframes slidein {

    from {
        left: 0;
        width: 40%;
    }

    25% {
        left: 5%;
        width: 50%;
    }

    50% {
        left: 25%;
        width: 60%;
    }

    75% {
        left: 45%;
        width: 50%;
    }

    to {
        left: 60%;
        width: 40%;
    }
}

@keyframes slideout {

    from {
        left: 60%;
        width: 40%;
    }

    25% {
        left: 45%;
        width: 50%;
    }

    50% {
        left: 25%;
        width: 60%;
    }

    75% {
        left: 5%;
        width: 50%;
    }

    to {
        left: 0;
        width: 40%;
    }
}

/*VERSÃO MOBILE*/
@media screen and (max-width: 1040px) {
    .content {
        width: 100%;
        height: 100%;
    }

    .content::before {
        width: 100%;
        height: 40%;
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
    
    .sign-in-js .content::before {
        top: 60%;
        left: 0;
        border-radius: 0;

    }

    .form {
        width: 90%;
    }
    
    /* ANIMAÇÃO MOBILE CSS*/

    @keyframes deslocamentoEsq {

        from {
            top: 0;
            opacity: 1;
            z-index: 12;
        }
    
        25% {
            top: -80px;
            opacity: .5;
            /* z-index: 12; NÃO HÁ NECESSIDADE */
        }
    
        50% {
            top: -100px;
            opacity: .2;
            /* z-index: 12; NÃO HÁ NECESSIDADE */
        }
    
        to {
            top: -110px;
            opacity: 0;
            z-index: -1;
        }
    }
    
    
    @keyframes deslocamentoDir {
    
        from {
            top: 0;
            z-index: 12;
        }
    
        25% {
            top: 80px;
            /* z-index: 12;  NÃO HÁ NECESSIDADE*/
        }
    
        50% {
            top: 100px;
            /* z-index: 12; NÃO HÁ NECESSIDADE*/
            /* background-color: yellow;  Exemplo que dei no vídeo*/
        }
    
        to {
            top: 110px;
            z-index: -1;
        }
    }
    
    
    
    @keyframes slidein {
    
        from {
            top: 0;
            height: 40%;
        }
    
        25% {
            top: 5%;
            height: 50%;
        }
    
        50% {
            top: 25%;
            height: 60%;
        }
    
        75% {
            top: 45%;
            height: 50%;
        }
    
        to {
            top: 60%;
            height: 40%;
        }
    }
    
    @keyframes slideout {
    
        from {
            top: 60%;
            height: 40%;
        }
    
        25% {
            top: 45%;
            height: 50%;
        }
    
        50% {
            top: 25%;
            height: 60%;
        }
    
        75% {
            top: 5%;
            height: 50%;
        }
    
        to {
            top: 0;
            height: 40%;
        }
    }
   
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

export default Orcamento