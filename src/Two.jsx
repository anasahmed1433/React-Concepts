

function Two(props) {
    const { name3, age, email } = props.name4
    return (
        <div>
            <h1 style={{ color: "white", fontSize: "60px", lineHeight: "1.2", textAlign: "center" }}>

                {name3}</h1>
            <h4 style={{ color: "white", fontSize: "30px", lineHeight: "1.2", textAlign: "center" }}> {age}</h4>
            <h4 style={{ color: "white", fontSize: "30px", lineHeight: "1.2", textAlign: "center" }}> {email}</h4>
        </div >
    )
}
export default Two
