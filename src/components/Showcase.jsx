import React from 'react'

function Showcase() {
    return (
        <div className="showcase">
            <img className="portrait-pic" src={require('../portrait.jpeg')} alt="portrait"/>
           <h1>Mustabur Rahman</h1>
           <p>Junior Software Developer</p>
           <p>Website built from the ground up using React.js framework</p>
        </div>
    )
}

export default Showcase
