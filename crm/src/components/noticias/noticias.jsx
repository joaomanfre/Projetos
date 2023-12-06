//import REACT; AXIOS; NOTICIAS CSS
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./noticias.css";

//function do noticias
function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const apiKey = "4c9c733bf3e64536a9cba78dff8f538b";
  const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2023-11-01&sortBy=publishedAt&apiKey=${apiKey}`;

  //axios effect
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

  //html
  return (
    <div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col py-3 me-3">
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

//export do arquivo
export default Noticias;