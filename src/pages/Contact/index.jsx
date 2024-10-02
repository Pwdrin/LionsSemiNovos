import Footer from "../../components/footer";
import Header from "../../components/header";
import { BsChatText } from "react-icons/bs";
import { FaUser, FaEnvelopeOpenText, FaPencilAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import "./styles.css";

function Contact() {
  return (
    <>
      <Header />
      <section>
        <div class="box-formulario">
          <div class="formulario">
            <div class="title-form">
              <h1>
                <BsChatText class="icon icon-comments-o" /> Fale Conosco Agora
              </h1>
            </div>
            <form action="#" method="post">
              <span>
                <input
                  type="text"
                  class="input-slide"
                  id="nome"
                  name="nome"
                  placeholder="Nome"
                  autocomplete="off"
                  required=""
                />
                <label for="nome">
                  <FaUser />
                </label>
              </span>
              <span>
                <input
                  type="text"
                  class="input-slide"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  autocomplete="off"
                  required=""
                />
                <label for="email">
                  <MdEmail class="icon icon-mail-3" />
                </label>
              </span>
              <span>
                <input
                  type="text"
                  class="input-slide"
                  id="assunto"
                  name="assunto"
                  placeholder="Assunto"
                  autocomplete="off"
                  required=""
                />
                <label for="assunto">
                  <FaEnvelopeOpenText class="icon icon-help" />
                </label>
              </span>
              <span>
                <textarea
                  type="text"
                  class="textarea-slide"
                  id="mensagem"
                  name="mensagem"
                  rows="3"
                  placeholder="Mensagem"
                  autocomplete="off"
                  required=""
                ></textarea>
                <label for="mensagem">
                  <FaPencilAlt class="icon icon-commenting-o" />
                </label>
              </span>
              <div class="box-btn">
                <button type="submit" class="btn-envia zoom-shadow">
                  <IoSend class="icon icon-export" /> Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
