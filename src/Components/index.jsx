import React from "react";
import "./style.scss"
class Conteiner extends React.Component {
    ///////////xndir1//////////
    state = {
        name: "", //xndir1
        namesList: [], //xndir1
        product :{ //xndir2
            nummin :"", //xndir2
            nummax : "" //xndir2
        },
        numbersList:[], //xndir2
        productlist:[],//xndir3
        prodBox:{//xndir3
            prName:"",//xndir3
            prPrice:""//xndir3
        }
    }
    handleInputtext = (e) => {
        this.setState({ name: e.target.value, setState:"" })
        
    }

    handleClick = (e) => {
        //  examples 1
        // const { namesList } = this.state
        // namesList.push(this.state.name)
        // this.setState({ namesList, name: '' })

        // example 2
        this.setState({namesList:[...this.state.namesList,this.state.name], name: ""})
       
    }

    /////////////xndir2////////////
    handleInputMin = (e) => {
        
    }
    handleInputMax = (e) => {
        this.setState({product:{...this.state.product, nummax:e.target.value}})

        
    }
    handleClickeminmax = (e)=>{
        const {product} = this.state
        let x = []
        for (+product.nummin; +product.nummin <= +product.nummax; +product.nummin++) {
            x.push(+product.nummin)
        }
        
        this.setState({numbersList:x})
    }

    handleInputName=(e)=>{
        this.setState({prodBox:{...this.state.prodBox, prName:e.target.value}})
    console.log(this.state.prodBox.prName);
    }
    handleInputPrice=(e)=>{
        this.setState({prodBox:{...this.state.prodBox, prPrice:e.target.value}})
    console.log(this.state.prodBox.prPrice);
    }
    handleClickProd=(e)=>{
       const {prodBox}=this.state
        this.setState({productlist:[...this.state.productlist, prodBox], prodBox:{
            prName:"",
            prPrice:""
        }})
    }




    ////////////
    render() {
        return (
            <div>
                <div className="G-Conteiner">
                    <label>
                        <input type="text" value={this.state.name} onChange={this.handleInputtext} />
                    </label>
                    <button onClick={this.handleClick}>CLick me</button>
                </div>
                <div>
                  {this.state.namesList.map((item, index)=>{
                 
                  return    <div key={index}>{index+1}. {item}</div>
                  }

                  )}
                  <div></div>
                </div>

                <p>-----------------------------------------------------------</p>
                  
                  <div>
                  <label>
                        <input type="text" value={this.state.product.nummin} onChange={this.handleInputMin}  />
                    </label>
                    <label>
                        <input type="text" value={this.state.product.nummax} onChange={this.handleInputMax}  />
                    </label>
                  </div>
                    <button onClick={this.handleClickeminmax}>CLick me</button>
                  <div>
                  {this.state.numbersList.map((item, index)=>{
                 
                 return    <div style={{color:item%2!==0?"red": ""}} key={index}> {item}</div>
                 }

                 )}
                  </div>
................................................................................................
                  {/* //////////////xndir3//////// */}
                  <div>
                  <label>
                        <input type="text" value={this.state.prodBox.prName} onChange={this.handleInputName}  />
                    </label>
                    <label>
                        <input type="text" value={this.state.prodBox.prPrice} onChange={this.handleInputPrice}  />
                    </label>
                  </div>
                  <button onClick={this.handleClickProd}>CLick me</button>
                  <div>
                  {this.state.productlist.map((item, index)=>{
                 
                 return <div style={{border:'1.5px solid red', width:'150px'}}>
                    <h3>{item.prName}</h3>

                    {item.prPrice<10000? <div>
<h3>Price $ {item.prPrice}</h3>
                    </div>: <div>
                        <h6>Old Price $<span className="old-price">{item.prPrice}</span></h6>
                        <h3>New Price ${item.prPrice-item.prPrice/10}</h3>
                        </div>}

                        </div>
                 }

                 )}
                  </div>

            </div>
        )
    }
    //
}

export default Conteiner