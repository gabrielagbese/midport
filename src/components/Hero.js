import * as React from "react"
import testImage from "../images/testface.png"
import gsap from "gsap"
import { useState } from "react"

import About from "./About"

const Hero = ({fn}) => {
    const [active, setActive]  = useState("FirstCard")


    const Styled = {
        paddingLeft: 40,
    }
    return(
        <div className="xx">
            {/* <img src={testImage} width="400px" height="350px" style={Styled}></img> */}
            <p className="text" onClick={fn}> Spotif</p>
        </div>
    )
}

export default Hero;