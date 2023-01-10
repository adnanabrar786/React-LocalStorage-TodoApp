// local storage practice

import React, { useState, useEffect } from 'react';

const Practice = () => {

    const [value, setValue] = useState("");
    const [show, setShow] = useState("");

    const handleClick = () => {
        localStorage.setItem("localTask", JSON.stringify(value));
        let storedList = JSON.parse(localStorage.getItem("localTask"));
        setShow(storedList)
    };

    return (
        <div>
            {/* <h3>{show ? (
                <div>
                    {`your value is ${show}`}
                </div>
            ) : (
                <div>
                    Enter This Value
                </div>
            )}</h3> */}

            <h3>{show}</h3>
            <input
                type="text"
                name='value'
                value={value}
                placeholder='Write Your Task...'
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={handleClick} >Submit</button>
        </div>
    )
}

export default Practice
