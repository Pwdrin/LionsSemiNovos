import Footer from "../../components/footer";
import Header from "../../components/header";
import { GoArrowDown } from "react-icons/go";
import "./styles.css";

function Service() {
  return (
    <>
      <Header />
      <div className="banner">
        <img src="https://i.ibb.co/djj5rXM/31553-site-aaa-copiar.png" />
      </div>
      <div className="divisor">
        <GoArrowDown className="seta" />
      </div>
      <section className="cards2">
        <ul>
          <li>
            <div>
              <img
                alt="GANHE UMA RENDA EXTRA"
                src="https://i.ibb.co/GWqZX2t/icons8-dinheiro-100.png"
              />
              <h1>FIQUE DESPREOCUPADO</h1>
            </div>
          </li>
          <li>
            <div>
              <img
                alt="GANHE UMA RENDA EXTRA"
                src="https://i.ibb.co/52wyQ5c/icons8-banho-de-sol-100.png"
              />
              <h1>TRABALHE DE ONDE QUISER</h1>
            </div>
          </li>
          <li>
            <div>
              <img
                alt="LUCRO ALTO"
                src="https://i.ibb.co/gRzQcQy/icons8-lucro-100.png"
              />
              <h1>LUCRO ALTO</h1>
            </div>
          </li>
        </ul>
      </section>
      <div className="divisor">
        <GoArrowDown className="seta" />
      </div>
      <h1 className="title2">
        Nossos parceiros possuem todo suporte necessário para alcançar o sucesso
        nas vendas.
      </h1>
      <h2 className="subtitle2">
        contamos com uma equipe totalmente especializada em vendas que
        acompanhará cada etapa para a sua realização de sua venda.
      </h2>
      <div className="banner">
        <img src="https://i.ibb.co/ZV7xkdm/31553-site-aaa-copiarr.png" />
      </div>

      <div className="divisor">
        <GoArrowDown className="seta" />
      </div>
      <h1 className="title">
        Oportunidade única para quem deseja mudar de vida
      </h1>
      <section>
        <div className="banner">
          <img src="https://i.ibb.co/bsxMCZY/31553-site-aaa-copiarrr.png" />
        </div>
        <div className="container-extrabtn">
          <button className="extra-btn">Saiba mais</button>
        </div>
        <div className="divisor">
          <GoArrowDown className="seta" />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Service;
