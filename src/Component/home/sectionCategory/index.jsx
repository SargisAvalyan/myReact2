import React from "react"
import img1 from "../../../img/gallery/01.jpg"
import img2 from "../../../img/gallery/02.jpg"
import img3 from "../../../img/gallery/03.jpg"
import img4 from "../../../img/gallery/pizza1.jpg"
import img5 from "../../../img/gallery/pizza2.jpg"
import img6 from "../../../img/gallery/pizza3.jpg"
import img7 from "../../../img/gallery/pizza5.jpg"
import img8 from "../../../img/gallery/pizza4.webp"
import img9 from "../../../img/gallery/salad1.jpg"
import img10 from "../../../img/gallery/salad2.jpg"
import img11 from "../../../img/gallery/salad3.jpg"
import img12 from "../../../img/gallery/salad4.jpg"

import ProdMenu from "./Components/p-menu1"
// import img4 from ""
// import img5 from ""
// import img6 from ""
// import img7 from ""
// import img8 from ""


import "./style.scss"


class Sectionbox extends React.Component {

    state = {
        products: [
            {
                "img": img1,
                "alt": "img",
                "header": "Fusce dictum finibus",
                "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                "price": " $45 / $55",
                category: 'Salad'
            },
            {
                "img": img9,
                "alt": "img",
                "header": "Fusce dictum finibus",
                "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                "price": " $45 / $55",
                category: 'Salad'
            },
            {
                "img": img10,
                "alt": "img",
                "header": "Fusce dictum finibus",
                "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                "price": " $45 / $55",
                category: 'Salad'
            }, {
                "img": img11,
                "alt": "img",
                "header": "Fusce dictum finibus",
                "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                "price": " $45 / $55",
                category: 'Salad'
            }, {
                "img": img12,
                "alt": "img",
                "header": "Fusce dictum finibus",
                "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                "price": " $45 / $55",
                category: 'Salad'
            },
            {
                "img": img1,
                "alt": "img",
                "header": "Fusce dictum finibus",
                "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                "price": " $45 / $55",
                category: 'Salad'
            },
            {
                "img": img1,
                "alt": "img",
                "header": "Fusce dictum finibus",
                "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                "price": " $45 / $55",
                category: 'Salad'
            },
            {
                "img": img2,
                "alt": "img",
                "header": "Fusce dictum finibus",
                "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                "price": " $45 / $55",
                category: 'Pizza'
            },
            {
                "img": img3,
                "alt": "img",
                "header": "Sed varius turpis",
                "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                "price": " $30.5",
                category: 'Noodle'
            },
            {
                "img": img3,
                "alt": "img",
                "header": "Sed varius turpis",
                "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                "price": " $30.5",
                category: 'Noodle'
            },
            {
                "img": img3,
                "alt": "img",
                "header": "Sed varius turpis",
                "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                "price": " $30.5",
                category: 'Noodle'
            },
            {
                "img": img3,
                "alt": "img",
                "header": "Sed varius turpis",
                "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                "price": " $30.5",
                category: 'Noodle'
            },
            {
                "img": img3,
                "alt": "img",
                "header": "Sed varius turpis",
                "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                "price": " $30.5",
                category: 'Noodle'
            },
            {
                "img": img3,
                "alt": "img",
                "header": "Sed varius turpis",
                "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                "price": " $30.5",
                category: 'Noodle'
            },
            {
                "img": img4,
                "alt": "img",
                "header": "Fusce dictum finibus",
                "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                "price": " $45 / $55",
                category: 'Pizza'
            }, 
             {
                "img": img5,
                "alt": "img",
                "header": "Fusce dictum finibus",
                "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                "price": " $45 / $55",
                category: 'Pizza'
            }, 
             {
                "img": img6,
                "alt": "img",
                "header": "Fusce dictum finibus",
                "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                "price": " $45 / $55",
                category: 'Pizza'
            },
            {
                "img": img7,
                "alt": "img",
                "header": "Fusce dictum finibus",
                "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                "price": " $45 / $55",
                category: 'Pizza'
            }, 
             {
                "img": img8,
                "alt": "img",
                "header": "Fusce dictum finibus",
                "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                "price": " $45 / $55",
                category: 'Pizza'
            }, 
             {
                "img": img6,
                "alt": "img",
                "header": "Fusce dictum finibus",
                "description": "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                "price": " $45 / $55",
                category: 'Pizza'
            },
        ],
        filteredProducts: [],
        activeTab: 'Pizza'
    }
    componentDidMount() {
        this.selectProduct(this.state.activeTab)
      }
   
    selectProduct = (productName) => {
        let newCategory = []
        
        newCategory = this.state.products.filter(x => x.category === productName)
        
        this.setState({ filteredProducts: newCategory, activeTab: productName })
    }
    render() {
        return <div className="section-box" >
            <div className="boxes">
                <ul className="Categoryes">
                    <li className={`${this.state.activeTab === 'Pizza' ? 'active' : ''}`} onClick={() => this.selectProduct('Pizza')}>Pizza</li>
                    <li className={`${this.state.activeTab === 'Salad' ? 'active' : ''}`}  onClick={() => this.selectProduct('Salad')}>Salad</li>
                    <li className={`${this.state.activeTab === 'Noodle' ? 'active' : ''}`} onClick={() => this.selectProduct('Noodle')}>Noodle</li>

                </ul>
            </div>
            <div className="Food-boxs">
              {this.state.filteredProducts.map((item, index) => (
                <ProdMenu
                  box={item}
                  key={index}
                />
              ))}
            </div>

        </div>


    }

}
export default Sectionbox
