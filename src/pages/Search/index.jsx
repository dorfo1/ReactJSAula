import React, { Component, Fragment } from 'react'
import SearchItem from '../../components/SearchItem'

import axios from 'axios'

class Search extends Component {
    constructor() {
        super()

        this.onSearch = this.onSearch.bind(this)

        this.state = {
            results: [],
        }
    }

    onSearch(event) {
        const value = event.currentTarget.value
        axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${value}`)
            .then(({ data }) => {
                console.log(data);
                this.setState({
                    results: data.results,
                })
            })
    }

    renderItem(item) {
        return (
           <SearchItem item={item}/>
        )
    }

    render() {
        return (
            <Fragment>
                <input type="text" onChange={this.onSearch} />

                <div>
                    {this.state.results.map(this.renderItem)}
                </div>
            </Fragment>
        );
    }
}

export default Search;