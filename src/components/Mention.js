import React from 'react'

const Mention = ({mention}) => {
    return (
        <div>
            <p className="lead">
                <span><small>{mention.year} | </small></span>
                <span><small><strong>{mention.event}</strong></small></span>
                <span><small> | {mention.description}</small></span>
            </p>
        </div>
    )
}

export default Mention