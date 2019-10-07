import React from 'react'
import './Navbar.css'

function Navbar() {
    const firstName = "Jared"
    const lastName = "Gentry"

    // const date = new Date(2019, 10, 1, 21)
    const date = new Date() // current date
    const hours = date.getHours()
    let timeOfDay

    const styles = { // inline styles good for dynamic styling
        fontStyle: "italic", 
        fontSize: 52, // defaults to pixels px
        // fontSize: "52px"
    }

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "blue"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "red"
    } else {
        timeOfDay = "night"
        styles.color = "black"
    }

    // embed JS into JSX using { }
    return (
        <nav className="Navbar">
            {/* <h3>Hi my name is {firstName + " " + lastName}!</h3> */}
            {/* or use string templating ES6 | style expects a JS object */}
            <h3><span style={styles}>Good {timeOfDay}</span>, my name is {`${firstName} ${lastName}! ;)`}</h3>
        </nav>
    )
}

export default Navbar // semicolons are not needed; personal preference