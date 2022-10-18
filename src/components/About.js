import * as React from "react"

const About = ({fn}) => {
    return(
        <div>
            <p className="text"  onClick={fn}>About</p>
        </div>
    )
}

export default About;