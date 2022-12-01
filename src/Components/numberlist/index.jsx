import React, { useState } from "react"
import "./style.scss"

const NumberList = () => {
    const [value, setValue] = useState("");
    const [numberList, setnumberList] = useState([]);
    const handleClick = () => {
        for (let i = 0; i < value; i++) {
            numberList.push(i)
            setnumberList([...numberList])
        }
        setValue("")




    }

    return <div className="G-numberList">
        <label>
            <input className="numberList" type="number" value={value} onChange={(e) => { setValue(e.target.value) }} />
        </label>
        <button className="sort-number" onClick={handleClick}>NumberList</button>
        <div>
            {numberList.map((item, index) => {
                return (item % 2 === 0) ? <p key={index} style={{ backgroundColor: "green", color: "white" }}>{item + 1}</p> :
                    <p key={index} style={{ backgroundColor: "red" }}>{item + 1}</p>
            })}

        </div>
    </div>
}
export default NumberList