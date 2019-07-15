import React from 'react'
import Mention from './Mention'

const Mentions = ({ mentions }) => {
    return (
        <div>
            {mentions.map((mention, index) => (
                <Mention 
                    key={index}
                    mention={mention} 
                />
            ))}
        </div>
    )
}

export default Mentions
