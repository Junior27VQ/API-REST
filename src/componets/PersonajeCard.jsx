import './PersonajeCard.css';

function PersonajeCard({ props }) {
    return (
        <div className="personaje-card">
            <img src={props.image} alt={props.name} />
            <div className="card-content">
                {/* Nombre e ID alineados */}
                <div className="header-card">
                    <h3>{props.name}</h3>
                    <span className="badge-id">ID: {props.id}</span>
                </div>

                {/* Detalles en cajas redondeadas */}
                <div className="info-box">
                    <p><span className="label">Estado:</span> {props.status}</p>
                </div>
                <div className="info-box">
                    <p><span className="label">Género:</span> {props.gender}</p>
                </div>
                <div className="info-box">
                    <p><span className="label">Origen:</span> {props.origin.name}</p>
                </div>
            </div>
        </div>
    )
}
export default PersonajeCard;