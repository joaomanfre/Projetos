//import REACT; AXIOS
import React, { useState, useEffect } from "react";
import axios from "axios";

//contante previsao
const Previsao = () => {
  const [previsao, setPrevisao] = useState(null);
  const apiKey = "accd7c1daf10e42023763e4f09f3f61a"; // Substitua pelo seu próprio chave da API

  //effect
  useEffect(() => {
    // Substitua a cidade e o país conforme necessário
    const cidade = "Votuporanga";
    const pais = "br";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade},${pais}&appid=${apiKey}`;

    //axios
    axios
      .get(apiUrl)
      .then((response) => {
        setPrevisao(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar previsão do tempo:", error);
      });
  }, []);

  //se senão
  if (!previsao) {
    return <div>Carregando...</div>;

  }

  //contante traduções
  const palavrasIngles = ['broken clouds', 'overcast clouds', 'scattered clouds', 'light rain', 'clear sky'];
    const palavrasTraduzidas = ['Nuvens Quebradas', 'Nuvens Nubladas', 'Nuvens Dispersas', 'Chuva Leve', 'Céu Limpo']
    let resultadoPalavra

    for (let i = 0; i < palavrasIngles.length; i++) {
        if (palavrasIngles[i] === previsao.weather[0].description) {
            resultadoPalavra = palavrasTraduzidas[i];
        }
        console.log(previsao.weather[0].description)
    }

    //html
  return (
    <div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col py-3 me-3">
            <div className="d-flex justify-content-between">
            <div>
      <h2>Previsão do Tempo</h2>
      <p>Cidade: {previsao.name}</p>
      <p>Temperatura: {Math.round (previsao.main.temp - 273.15)} °C</p>
      <p>Condição: {resultadoPalavra}</p>
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//export do arquivo
export default Previsao;