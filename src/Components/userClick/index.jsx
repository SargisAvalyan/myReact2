import React, { useState } from "react";
import "./style.scss";

const Compo = () => {

    const [ShowName, setShowName] = useState(false);
   const showuserName = (e) => {
            setShowName(current=>!current)
    }

    return <div className="G-compo">

        <button className="user-button" onClick={showuserName}>Click Me</button>
        {ShowName &&
            <h3 className="userName">Sargis Avalyan</h3>}       
    </div>
}
export default Compo