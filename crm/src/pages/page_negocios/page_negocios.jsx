import Menu from "../../components/menu/menu.jsx";
import Busca from "../../components/busca/busca.jsx";
import Negocios from "../../components/negocios/negocios.jsx";


function Page_negocios(){
  return <>

  <div className="container-fluid">
    <div className="row flex-nowrap">
      <Menu page="negocios" />
    </div>

    <div className="col py-3 me-3">
      <div className="mb-5">
        <Busca texto="Buscar por Negócios" />
      </div>

      <div className="d-flex justify-content-between mb-3">
        <div className="">
          <Negocios />
        </div>

        <div className="row">

        </div>
      </div>
    </div>
  </div>
  </>
}

export default Page_negocios