import React from "react"
import "./style.scss"


class ProdMenu extends React.Component {
    render() {
        return  <div className="p-menu" >
    <img className="ProdImg" src={this.props.box.img} alt={this.props.box.alt}/>
      <h2>{this.props.box.header}</h2>
      <p>{this.props.box.description}</p>
      <p className='price'>{this.props.box.price}</p>
    </div>   
    }

}
export default ProdMenu
