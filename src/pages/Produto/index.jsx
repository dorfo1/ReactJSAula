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


    _formatPrince = (valor, moeda) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: moeda
        }).format(valor)
    }

    _formatAdress = (address) => {
        return address.search_location.neighborhood.name + " - " + address.city.name + "/" + address.country.name
    }

    renderContent() {
        const { data } = this.state;
        console.log(data)
        return (
            <Fragment>
                <div className="row main__description ">
                    <div className="col-md-6 col-lg-6 col-sm-12">
                        <img className="img-fluid" src={data.pictures[0].url} />
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12">
                        <h2 className="title">{data.title}</h2>
                        <h6 className="mdl-cardsupporting-text">#{data.id}</h6>
                        <h6 className="mdl-cardsupporting-text">{data.sold_quantity} vendidos </h6>
                        <h4 className="price">
                            Preço: {this._formatPrince(data.base_price, data.currency_id)}
                        </h4>
                        <h4 className="qtd">Quantidade: {data.available_quantity}</h4>
                        <h4 className="end">Endereço: {this._formatAdress(data.seller_address)}</h4>
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
                            Comprar
                </button>
                    </div>
                    <p className="col-sm-10">{data.description}</p>
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