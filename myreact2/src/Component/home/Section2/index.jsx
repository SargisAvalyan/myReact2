import React from "react"
import { NavLink, Redirect, Route, Switch } from "react-router-dom"
import Menu1 from "./Components/p-menu1"
import Salad from "./Components/p-menu2"
import Noodle from "./Components/p-menu3"

import "./style.scss"


class Section2 extends React.Component {
    render() {
        return <div className="section2-box" >
            <>
            <NavLink activeClassName='b-active' to={'/pizza'}><button>Pizza</button> </NavLink>
            <NavLink activeClassName='b-active' to={'/salad'}><button>Salad</button></NavLink>
            <NavLink activeClassName='b-active' to={'/noodle'}><button>Noodle</button></NavLink>
            </>
        <Switch>
                <Route path={"/pizza"} component={<Menu1 />} />
                <Route path={"/salad"} component={<Salad />} />
                <Route path={"/noodle"} component={<Noodle />} />
                <Redirect to={'/home'} />
            </Switch>

</div>


    }

}
export default Section2
