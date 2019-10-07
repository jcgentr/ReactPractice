import React from "react";
import './MyInfo.css';

function MyInfo()
{
    return (
        <div className="MyInfo">
            <h1 className="My-Name">Jared Chase Gentry</h1>
            <p>I like to play soccer and tennis and lift heavy weights.</p>
            <h2>Places I want to visit:</h2>
            <ol className="My-List">
                <li>Japan</li>
                <li>Finland</li>
                <li>California</li>
            </ol>
        </div>
    )
}

export default MyInfo;