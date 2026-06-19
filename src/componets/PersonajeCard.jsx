function PersonajeCard({ props }) {
    return (
        <div>
            <img src={props.image} alt={props.name} />
            <div>
                    <h1>{props.name}</h1>
                    <p>ID: {props.id}</p>
                    <p>Estado: {props.status}</p>
                    <p>Género: {props.gender}</p>
                    <p>Origen: {props.origin.name}</p>
            </div>
        </div>
    )
}
export default PersonajeCard;