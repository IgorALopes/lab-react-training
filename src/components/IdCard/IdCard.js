import style from "./IdCard.module.css"

function IdCard(props) {
    return (
        <div className={style.idCard}>
            <img src={props.picture} alt='Id Card user face'/>
            <div>
                <p><strong>First name: </strong>{props.firstName}</p>
                <p><strong>Last name: </strong>{props.lastName}</p>
                <p><strong>Gender: </strong>{props.gender}</p>
                <p><strong>Height: </strong>{props.height}</p>
                <p><strong>Birth: </strong>{props.birth.toDateString()}</p>
            </div>
        </div>
    )
}

export default IdCard;