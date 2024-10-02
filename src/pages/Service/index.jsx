import Footer from "../../components/footer";
import Header from "../../components/header";
import { GoArrowDown } from "react-icons/go";
import "./styles.css";

function Service() {
  return (
    <>
      <Header />
      <div className="banner">
        <img src="https://cdn.discordapp.com/attachments/843212023106109500/1290836418796458065/31553-site-aaa_copiar.png?ex=66fde898&is=66fc9718&hm=24cfbc2cd075aaaf35f9c582416c560f1cfa83814d866d9a5f4c3abdd10e3b58&" />
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
                src="https://cdn.discordapp.com/attachments/843212023106109500/1290774607284015187/icons8-dinheiro-100.png?ex=66fdaf07&is=66fc5d87&hm=e8fd62c0020acb082299cc92e660273886328d91fb5bf6ad2e17b41030460d6d&"
              />
              <h1>FIQUE DESPREOCUPADO</h1>
            </div>
          </li>
          <li>
            <div>
              <img
                alt="GANHE UMA RENDA EXTRA"
                src="https://cdn.discordapp.com/attachments/843212023106109500/1290774607661371404/icons8-banho-de-sol-100.png?ex=66fdaf07&is=66fc5d87&hm=9013cc9acb4b54249005ca714972e7e19c59154b34f8b2cee6746ef38ef5f2ab&"
              />
              <h1>TRABALHE DE ONDE QUISER</h1>
            </div>
          </li>
          <li>
            <div>
              <img
                alt="LUCRO ALTO"
                src="https://cdn.discordapp.com/attachments/843212023106109500/1290774607871217694/icons8-lucro-100.png?ex=66fdaf07&is=66fc5d87&hm=319a9330c4556cf8e12285563256a2eaf6ba9febd189cfdd1bd4511b37e302fa&"
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
        <img src="https://cdn.discordapp.com/attachments/843212023106109500/1290785369364762674/31553-site-aaa_copiarr.png?ex=66fdb90d&is=66fc678d&hm=a9bdb4788d4b9e6b2faf34f86a1fcad68f21f5b1382f68529b058d43801ffabb&" />
      </div>

      <div className="divisor">
        <GoArrowDown className="seta" />
      </div>
      <h1 className="title">
        Oportunidade única para quem deseja mudar de vida
      </h1>
      <section>
        <div className="banner">
          <img src="https://cdn.discordapp.com/attachments/843212023106109500/1290767582328258641/31553-site-aaa_copiar.png?ex=66fda87c&is=66fc56fc&hm=1995889f771d5b87e2c1fcb7cf53a07c60f94d1346f6c3e54620cbb369ade952&" />
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
