import React from 'react'

const Course = ({course}) => {
    return (
        <div>
            <p className="lead">
                <span><small>{course.year} | </small></span>
                <span><small>{course.name} | </small></span>
                <span><small><strong>{course.school}</strong></small></span>
                <span><small><em> {course.school ? '|' : null} {course.professors}</em></small></span>
            </p>
        </div>
    )
}

export default Course
