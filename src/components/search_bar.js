import React, { Component } from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state = {term: ''};
    }

    render(){
        return (
            <div className="search-bar">
                <div className="form-group">
                    <input 
                    placeholder="Search video..."
                    className="form-control"
                    type="text"
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
                </div>
            </div>
        );
    }

    onInputChange(term){

        this.setState({term});
        this.props.onSearchTermChange(term);

    }

}

export default SearchBar;