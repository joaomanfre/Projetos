import Busca from "../../components/busca/busca";
import Menu from "../../components/menu/menu";
import Tarefas from "../../components/tarefas/tarefas";

function Page_Tarefas() {
    return <>
    <div className="container-fluid">
        <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                <Menu page="tarefas" />
            </div>

            <div className="col py-3 me-3">
                <div className="mb-5">
                    <Busca texto="Buscar por Negócios" />
                </div>
        <div className="row">
            <Tarefas />
          </div>
        </div>
      </div>
    </div>
</>
}

export default Page_Tarefas