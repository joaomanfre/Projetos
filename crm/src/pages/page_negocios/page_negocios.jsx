//import MENU; BUSCA
import Menu from "../../components/menu/menu.jsx";
import Busca from "../../components/busca/busca.jsx";

//function page_negocios
function Page_negocios() {
  //html
  return <>

    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
          <Menu page="negocios" />
        </div>

        <div className="col py-3 me-3">
          <div className="mb-5">
            <Busca texto="Buscar por Negócios" />
          </div>

        {/* informações */}
          <div className="bg-white p-4 rounded-4 border">
            <div className="d-flex justify-content-between mb-3">
              <div className="d-inline-flex">
                <h2>Negocios...</h2>
                <div className="form-control ms-4">
                  {/* seleção de negócios */}
                  <select name="etapa" id="etapa">
                    <option value="0">Etapa</option>
                    <option value="Prospecção">Prospecção</option>
                    <option value="Proposta">Proposta</option>
                  </select>
                </div>
              </div>

              <button className="btn btn-primary ms-4 ms-2"><i className="bi bi-plus-lg me-2"></i>Novo Negócio</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

//export do arquivo
export default Page_negocios