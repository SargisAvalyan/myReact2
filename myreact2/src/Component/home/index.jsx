import React from "react";
import Section1 from "./Section1"
import Section2 from "./Section2"

class Home extends React.Component{

  render() {
    return <section>
      <Section1/>
      <Section2/>
    </section>
  }
}

export default Home