function Indicador(props){
    return <div className="card">
        <div className="card-header">
            {props.título}
        </div>
        <div className="card-body text-center">
            <h5 className="cart-title">{props.valor}</h5>
            <p className="card-text">{props.rodape}</p>
        </div>
    </div>
}

export default Indicador;