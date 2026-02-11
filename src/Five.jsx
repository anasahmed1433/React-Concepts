import { useState, useEffect } from "react";


const WidthHeight = () => {

    const [screensize, setScreensize] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });

    const update = () => {
        setScreensize({
            height: window.innerHeight,
            width: window.innerWidth
        });
    };

    useEffect(() => {
        window.addEventListener("resize", update);

        // cleanup function (VERY IMPORTANT)
        return () => {
            window.removeEventListener("resize", update);
        };
    }, []);

    return (
        <div className="container-fluid">
            <div className="card">
                <h2>Screen Size Detector</h2>
                <h3>Height: {screensize.height}px</h3>
                <h3>Width: {screensize.width}px</h3>
            </div>
        </div>
    );
};

export default WidthHeight;
