import React from "react"
import "./style.scss"
import img1 from "../../Components/fruits/img1.jpg"
import img2 from "../../Components/fruits/img2.jpg"
import img3 from "../../Components/fruits/img3.jpg"
import img4 from "../../Components/fruits/img4.jpg"
class Inputes extends React.Component {
    state = {
        name: "",
        nameList: [],
        number: "",
        numberList: [],
        imageBox: [img1, img2, img3, img4],
        Staff: ["Aram", "Ani", "Karine", "Gohar", "Vardan", "Narek", "Siranush", "Sofi"]
    }
    handleInputtext = (e) => {
        this.setState({ name: e.target.value, setState: "" })

    }
    handleClick = (e) => {
        this.setState({ nameList: [...this.state.nameList, this.state.name], name: "" })
    }
    handleInputNumber = (e) => {
        this.setState({ number: e.target.value, setState: "" })
    }
    handleClickNumber = (e) => {
        this.setState({ numberList: [...this.state.numberList, this.state.number], number: "" })
    }
    handleChangePosition = (e) => {
        this.setState({imageBox:[ Math.randome([...this.state.imageBox])]})
    }



    render() {
        return <div>
            <div className="G-Conteiner">
                <label>
                    <input type="text" value={this.state.name} onChange={this.handleInputtext} />
                </label>
                <button onClick={this.handleClick}>CLick me</button>
                <div>
                    <div className="Groups">
                        <div className="Groups-box">
                            <h3 > Group1</h3>

                            <ol>
                                {this.state.nameList.map((item, index) => {
                                    return (index % 2 === 0) ? <li key={index} item={this.state}>{item}</li> : null
                                })}
                            </ol>
                        </div>
                        <div className="Groups-box">
                            <h3 > Group2</h3>

                            <ol>
                                {this.state.nameList.map((item, index) => {
                                    return (index % 2 === 1) ? <li key={index} item={this.state}>{item}</li> : null
                                })}
                            </ol>
                        </div>

                    </div>


                </div>
            </div>
            <p>////////////////////////////////////////////////////////////Xndir 2/////////////////////////////////////////////////////////////////////////////
            </p>
            <div>
                <label>
                    <input type="number" value={this.state.number} onChange={this.handleInputNumber} />
                </label>
                <button onClick={this.handleClickNumber}>CLick me</button>
            </div>
            <div className="numberboxes">
                <div className="numbergroup">
                    <h3>kent tver</h3>
                    {this.state.numberList.map((item, index) => {
                        return (item % 2 === 1) ? <h5>{item}</h5> : null
                    })}
                </div>
                <div className="numbergroup">
                    <h3>zuyg tver</h3>
                    {this.state.numberList.map((item, index) => {
                        return (item % 2 === 0) ? <h5>{item}</h5> : null
                    })}
                </div>
            </div>

            <p>//////////////////////////Xndir 3///////////////////////////////////////////////////////////////</p>
            <div>
                <button onClick={this.handleChangePosition}>CLick me</button>
            </div>
            <div className="fruitboxes" >
                {this.state.imageBox.map((item, index) => {
                    return <div className="fruitbox"><img src={item} alt="fruit" /></div>
                })}
            </div>
            <p>/////////////////////////////////xndir 4//////////////////////////</p>
            <div>
                <button>Sort Too Group</button>
                <div className="Groups">
                    <div className="Groups-box">Group1</div>
                    <div className="Groups-box">All Staff
                        {this.state.Staff.map((item, index) => {
                            return <p>{index + 1}.{item}</p>
                        })}
                    </div>
                    <div className="Groups-box">Group2</div>
                </div>
            </div>
        </div>
    }
}
export default Inputes