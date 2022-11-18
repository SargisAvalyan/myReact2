import React from "react";
import SectionInfo from "./sectionInfo"
import SectionCategory from "./sectionCategory"
import History from "../sectionHistory";

class Home extends React.Component {
 
  render() {
    return <section>
      <SectionInfo title="Welcome to Simple House "
        description=" Total 3 HTML pages are included in this template. Header image has a parallax effect.
                You can feel free to download, edit and use this TemplateMo
                layout for your commercial or non-commercial websites."/>
      <SectionCategory />
      <History/>
    </section>
  }
}

export default Home