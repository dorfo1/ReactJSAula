import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'


const SearchItem = (props) =>(
   <Link to={`produto/${props.item.id}`}>Mostrar produto>
        <div className="mdl-grid demo-card-wide mdl-card mdl-shadow--4dp">
            <div className="mdl-cell imagemProduto mdl-cell--6-col">
                <img src={props.item.thumbnail} />
            </div>
            <div className="mdl-cell mdl-cell--6-col">
                <h3 className="mdl-card__supporting-text">{props.item.title}</h3>
            </div>
        </div>
    </Link>
)

export default SearchItem;


