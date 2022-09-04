import React, { Component } from 'react'

export default class ReviewForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            typeValue: ""
        }
    }

    handleTypeChange = (event) => {
        // Sets our piece of state to whatever is currently in the textboxl
        this.setState({ typeValue: event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault()
        if(this.state.typeValue !== "") {
            this.props.addReview(this.state.typeValue)
            this.setState({typeValue: ""})
        }
    }

    render() {
        return (
            <div>
                <form>
                    What did you think of this film? <br/>
                    <input type="text" value={this.state.typeValue} onChange={this.handleTypeChange}/>
                    <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                </form>            
            </div>
        )
    }
}