import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const SearchItem = props => (
    <Link to={`produto/${props.item.id}`}>
        <div className="margin-auto">
            <div className="row card-item">
                <div className="col-md-6 col-lg-6 col-sm-12 imagemProduto">
                    <img src={props.item.thumbnail} />
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <h6 className="mdl-cardsupporting-text">{props.item.title}</h6>
                </div>
            </div>
        </div>
    </Link >
);

export default SearchItem;