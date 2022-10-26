import * as React from "react"
import testImage from "../images/testface.png"
import gsap from "gsap"
import { useState } from "react"

import About from "./About"

const Hero = ({fn}) => {
    const [active, setActive]  = useState("FirstCard")


    const Styled = {
    }
    return(
        <div className="xx">
            <p className="text" onClick={fn}> Gabriel</p>
        </div>
    )
}

export default Hero;