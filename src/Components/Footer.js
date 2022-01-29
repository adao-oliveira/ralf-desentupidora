import React from "react"
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import '../styles/footer.css'
// import emailjs from "emailjs-com";

// function sendEmail(e) {
//   e.preventDefault();

//   emailjs.sendForm('default_service', 'template_ga2ba7p', e.target, 'user_VqAgkVtnF9Zj7pBBYzQLF')
//     .then((result) => {
//       alert("E-mail enviado com sucesso");
//     }, (error) => {
//       alert("Ocorreu um erro inesperado, verifique os dados e tente novamente!");
//     });
//   e.target.reset()
// }

function Footer() {
  return (
    <FooterStyled>
      <InnerLayout>
        <footer>
          <div className="main-content">
            <div className="left box">
              <h2> Sobre </h2>
              <div className="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iste facilis harum eos vel incidunt distinctio corrupti iure</p>

                <div className="social">
                  <a href="https://facebook.com/"><span className="fab fa-facebook-f"></span></a>
                  <a href="https://instagram.com/"><span className="fab fa-instagram"></span></a>
                  <a href="https://whatsapp.com/"><span className="fab fa-whatsapp"></span></a>
                </div>
              </div>
            </div>
            <div className="center box">
              <h2>Endereço</h2>
              <div className="content">
                <div className="place">
                  <span className="fas fa-map-marker"></span>
                  <span className="text">Rua teste, Campinas</span>
                </div>

                <div className="phone">
                  <span className="fas fas fa-phone"></span>
                  <span className="text">+55 19 9999-9999</span>
                </div>

                <div className="email">
                  <span className="fas fa-envelope"></span>
                  <span className="text">exemplo@exemplo.com</span>
                </div>
              </div>
            </div>
            <div className="right box">
              <h2>Faça orçamento</h2>
              <div className="content">
                {/* <form onSubmit={sendEmail}> */}
                <form>
                  <div className="name">
                    <div className="text">Nome completo *</div>
                    <input type='nome' name="from_name" id="from_name" required />
                  </div>
                  <div className="email">
                    <div className="text">Seu melhor e-mail *</div>
                    <input type="email" name="email" id="email" required />
                  </div>
                  <div className="tell">
                    <div className="text">Número para contato *</div>
                    <input type="tell" name="telefone" id="telefone" maxLength="11" onkeypress="mascara(this)" required />
                  </div>
                  <div className="msg">
                    <div className="text">Mensagem... *</div>
                    <textarea rows="2" cols="25" type='assunto' name="mensagem" id="mensagem" required></textarea>
                  </div>
                  <div className="btn">
                    <button type="submit">Enviar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="center">
              <span className="credit">Criado por <a href="http://roblesidentity.herokuapp.com/">Robles Identity</a></span> <span className="far fa-copyright"> {new Date().getFullYear()} - Todos os diteitos reservados</span>
            </div>
          </div>
        </footer>
      </InnerLayout>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
    .footer-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .card {
      margin-top 1rem;
      margin-bottom 1rem;
    }

`;

export default Footer