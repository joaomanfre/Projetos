//import
import "./busca.css";

//function do busca
function Busca(props){
    //html
    return <div className="input-group">
        <input type="text" className="form-control busca" placeholder={props.texto}/>
        <button className="btn btn-primary" type="button" id="button-addon2">Buscar</button>
    </div>
}

//export do arquivo
export default Busca; 