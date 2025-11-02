import "./card.css"

function Card({ id, imgsrc, name, handleClick }){
    return(
        <div className="card-wrap">
            <button className="card" onClick={() => handleClick(id)}>
                <img src={imgsrc} alt="card"/>
                <span>{name}</span>
            </button>
        </div>
    )
}

export default Card;