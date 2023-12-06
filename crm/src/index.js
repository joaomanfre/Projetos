//import REACT; REACT DOM; STYLE; ROTAS
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/global.css";  
import Rotas from './rotas.js';

//Constante ROOT
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <Rotas />
  </>
);
