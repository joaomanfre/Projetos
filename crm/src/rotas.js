//import ROTAS; DASHBOARD; PREVISAO; NOTICIAS, NEGOCIOS, ATIVIDADES
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/page_dashboard/page_dashboard";
import Previsao from "./pages/page_previsão/page_previsao";
import Noticias from "./pages/page_noticias/page_noticias";
import Negocios from "./pages/page_negocios/page_negocios";
import Atividades from "./pages/page_atividades/page_atividades";
import Tarefas from "./pages/page_tarefas/page_tarefas";

//function ROTAS
function Rotas() {
    //html
    return <BrowserRouter>
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/previsao" element={<Previsao />} />
            <Route path="/negocios" element={<Negocios />} />
            <Route path="/atividades" element={<Atividades />} />
            <Route path="/tarefas" element={<Tarefas />} />

        </Routes>
    </BrowserRouter>
}

//export do arquivo
export default Rotas;