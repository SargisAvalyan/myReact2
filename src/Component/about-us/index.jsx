import React from "react";
import SectionInfo from "../home/sectionInfo";
import img1 from "../../img/about-01.jpg"
import img2 from "../../img/about-02.jpg"
import img3 from "../../img/about-03.jpg"
import img4 from "../../img/about-04.jpg"
import Image1 from "../../img/about-05.jpg"
import Staff from "./staff";
import "./style.scss"


class AboutUs extends React.Component {


  state = {
    persons: [
      {
        image: img1,
        name: "Jennifer Soft",
        staffinfo: "Founder and CEO",
        personinfo: "Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio."
      },
      {
        image: img2,
        name: "Daisy Walker",
        staffinfo: "Founder and CEO",
        personinfo: "Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio."
      },
      {
        image: img3,
        name: "Florence Nelson",
        staffinfo: "Founder and CEO",
        personinfo: "Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio."
      },
      {
        image: img4,
        name: "Valentina Martin",
        staffinfo: "Founder and CEO",
        personinfo: "Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio."
      },
    ]
  }
  render() {
    return <section>
      <SectionInfo title="About Simple House"
        description="This is about page of simple house template. 
      You can modify and use this HTML 
      template for your website. 
      Total 3 HTML pages included in this template. Header image has a parallax effect."/>
      <div className="StaffAll">
        {this.state.persons.map((item, index) => (
          <Staff
            persons={item}
            key={index}
          />
        ))}
      </div>
      <div className="read-more" style={{ backgroundImage: `url('${Image1}')` }} >
        <div className="read-more-back" >
          <div className="read-more-info" >

          </div>
        </div>

      </div>
    </section>
  }
}

export default AboutUs