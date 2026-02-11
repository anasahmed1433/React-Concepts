import { useEffect, useState } from 'react';
import One from './One.jsx';
import Two from './Two.jsx';

const Three = () => {
    const [data, setData] = useState("true");

    // useEffect(() => {
    //     if (data === "Bangalore") {
    //         setData("Hyderabad");
    //     } else {
    //         setData("Chennai");
    //     }
    // }, []);

    return (
        <div>
            <h1> {data ? <One name1="person1" /> : <Two name4="employee" />}</h1>
        </div >
    );
};

export default Three;
