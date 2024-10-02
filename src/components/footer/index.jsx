import * as C from "./styles";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa6";
function Footer() {
  return (
    <>
      <C.Section>
        <C.Footer>
          <div className="footer-content">
            <img src="https://www.lionsseminovos.com.br/assets/uploads/nt_conteudo_geral/62620-69141-2.png?v=3" />
            <p>Negocie com a Lions e tenha benefícios exclusivos</p>
            <div class="icons">
              <a href="https://www.instagram.com/lionsseminovos">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/lionsseminovos">
                <FaFacebook />
              </a>
              <a href="https://api.whatsapp.com/send?phone=5521970951262&text=Ol%C3%A1,%20gostaria%20de%20entrar%20em%20contato">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <div className="footer-content">
            <h4>Páginas</h4>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Shop">Estoque</a>
            </li>
            <li>
              <a href="/Service">Serviço</a>
            </li>
            <li>
              <a href="/Contact">Contato</a>
            </li>
          </div>
          <div className="footer-content2">
            <h4>Endereços</h4>
            <li>
              <a>Campo Grande - Estr. Rio do A, 2211</a>
            </li>
            <li>
              <a>Nova Inguaçu - Av. Carlos Marques Rollo, 137</a>
            </li>
            <li>
              <a>Duque de Caxias - Rod. Washington Luiz, 1375</a>
            </li>
            <li>
              <a>Madureira - Estrada Intendente Magalhães, 290</a>
            </li>
            <li>
              <a>Niterói - RJ-104, 2620 Baldeador</a>
            </li>
            <li>
              <a>Barra Mansa - R. Antônio Luiz Pires, S / N</a>
            </li>
            <li>
              <a>Vila Prudente - Av. Prof. Luiz Ignácio Anhai Mello, 4272</a>
            </li>
            <li>
              <a>Osasco - Av. Pref. Hirant Sanazar, 03</a>
            </li>
            <li>
              <a>Orlando/ EUA - 4201 W Colonial Dr</a>
            </li>
          </div>
          <div className="footer-content3">
            <h4>Contato</h4>
            <li>
              <a>TEL: 0800-454-0505</a>
            </li>
          </div>
        </C.Footer>
      </C.Section>
    </>
  );
}

export default Footer;
