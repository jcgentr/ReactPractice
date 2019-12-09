import React, {Component} from 'react'

class MemeGenerator extends Component {
    state = {
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
        allMemeImgs: []
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            console.log(response.data.memes)
            this.setState({allMemeImgs: response.data.memes})
        })
    }

    // no more binding in constructor if you use arrow functions
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const randomIndex = parseInt(Math.random() * this.state.allMemeImgs.length)
        const randomURL = this.state.allMemeImgs[randomIndex].url
        this.setState({
            randomImg: randomURL
        })
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Top Text"
                        name="topText" 
                        value={this.state.topText} 
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        placeholder="Bottom Text"
                        name="bottomText" 
                        value={this.state.bottomText} 
                        onChange={this.handleChange}
                    />
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator