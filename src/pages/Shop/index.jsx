import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Slide from "../../components/sliders";
import { AiOutlineSearch } from "react-icons/ai";
import { GoArrowDown } from "react-icons/go";
import "./styles.css";
import data from "../../db/data";

function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Header />
      <Slide />
      <div className="divisor">
        <GoArrowDown className="seta" />
      </div>
      <div className="templateContainer">
        <div className="searchInputContainer">
          <div className="inputWithIcon">
            <AiOutlineSearch className="searchIcon" />
            <input
              id="searchInput"
              type="text"
              placeholder="Faça sua busca..."
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="template_Container">
          {data
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.color.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.year.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.category.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
              return null;
            })
            .map((val) => {
              return (
                <div className="template" key={val.id}>
                  <img src={val.img} alt={val.title} />
                  <h3>{val.title}</h3>
                  <p className="category">Marca: {val.category}</p>
                  <p className="color">Cor: {val.color}</p>
                  <p className="year">Ano: {val.year}</p>
                  <p className="price">Preço: {val.price}</p>
                  <button
                    className="btn-cards2"
                    onClick={() =>
                      (window.location.href =
                        "https://api.whatsapp.com/send?phone=5521970951262&text=Ol%C3%A1,%20gostaria%20de%20entrar%20em%20contato")
                    }
                  >
                    Falar com vendedor
                  </button>
                </div>
              );
            })}
        </div>
      </div>
      <div className="divisor">
        <GoArrowDown className="seta" />
      </div>
      <Footer />
    </>
  );
}

export default Shop;
