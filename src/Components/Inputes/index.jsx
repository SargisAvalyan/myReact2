import React, { useState } from "react";
import "./style.scss";

const InputValues = () => {
    const [inputValueOne, setinputValueOne] = useState("");
    const [inputValueToo, setinputValueToo] = useState("");

    return <div className="G-inputs">
        <p className="InputTitle" >"Yes Or Now"</p>
        <label >
            <input className="fontSizeInput-one" type="text" value={inputValueOne} onChange={(e) => { setinputValueOne(e.target.value) }} />
        </label>
        <label>
            <input className="fontSizeInput-one" type="text" value={inputValueToo} onChange={(e) => { setinputValueToo(e.target.value) }} />
        </label>
        {inputValueOne &&  inputValueToo && (inputValueOne === inputValueToo )&& 
            <button className="InputButton" style={{ backgroundColor: "green" }} >"Yes"</button>}
        {!(inputValueOne === inputValueToo) &&
            <button className="InputButton" style={{ backgroundColor: "red" }} >"Now"</button>}
    </div>
}
export default InputValues