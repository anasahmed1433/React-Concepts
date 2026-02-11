

function One(props) {

    const { name2, age, branch } = props.name1
    return (
        <div>
            <h1 style={{ color: "white", fontSize: "60px" }}>

                {name2} </h1>
            <h4 style={{ color: "white", fontSize: "30px", lineHeight: "1.2", textAlign: "center" }}> {age}</h4>
            <h4 style={{ color: "white", fontSize: "30px", lineHeight: "1.2", textAlign: "center" }}> {branch}</h4>
        </div >
    )
}
export default One