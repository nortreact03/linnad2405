function Linn(props) {
    console.log(props)
    let cityStyle = "";
    if (props.riik === "Prantsusmaa") {
        cityStyle = "french-city"
    }

    let remarks = ""
    if (props.riik === "Inglismaa") {
       remarks = (<p>{props.markused}</p>)
    }

    return (
        <div>
            <h2 className={cityStyle}> {props.nimi}</h2>
            <h3>{props.riik}</h3>
            {remarks}

        </div>
    )
}

export default Linn