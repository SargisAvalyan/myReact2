import React from "react";
class Conteiner extends React.Component {
    ///////////xndir1//////////
    state = {
        name: "",
        namesList: [],
        product :{
            nummin :"", 
            nummax : ""
        },
        numbersList:[]
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
        this.setState({product:{...this.state.product, nummin:e.target.value}})
        
    }
    handleInputMax = (e) => {
        this.setState({product:{...this.state.product, nummax:e.target.value}})

        
    }
    handleClickeminmax = (e)=>{
        const {product} = this.state
        let x = []
        for (+product.nummin; +product.nummin <= +product.nummax; +product.nummin++) {
            console.log(product.nummin)
            x.push(+product.nummin)
        }
        console.log(x)
        this.setState({numbersList:x})
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
            </div>
        )
    }
    //
}

export default Conteiner