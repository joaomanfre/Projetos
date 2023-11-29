import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "../../components/menu/menu";
import Busca from "../../components/busca/busca";
import "./noticias.css";

function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const apiKey = "4c9c733bf3e64536a9cba78dff8f538b";
  const apiUrl = `https://newsapi.org/v2/everything?q=apple&from=2023-10-24&sortBy=publishedAt&apiKey=${apiKey}`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setNoticias(response.data.articles);
      })
      .catch((error) => {
        console.error("Erro ao buscar notícias:", error);
      });
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
            <Menu page="noticias" />
          </div>

          <div className="col py-3 me-3">
            <div className="mb-5">
              <Busca texto="Busca por Negócios" />
            </div>

            <div className="d-flex justify-content-between">
              <ul className="fs-3 noticias">
                {noticias.map((noticia, index) => (
                  <li key={index}>
                    <a href={noticia.url} target="_blank" rel="noopener noreferrer">
                      {noticia.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}


export default Noticias;