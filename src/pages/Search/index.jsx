import React from 'react'

class Search extends React.Component{
    state={
        teste:""
    }

    onTextChaged = value =>{
        this.setState({teste:value})
    }
    
    render(){
        return(
            <div>{this.state.teste}
            <input onChange={(event) => this.onTextChaged(event.target.value)} value={this.state.teste}/>
            </div>
        )
    }
}

export default Search