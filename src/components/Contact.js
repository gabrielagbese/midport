import * as React from "react"

const Contact = ({fn}) => {
    return(
        <div>
            <p className="text"  onClick={fn}>Contact</p>
        </div>
    )
}

export default Contact;