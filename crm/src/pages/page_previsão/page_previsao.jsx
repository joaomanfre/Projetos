//import MENU; BUSCA; PREVISAO
import Menu from "../../components/menu/menu.jsx";
import Busca from "../../components/busca/busca.jsx";
import Previsao from "../../components/previsão/previsao.jsx";  

//function page_previsao
function Page_previsao(){
  //html
  return <>

  <div className="container-fluid">
    <div className="row flex-nowrap">
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
      <Menu page="previsao" />
    </div>

    <div className="col py-3 me-3">
      <div className="mb-5">
        <Busca texto="Buscar por Negócios" />
      </div>

      {/* puxar previsao */}
      <div className="d-flex justify-content-between mb-3">
        <div className="">
          <Previsao />
        </div>

        <div className="row">

          </div>
        </div>
      </div>
    </div>
  </div>
  </>
}

//export do arquivo
export default Page_previsao