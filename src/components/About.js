import React from 'react'
import Courses from './Courses'
import Mentions from './Mentions'

const About = ({about}) => {
    return (
        <div>
            <h2> About me</h2>
            <p className="lead"><small>{about.description}</small></p>
            <p className="lead"><small>{about.longDescription}</small></p>
            <h2>Mentions</h2>
            <Mentions
                mentions={about.mentions}
            />
            <h2>Courses</h2>
            <Courses 
                courses={about.courses}
            />
            
        </div>
    )
}

export default About
