import React, { useState } from "react";
import "./style.scss";

const FontSIzeChanger = () => {
   const [fontSize, setFontSize]= useState(15);
   const [inputInfo, setinputInfo]= useState("");
   
    return <div className="G-compoSize">
        <button className="fontSizeChange" onClick={()=>setFontSize(fontSize+2)}>FontSize +</button>
        <button className="fontSizeChange" onClick={()=>setFontSize(fontSize-2)}>FontSize -</button>
        <label>
            <input className="fontSizeInput" type="text" value={inputInfo} onChange={(e)=>setinputInfo(e.target.value)}/>
        </label>
        {
            inputInfo&&
        <h3 className="InputInfo" style={{fontSize:`${fontSize}px`}}>{inputInfo}</h3>

        }
    </div>
}
export default FontSIzeChanger