import React from "react"
import { NavLink } from "react-router-dom"
import "./style.scss"


class Section2 extends React.Component {
    render() {
        return  <div className="section2-box" >
                
                
                
                <NavLink activeClassName='b-active' to={'/home'}><button>Pizza</button> </NavLink>
                <NavLink activeClassName='b-active' to={'/about-us'}><button>Salad</button></NavLink>
                <NavLink activeClassName='b-active' to={'/conotact'}><button>Noodle</button></NavLink>
            </div>

        
    }

}
export default Section2
