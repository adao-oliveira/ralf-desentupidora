import React from 'react'
import { Link } from 'react-router-dom';

function Orcamento() {
    return (
        <div class="container">
            <div class="content first-content">
                <div class="first-column">
                    <h2 class="title title-primary">Atendimento online?</h2>
                    <p class="description description-primary">Entre em contato através do nosso Whatsapp</p>
                    <button id="signin" class="btn btn-primary">
                        <a href='https://api.whatsapp.com/send?phone=5519997514121&text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20com%20um%20caso%20de%20entupimento!'>
                            Entrar em contato
                        </a>
                    </button>
                    <p class="description description-primary mt-4">Visite nossas redes sociais</p>
                    <div class="social-media">
                        <ul class="list-social-media">
                            <a class="link-social-media" href="https://facebook.com/">
                                <li class="item-social-media">
                                    <i class="fab fa-facebook-f"></i>
                                </li>
                            </a>
                            <a class="link-social-media" href="https://facebook.com/">
                                <li class="item-social-media">
                                    <i class="fab fa-instagram"></i>
                                </li>
                            </a>
                            <a class="link-social-media" href="https://facebook.com/">
                                <li class="item-social-media">
                                    <i class="fab fa-whatsapp"></i>
                                </li>
                            </a>
                        </ul>
                    </div>
                    {/* <!-- social media --> */}
                </div>
                <div class="second-column">
                    <h2 class="title title-second">Fazer orçamento</h2>
                    <p class="description description-second">Preencha o formulário abaixo e informe no campo MENSAGEM <br /> o tipo de seviço que precisa e entraremos em contato em breve </p>
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
    )
}

export default Orcamento