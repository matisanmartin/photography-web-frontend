import React from 'react'

const About = ({about}) => {
    return (
        <div>
            <p>{about.name}</p>
            <p>{about.description}</p>
            <p>{about.longDescription}</p>
            <p>{about.email}</p>
        </div>
    )
}

export default About
