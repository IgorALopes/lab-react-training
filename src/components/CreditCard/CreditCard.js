import style from "./style.module.css"

function CreditCard(props) {
    if (props.type === "Visa") {
        const visaImg = "../../assets/images/visa.png"
    }
    if (props.type === "Master Card") {
        const masterImg = "../../assets/images/master-card.svg"    
    }

    return <div className={style.boxColor}>

    </div>
}

export default CreditCard