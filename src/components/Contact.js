import * as React from "react"

const Contact = ({fn}) => {
    return(
        <div className="xx">
            <p className="text"  onClick={fn}>Contact</p>
        </div>
    )
}

export default Contact;