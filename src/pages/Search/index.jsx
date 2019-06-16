import React, { Component, Fragment } from 'react'
import SearchItem from '../../components/SearchItem'
import './style.css'

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
            <SearchItem key={item.id} item={item} />
        )
    }

    render() {
        return (
            <Fragment>
                <input
                    type="text"
                    className="mdl-textfield__input"
                    onChange={this.onSearch}
                    placeholder="Digite a mercadoria..."
                />


                <div>
                    {this.state.results.map(this.renderItem)}
                </div>
            </Fragment>
        );
    }
}

export default Search;