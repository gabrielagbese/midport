import * as React from "react"

const Projects = ({fn}) => {
    return(
        <div>
            <p className="text"  onClick={fn}>Projects</p>
        </div>
    )
}

export default Projects;