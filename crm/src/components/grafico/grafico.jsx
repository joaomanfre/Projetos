//import
import { Chart } from "react-google-charts";

//function do grafico
function Grafico(props) {
    const dados = [
        ["Mês", "Valor"],
        ["Janeiro", 1000],
        ["02", 1170],
        ["03", 660],
        ["04", 1030],
        ["05", 500],
        ["06", 300],
        ["07", 800],
        ["08", 1500],
        ["09", 2000],
        ["10", 3000],
        ["11", 2500],
        ["12", 1000],
    ];

    //constante options
    const options = {
        legend: props.legenda ? {} : { position: "none" }
    }

    //html
    return <div className="card">
        <div className="card-header">
            {props.titulo}
        </div>
        <div className="card-boby text-center">
            <Chart chartType={props.chartType}
                data={dados}
                width="100%"
                height="350px"
                options={options}
                legendToggle={true} />
        </div>
    </div>

}

//export do arquivo
export default Grafico;