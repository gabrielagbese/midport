import * as React from "react"
import testImage from "../images/testface.png"

const Hero = () => {

    const Styled = {
        paddingLeft: 40,
    }
    return(
        <div className="xx">
            {/* <img src={testImage} width="400px" height="350px" style={Styled}></img> */}
            <p className="text">Gabriel.</p>
        </div>
    )
}

export default Hero;