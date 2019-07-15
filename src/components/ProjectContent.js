import React from 'react'

const ProjectContent = ({project}) => {
    return (
        <div>
            <p>{project.id}</p>
            <p>{project.title}</p>
            <p>{project.visibleDescription}</p>
        </div>
    )
}

export default ProjectContent
