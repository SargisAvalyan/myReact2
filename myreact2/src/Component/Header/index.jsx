import React from "react"
import Image1 from "../../img/img1.jpg"
import Home from "../home";
import About from "../about-us";
import Contact from "../contact-us";
import "./style.scss"
import { NavLink, Redirect, Route, Switch } from "react-router-dom"

class Header extends React.Component {
    render() {
        return <header>
            <div className="header-box" style={{ backgroundImage: `url('${Image1}')` }}>
                <ul className="menu">
                    <NavLink activeClassName='P-active-header' to={'/home'}>Home</NavLink>
                    <NavLink activeClassName='P-active-header' to={'/about-us'}>About</NavLink>
                    <NavLink activeClassName='P-active-header' to={'/conotact'}>Contact</NavLink>
                </ul>

            </div>
            <Switch>
                <Route path={"/home"} component={Home} />
                <Route path={"/about-us"} component={About} />
                <Route path={"/conotact"} component={Contact} />
                <Redirect to={'/home'} />
            </Switch>


        </header>
    }

}
export default Header
