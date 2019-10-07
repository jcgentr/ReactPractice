import React from 'react'

function Joke(props) {
    return (
        <div className="joke">
            {/* ternary operator used to conditionally render h3 */}
            <h3 style={{display: props.question ? "block" : "none"}}>Q: {props.question}</h3>
            <p style={{color: !props.question && "#888"}}>A: {props.punchline}</p>
        </div>
    )
}

export default Joke

// if jokes object passed in instead
// <h3 style={{display: props.joke.question ? "block" : "none"}}>Q: {props.joke.question}</h3>
// <p style={{color: !props.joke.question && "#888"}}>A: {props.joke.punchline}</p>