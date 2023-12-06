//import REACT; LINK; LOGO
import React from "react";
import { Link, } from "react-router-dom";
import logo from"../../assets/logo.png";

//function do menu
function Menu(props){

    const linkBlue = "nav-link align-middle px-0"
    const linkBlack = "nav-link align-middle px-0 link-secondary"

        //html
        return <>
            <div className="d-flex flex-collumn align-itens-center align-itens-sm-start px-3 pt-2 text-white min-vh-100">

            {/* logo */}
            <a href="/" className="d-flex align-itens-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-nome d-sm-inline">
                    <img src={logo} className="img-logo" alt=" " />
                </span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-itens-sm-start" id="menu">

            {/* dashboard */}
                    <li className="nav-item">
                        <Link to="/dashboard" className={props.page === "dashboard" ? linkBlue : linkBlack}>
                            <i className="fs-4 bi bi-bar-chart"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                        </Link>
                    </li>
            {/* nagocios */}
                    <li className="nav-item">
                        <Link to="/negocios" className={props.page === "negocios" ? linkBlue : linkBlack}>
                            <i className="=fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Negócios</span>
                        </Link>
                    </li>
            {/* noticias */}
                    <li className="nav-item">
                        <Link to="/noticias" className={props.page === "noticias" ? linkBlue : linkBlack}>
                            <i className="=fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Notícias</span>
                        </Link>
                    </li>
            {/* previsao */}
                    <li className="nav-item">
                        <Link to="/previsao" className={props.page === "previsao" ? linkBlue : linkBlack}>
                            <i className="=fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Previsão</span>
                        </Link>
                    </li>
            {/* atividades */}
                    <li className="nav-item">
                        <Link to="/atividades" className={props.page === "atividades" ? linkBlue : linkBlack}>
                            <i className="=fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Atividades </span>
                        </Link>
                    </li>
            {/* tarefas */}
                    <li className="nav-item">
                        <Link to="/tarefas" className={props.page === "tarefas" ? linkBlue : linkBlack}>
                            <i className="=fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Tarefas <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg></span>
                        </Link>
                    </li>

                </ul>
            </div>
        </>
}

//export do arquivo
export default Menu;