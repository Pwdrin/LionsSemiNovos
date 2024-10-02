import Header from "../../components/header";
import Slide from "../../components/sliders";
import Footer from "../../components/footer";
import { GoArrowDown } from "react-icons/go";
import "./styles.css";

function Home() {
  return (
    <>
      <Header />
      <Slide />
      <div className="divisor">
        <GoArrowDown className="seta" />
      </div>
      <section className="topic">
        <h1 className="title2">Ofertas em destaque</h1>
        <h2 className="subtitle2">
          Confira oportunidades preparadas para você!
        </h2>
      </section>
      <section className="cardscar">
        <ul>
          <li>
            <div>
              <img
                alt="carro"
                src="https://www.lionsseminovos.com.br/assets/uploads/nt_seminovos_imagens/97293-IMG_8431_10_11zon.jpg?v=3"
              />
              <p>2020 FIAT STRADA 1.4 HARD WORKING CE</p>
              <button
                className="btn-cards"
                onClick={() =>
                  (window.location.href =
                    "https://api.whatsapp.com/send?phone=5521970951262&text=Ol%C3%A1,%20gostaria%20de%20entrar%20em%20contato")
                }
              >
                Saiba mais!
              </button>
            </div>
          </li>
          <li>
            <div>
              <img
                alt="carro"
                src="https://www.lionsseminovos.com.br/assets/uploads/nt_seminovos_imagens/26372-IMG_2452_16_11zon.jpg?v=3"
              />
              <p>2022 NISSAN KICKS 1.6 SENSE CVT</p>
              <button
                className="btn-cards"
                onClick={() =>
                  (window.location.href =
                    "https://api.whatsapp.com/send?phone=5521970951262&text=Ol%C3%A1,%20gostaria%20de%20entrar%20em%20contato")
                }
              >
                Saiba mais!
              </button>
            </div>
          </li>
          <li>
            {" "}
            <div>
              <img
                alt="carro"
                src="https://www.lionsseminovos.com.br/assets/uploads/nt_seminovos_imagens/28269-IMG_3208.JPG?v=3"
              />
              <p>2023 RENAULT KWID INTENSE 1.0</p>
              <button
                className="btn-cards"
                onClick={() =>
                  (window.location.href =
                    "https://api.whatsapp.com/send?phone=5521970951262&text=Ol%C3%A1,%20gostaria%20de%20entrar%20em%20contato")
                }
              >
                Saiba mais!
              </button>
            </div>
          </li>
          <li>
            {" "}
            <div>
              <img
                alt="carro"
                src="https://www.lionsseminovos.com.br/assets/uploads/nt_seminovos_imagens/02314-IMG_4907_35_11zon.jpg?v=3"
              />
              <p>2021 FIAT GRAND SIENA ATTRACTIVE 1.0</p>
              <button
                className="btn-cards"
                onClick={() =>
                  (window.location.href =
                    "https://api.whatsapp.com/send?phone=5521970951262&text=Ol%C3%A1,%20gostaria%20de%20entrar%20em%20contato")
                }
              >
                Saiba mais!
              </button>
            </div>
          </li>
        </ul>
        <button
          className="btn-extra"
          onClick={() => (window.location.href = "/Shop")}
        >
          OLHAR ESTOQUE
        </button>
      </section>

      {/* DIV IMG */}

      <div className="divisor">
        <GoArrowDown className="seta" />
      </div>
      <section className="banner">
        <img src="https://www.lionsseminovos.com.br/assets/uploads/nt_home_banner/31553-site-aaa.png?v=3" />
      </section>
      <div className="divisor">
        <GoArrowDown className="seta" />
      </div>

      {/* CARDS INFOS */}

      <section className="topic">
        <h1 className="title">CONHEÇA NOSSAS VANTAGENS</h1>
        <h2 className="subtitle">
          Negocie com a Lions e tenha benefícios exclusivos
        </h2>
      </section>
      <section className="cards">
        <ul>
          <li>
            <div>
              <img
                alt="FIQUE DESPREOCUPADO"
                src="https://www.lionsseminovos.com.br/assets/uploads/nt_vantagens_itens/00645-45854-icon-2.png?v=3"
              />
              <h1>FIQUE DESPREOCUPADO</h1>
              <p>
                Possuímos um ótimo sistema de atendimento pós-venda com uma
                equipe especializada e oficinas credenciadas para deixar nossos
                clientes satisfeitos.
              </p>
            </div>
          </li>
          <li>
            <div>
              <img
                alt="NÃO PERCA NA TROCA"
                src="https://www.lionsseminovos.com.br/assets/uploads/nt_vantagens_itens/02042-34188-icon-3.png?v=3"
              />
              <h1>NÃO PERCA NA TROCA</h1>
              <p>
                Somos especialistas em carros e, por isso, sabemos como avaliar
                o seu usado. Na Lions você pode receber até 90% do valor da
                tabela FIPE no momento da troca.
              </p>
            </div>
          </li>
          <li>
            <div>
              <img
                alt="NADA DE JUROS ALTOS"
                src="https://www.lionsseminovos.com.br/assets/uploads/nt_vantagens_itens/22155-icon-4.png?v=3"
              />
              <h1>NADA DE JUROS ALTOS</h1>
              <p>
                Somos o líder nacional em financiamentos. Por consequência,
                grandes bancos fornecem para nossos clientes taxas de juros
                baixas e fácil aprovação de crédito.
              </p>
            </div>
          </li>
          <li>
            <div>
              <img
                alt="ÓTIMOS PREÇOS"
                src="https://www.lionsseminovos.com.br/assets/uploads/nt_vantagens_itens/47622-icon-04.png?v=3"
              />
              <h1>ÓTIMOS PREÇOS</h1>
              <p>
                Compramos carros em grandes lotes e com grandes descontos. Desta
                forma, conseguimos te repassar bons descontos.
              </p>
            </div>
          </li>
        </ul>
      </section>
      <div className="divisor">
        <GoArrowDown className="seta" />
      </div>
      <Footer />
    </>
  );
}

export default Home;
