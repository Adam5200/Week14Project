import React, { Component } from "react"

export default class Movie extends Component {

    constructor(props) {
        super(props);

        this.state = {
            starRating: props.rating         
        }
    }

    adjustStarRating1 = () => {
        this.setState({starRating: 1})
    }

    adjustStarRating2 = () => {
        this.setState({starRating: 2})
    }

    adjustStarRating3 = () => {
        this.setState({starRating: 3})
    }

    adjustStarRating4 = () => {
        this.setState({starRating: 4})
    }

    adjustStarRating5 = () => {
        this.setState({starRating: 5})
    }

    render() {      
        return (
            <div className="App-Stars">
                <button className="star" onClick={this.adjustStarRating1}>★</button>
                <button className="star" onClick={this.adjustStarRating2}>★</button>
                <button className="star" onClick={this.adjustStarRating3}>★</button>
                <button className="star" onClick={this.adjustStarRating4}>★</button>
                <button className="star" onClick={this.adjustStarRating5}>★</button>
                <h3>Current Star Rating:</h3>
                <h3>{this.state.starRating}</h3>
            </div>
        )
    }

    
}