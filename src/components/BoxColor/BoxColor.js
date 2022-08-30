import style from "./style.module.css"

function BoxColor(props) {
    const mystyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
    }
    let decColor = 0x1000000+ props.b + 0x100 * props.g + 0x10000 * props.r ;
    let hex = '#'+decColor.toString(16).substr(1);

    return <div className={style.boxColor} style={mystyle}>
        <p>rgb({props.r}, {props.g}, {props.b})</p>
        <p>{hex}</p>
    </div>
}

export default BoxColor