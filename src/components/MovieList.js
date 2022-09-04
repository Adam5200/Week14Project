import React, { Component } from "react"
import Movie from "./Movie"
import poster1 from "./images/Space Odyssey.jpg"
import poster2 from "./images/Fear And Loathing.jpg"
import poster3 from "./images/The Lego Movie.jpg"
import poster4 from "./images/Shawshank Redemption.jpg"
import '../App.css';

export default class MovieList extends Component {
    render() {
        let movies = [
            {
                id: 0,
                title: "2001: a Space Odyssey",
                director: "Stanley Kubrick",
                rating: 5,
                synopsis: "After uncovering a mysterious artifact buried beneath the Lunar surface, a spacecraft is sent to Jupiter to find its origins - a spacecraft manned by two men and the supercomputer H.A.L. 9000.",
                image: poster1
            },
            {
                id: 1,
                title: "Fear and Loathing in Las Vegas",
                director: "Terry Gilliam",
                rating: 4,
                synopsis: "An oddball journalist and his psychopathic lawyer travel to Las Vegas for a series of psychedelic escapades, in an attempt to capture, as they put it.. The American Dream in action.",
                image: poster2
            },
            {
                id: 2,
                title: "The LEGO Movie",
                director: "Phil Lord and Chris Miller",
                rating: 5,
                synopsis: "An ordinary LEGO construction worker, thought to be the prophesied special, is recruited to join a quest to stop an evil tyrant from gluing the LEGO universe into eternal stasis.",
                image: poster3
            },
            {
                id: 3,
                title: "The Shawshank Redemption",
                director: "Frank Darabont",
                rating: 3,
                synopsis: "After the murder of his wife, hotshot banker Andrew Dufresne is sent to Shawshank Prison, where the usual unpleasantness occurs. Over the years, he retains hope and eventually gains the respect of his fellow inmates, especially longtime convict Redding, a black marketeer, and becomes influential within the prison. Eventually, Andrew achieves his ends on his own terms.",
                image: poster4
            }
        ]
        return (
            <div className = "container">
               <Movie {...{movie: movies[0]}}/>
               <Movie {...{movie: movies[1]}}/>
               <Movie {...{movie: movies[2]}}/>
               <Movie {...{movie: movies[3]}}/>
            </div>
        )
    }
}