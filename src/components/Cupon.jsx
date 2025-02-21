export function Cupon({ cupon }) {
    const { 
        titulo, 
        precioRegular, 
        precioOferta, 
        fechaInicio, 
        fechaFin, 
        fechaLimiteUso, 
        descripcion, 
        imagen 
    } = cupon;

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`/img/${imagen}.jpg`} alt={`Imagen de ${titulo}`} />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{titulo}</h3>
                <p className="fw-bold">Precio Regular: <span className="text-decoration-line-through">${precioRegular}</span></p>
                <p className="fw-black text-primary fs-3">Oferta: ${precioOferta}</p>
                <p><strong>Fecha de Inicio:</strong> {fechaInicio}</p>
                <p><strong>Fecha de Fin:</strong> {fechaFin}</p>
                <p><strong>Fecha Límite de Uso:</strong> {fechaLimiteUso}</p>
                <p>{descripcion}</p>
            </div>
        </div>
    );
}
