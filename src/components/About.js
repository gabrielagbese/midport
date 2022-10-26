import * as React from "react"

const About = ({fn}) => {
    return(
        <div className="xx">
            <p className="text"  onClick={fn}>
                <div className="coverblur"><p className="text">
                <div className="layerblur testlayer">
                <p className="text">a</p>
                <div className="layerblur testlayer2">g</div>
                </div>
          </p>
          </div>
            </p>
        </div>
    )
}

export default About;