import React from "react";
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import '../styles/footer.css';
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
              <h2>Sobre</h2>
              <div className="content">
                <p>Resumo sobre os serviços prestados</p>
                <div className="social">
                  <a href="https://facebook.com/"><span className="fab fa-facebook-f"></span></a>
                  <a href="https://instagram.com/grupomaximiano/"><span className="fab fa-instagram"></span></a>
                  <a href="https://www.whatsapp.com/"><span className="fab fa-whatsapp"></span></a>
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
          <div className="copyright">
            <center>
              <span className="credit"><p style={{display:'inline'}}>Desenvolvido por</p> <a href="http://roblesidentity.herokuapp.com/">Robles Identity</a></span>
              <br /><i className="far fa-copyright text-warning"></i>
              <span> {new Date().getFullYear()} Todos os Direitos reservados</span>
            </center>
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

`;

export default Footer