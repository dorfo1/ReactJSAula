import React, { Component, Fragment } from 'react'
import axios from 'axios'

import './style.css'

class Produto extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: props.match.params.id,
            loading: true,
            data: {},
        }
    }

    componentDidMount() {
        axios.all([
            axios.get(`https://api.mercadolibre.com/items/${this.state.id}`),
            axios.get(`https://api.mercadolibre.com/items/${this.state.id}/description`)
        ])
            .then(([item, description]) => {
                this.setState({
                    data: {
                        ...item.data,
                        description: description.data.plain_text,
                    },
                    loading: false,
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    renderContent() {
        const { data } = this.state;
        console.log(data)
        return (
            <Fragment>
                <div className="mdl-grid demo-card-wide mdl-card mdl-shadow--4dp">
                    <div className="mdl-cell imagemProduto mdl-cell--6-col">
                        <img src={data.pictures[0].url} />
                    </div>
                    <div className="mdl-cell mdl-cell--6-col">
                        <h3 className="mdl-card__supporting-text">#{data.id}</h3>
                        <h3 className="mdl-card__supporting-text">{data.sold_quantity} vendidos</h3>
                        <h2 className="title">{data.title}</h2>
                        <h4 className="price">Preço: {data.base_price} {data.currency_id}</h4>
                        <h4 className="qtd">Quantidade: {data.available_quantity}</h4>
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
                            Comprar
                        </button>
                    </div>
                    
                    <p className="mdl-cell mdl-cell--10-col">{data.description}</p>
                    </div>
            </Fragment>
        )
    }
    render() {
        const { loading } = this.state;
        return loading ?
            <div>Loading...</div> :
            this.renderContent()
    }
}

export default Produto;