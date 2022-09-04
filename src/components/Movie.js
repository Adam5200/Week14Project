import React, { Component } from "react"
import Stars from "./Stars"
import ReviewForm from "./ReviewForm"

export default class Movie extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movie: props.movie,
            rating: props.movie.rating,
            reviews: [
 
            ]      
        }
    }

    addReview = (newReview) => {
        this.setState({reviews: this.state.reviews.concat(newReview)})
    }

    render() {
        let movie = this.state.movie
        return (
            <div className="card w-75">
                <div className="card-header bg-primary text-white">
                    <h1>{movie.title}</h1> 
                </div>
                <div className="card-body">
                    <img className="img" src={movie.image} alt="Movie Poster"></img>
                    <br/>
                    <div className="card-body-synopsis" id="overflow">
                        <h5>Synopsis: </h5> {movie.synopsis}
                    </div>
                    <br/>
                    
                    <Stars {...{rating: this.state.rating}}/>
                    
                    <h5>Directed By: </h5> {movie.director}
                    <br/>
                    <br/>

                    <ReviewForm addReview={this.addReview}/>
                    <h3>Reviews:</h3>
                    <p>{this.state.reviews.join("\n")}</p>

                </div>
            </div>
        )
    }
}