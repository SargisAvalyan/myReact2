import React from "react"
import "./style.scss"

class SectionInfo extends React.Component {
    render() {
        return <div className="section1-box" >
            <h4>
                {this.props.title}
            </h4>
            <p>
                {this.props.description}
            </p>
        </div>
    }

}
export default SectionInfo
