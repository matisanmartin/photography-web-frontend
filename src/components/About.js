import React from 'react'
import Courses from './Courses'
import Mentions from './Mentions'

const About = ({about}) => {
    return (
        <div>
            <h3> About me</h3>
            <p className="lead"><small>{about.description}</small></p>
            <p className="lead"><small>{about.longDescription}</small></p>
            <h3>Mentions</h3>
            <Mentions
                mentions={about.mentions}
            />
            <h3>Courses</h3>
            <Courses 
                courses={about.courses}
            />
            
        </div>
    )
}

export default About
