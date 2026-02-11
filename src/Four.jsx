import { useState } from "react";
import {onChange} from "react";

const Four = () => {
    const [num, setNum] = useState(0);

    const [name,setName] = useState("");

    const [age,setAge] = useState("");

    const [name1, setSubmit] = useState();
    const [age1, setAge1] = useState();

    const getupdatedname = () => {
        setSubmit(name);
        setAge1(age);
    }

    const getage=(event)=>{
        if(event.target.value.length>3){
            alert("Age cannot be greater than 3 digits");
            return;
        }
        setAge(event.target.value);
    }

    const getname = (event) => {
        if (event.target.value.length > 10) {
            alert("Name cannot be greater than 10 digits");
            return;
        }
        setName(event.target.value);
    }


    const increment = () => {
        setNum(num + 1);
    }

    const decrement = () => {
        if (num > 0)
            setNum(num - 1);
    }

    const reset = () => {
        setNum(0);
    }
    


    return (
        <div>
            <h3 style={{ color: "White", fontSize: "24px", margin: "10px", textAlign: "center" }}>{num}</h3>
            <button onClick={increment} style={{ backgroundColor: "green", color: "white", padding: "10px", margin: "5px" }}>+</button>
            <button onClick={decrement} style={{ backgroundColor: "red", color: "white", padding: "10px", margin: "5px" }}>-</button>
            <button onClick={reset} style={{ backgroundColor: "blue", color: "white", padding: "10px", margin: "5px" }}>Reset</button>
            <div style={{ marginTop: "20px" }}>
                <input type="text" placeholder="Enter your name" value={name} onChange={getname} />

                <input type="number" placeholder="Enter your age" value={age} onChange={getage} />

                <h3 style={{ color: "white", fontSize: "24px", margin: "10px", textAlign: "center" }}>My name is {name1} and my age is {age1}</h3>
                <button onClick={getupdatedname}>Submit</button>

            </div>
        </div >
    )
}

export default Four;