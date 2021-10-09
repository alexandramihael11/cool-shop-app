import React from 'react';
import './ProductItem.css';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/CartAction';
import { addToFavorites, removeFromFavorites } from '../../redux/favorite/FavoritesAction';
import { Link } from 'react-router-dom';
import { ReactComponent as FavoriteBorder } from '../../assets/icons/favorite_border.svg';
import { ReactComponent as FavoriteBlack } from '../../assets/icons/favorite_black.svg';

function ProductItem(props) {
    const {name, price, currency, image, id} = props;

    return(
        <div className="product-item col-12 col-md-4 mb-3 d-flex flex-column align-items-center">
            {!checkProductIsInFavoritesList(props) ?
            (
                <button 
                    className="ml-auto mb-2 btn btn btn-link"
                    onClick={() => props.addToFavorites({
                        product: {
                            id,
                            name,
                            price,
                            currency,
                            image,
                            addedToFavorites: true
                        }
                    })}
                >
                    <FavoriteBorder className="mr-2"/>
                </button>
            )
            :
            (
                <button 
                className="ml-auto mb-2 btn btn btn-link"
                onClick={() => props.removeFromFavorites({id: id})}
            >
                <FavoriteBlack className="mr-2"/>
            </button>
            )}

            <Link to={`/product/${id}`} className="text-dark d-flex flex-column align-items-center">
                <img src={image} alt="productPhoto" className="mb-2"/>
                <p className="mb-1 text-center">{ name }</p>
                <p className="text-center">{ price + currency }</p>
            </Link>
            <button
                className="btn btn-outline-dark"
                onClick={() => props.addToCart({
                    product: {
                        id,
                        name,
                        price,
                        currency,
                        image
                    }
                })}
            >
                Adaugă în coș
            </button>
        </div>
    );
}
function checkProductIsInFavoritesList(props){
    const { id, favoritesList } = props;

    let isFavorite = false;
    favoritesList.forEach((product) => {
        const findResult = Number(product.id) === Number(id);

        if(findResult !== undefined && findResult === true)
            isFavorite = true;
    })

    return isFavorite;
}

function mapStateToProps(state) {
    return {
        favoritesList: state.favorites.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
        addToFavorites: (product) => dispatch(addToFavorites(product)),
        removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);