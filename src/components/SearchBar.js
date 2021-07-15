import React from 'react';


class SearchBar extends React.Component {

    state = {term:''};

    onFormSubmit = (e)=>{
        e.preventDefault();
        console.log("form is submitted");
        this.props.onTermSearch(this.state.term);
    }

    onInputChange = (e)=>{
        // console.log(e.target.value);
        this.setState({term:e.target.value});
    }

    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit} >
                    <div className="field">

                        <label>Search Youtube Video</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange} />

                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;