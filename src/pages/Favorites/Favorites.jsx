import React from 'react';
import Layout from '../../components/Layout/Layout';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Favorites.css';
import { ReactComponent as ShopCart } from '../../assets/icons/shopping-cart.svg';
import { ReactComponent as FavoriteBlack } from '../../assets/icons/favorite_black.svg';
import { addToCart } from '../../redux/cart/CartAction';
import { removeFromFavorites } from '../../redux/favorite/FavoritesAction';

const Favorites = (props) => {
    return(
        <Layout>
            <div className="cart-page content-min-height container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center">
                {
                    props.products.length
                    ? <div className="w-100">
                        <div className="d-flex justify-content text-center h4 text-bold">
                            <p className="w-25">Produs</p>
                            <p className="w-25">Pret</p>
                        </div>
                        {
                            props.products.map(product => {
                                return <div className="d-flex justify-content-between align-items-center text-center" key={product.id}>
                                    <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                                        <img src={product.image} alt="Produs"/>
                                        <p>{ product.name }</p>
                                    </div>
                                    <p className="w-25">{ product.price } { product.currency }</p>
                                    <div className="w-25 d-flex justify-content-center">
                                        <button
                                            className="btn btn-outline-info mb-4"
                                            onClick={() => props.removeFromFavorites({id: product.id})}
                                        >
                                            <FavoriteBlack className="mr-2"/> Elimina de la favorite
                                        </button>
                                    </div>
                                    <div className="w-25 d-flex justify-content-center">
                                    <button
                                        className="btn btn-outline-primary mb-4"
                                        onClick={() => {
                                            props.addToCart({
                                                product: {
                                                    id: product.id,
                                                    name: product.name,
                                                    price: product.price,
                                                    currency: product.currency,
                                                    image: product.image
                                                }
                                            })
                                        }}
                                    >
                                        <ShopCart className="mr-2"/> Adaugă în coș
                                    </button>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    : <div className="d-flex flex-column align-items-center">
                        <p className="h3">Nu ai produse la favorite!</p>
                        <Link to="/"><button className="btn btn-outline-dark">Inapoi la home</button></Link>
                    </div>
                }
            </div>
        </Layout>
    );
}

function mapStateToProps(state) {
    return {
        products: state.favorites.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload)),
        removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);