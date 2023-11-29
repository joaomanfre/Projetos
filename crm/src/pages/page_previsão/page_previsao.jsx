import Menu from "../../components/menu/menu.jsx";
import Busca from "../../components/busca/busca.jsx";
import Previsao from "../../components/previsão/previsao.jsx";


function Page_previsao(){
  return <>

  <div className="container-fluid">
    <div className="row flex-nowrap">
      <Menu page="previsao" />
    </div>

    <div className="col py-3 me-3">
      <div className="mb-5">
        <Busca texto="Buscar por Negócios" />
      </div>

      <div className="d-flex justify-content-between mb-3">
        <div className="">
          <Previsao />
        </div>

        <div className="row">

        </div>
      </div>
    </div>
  </div>
  </>
}

export default Page_previsao