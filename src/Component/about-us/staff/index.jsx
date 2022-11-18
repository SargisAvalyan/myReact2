import React from "react";
import "./style.scss"

class Staff extends React.Component {
    render() {
        return <div className="staff-containe">

            <div className="G-staff" >
                <img className="Persone" src={this.props.persons.image} alt={this.props.persons.alt} />
                <div className="G-personInfo">
                    <h2 className="P-Name">{this.props.persons.name}</h2>
                    <p className="P-staffinfo">{this.props.persons.staffinfo}</p>
                    <p className='personinfo'>{this.props.persons.personinfo}</p>
                </div>
            </div>
        </div>

    }
}
export default Staff