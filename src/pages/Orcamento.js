import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'

function Orcamento() {
    return (
        <BudgetStyled >
            <InnerLayout>
                <div class="container">
                    <div class="content">
                        <div class="contact-wrapper animated bounceInUp">
                            <div class="contact-info">
                                <h4>Atendimento online?</h4>
                                <p className='text-white'>Entre em contato através do nosso Whatsapp</p>
                                <div class="row justify-content-center mr-5 ml-5">
                                    <button id="signin" className="btn btn-primary">
                                        <a href='https://api.whatsapp.com/send?phone=5519997514121&text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20com%20um%20caso%20de%20entupimento!'>
                                            Entrar em contato
                                        </a>
                                    </button>
                                </div>
                                <p className="description description-primary mt-4 text-white text-center">Visite nossas redes sociais</p>
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
                            </div>

                            <div class="contact-form">
                                <h3>Fazer Orçamento</h3>
                                <form action="">
                                    <p>
                                        <label>Nome completo</label>
                                        <input type="text" name="name" />
                                    </p>
                                    <p>
                                        <label>E-mail</label>
                                        <input type="email" name="email" />
                                    </p>
                                    <p>
                                        <label>Número para contato</label>
                                        <input type="tel" name="phone" />
                                    </p>
                                    <p class="block">
                                        <label>Mensagem</label>
                                        <textarea name="message" rows="3"></textarea>
                                    </p>
                                    <p class="block">
                                        <button>
                                            Enviar
                                        </button>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </BudgetStyled >
    )
}

const BudgetStyled = styled.section`
.container {
    margin-left: auto;
    margin-right: auto;
    padding: 1.5em;
}

ul {
    list-style: none;
    padding: 0;
}

a {
    text-decoration: none;
}

.contact-wrapper {
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, .3);
}

.contact-wrapper > * {
    padding: 1em;
    border-radius: 20px;
}

.contact-form {
    background: #fff;
}

.contact-form form {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.contact-form form label {
    display: block;
}

.contact-form form p {
    margin: 0;
    padding: 1em;
}

.contact-form form .block {
    grid-column: 1 / 3;
}

.contact-form form button,
.contact-form form input,
.contact-form form textarea {
    width: 100%;
    border: none;
    background: none;
    outline: 0;
    color: var(--blue-primary);
    border-bottom: 1px solid var(--blue-primary);
}

.contact-form form button {
    background: var(--blue-primary);
    border: 0;
    text-transform: uppercase;
    padding: 1em;
    border-radius: 10px;
    color: #d1d1d1;
}

.contact-form form button:hover,
.contact-form form button:focus {
    background: #d1d1d1;
    color: var(--blue-primary);
    transition: background-color 1s ease-out;
    outline: 0;
}

/* CONTACT ONLINE */

.contact-info {
    background: var(--blue-primary);
}

.contact-info h4, .contact-info ul, .contact-info p {
    text-align: center;
    margin: 0 0 1rem 0;
}

h3 {
    color: var(--blue-primary);
    font-weight: bold;
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
    justify-content: center;
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

/*SOCIAL ICONS*/

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
    margin-left: 45px;
}

/* LARGE SIZE */
@media(min-width: 700px) {
    body {
        padding: 0 4em;
    }
    .contact-wrapper {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }
    .contact-wrapper > * {
        padding: 2em;
    }
    .contact-info h4,
    .contact-info ul,
    .contact-info p {
        text-align: left;
    }
}
@media(max-width: 700px) {
    .item-social-media {
        margin-left: 50px;
    }
}
`;

export default Orcamento