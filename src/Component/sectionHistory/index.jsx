import React from "react"
import "./style.scss"
import image from "../../img/img-01.jpg"

class History extends React.Component {

    render() {
        return <section className="History-box">
            <img className="HistoryImg" src={image} alt="" />

            <div className="HistoryInfo">
                <h4 className="G-History">
                    Maecenas nulla neque
                </h4>
                <p className="P-History">
                    Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus.
                    Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas interdum porttitor imperdiet. Integer facilisis.
                </p>
                <div className="More">
                    <button>
                       Read More 
                    </button>

                </div>
            </div>

        </section>
    }
}

export default History