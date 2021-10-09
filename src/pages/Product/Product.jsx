import React from 'react';
import Layout from '../../components/Layout/Layout';
import products from '../../utils/products.json';
import './Product.css';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/CartAction';
import { ReactComponent as ShopCart } from '../../assets/icons/shopping-cart.svg';
import { ReactComponent as FavoriteBorder } from '../../assets/icons/favorite_border.svg';
import { ReactComponent as FavoriteBlack } from '../../assets/icons/favorite_black.svg';
import { addToFavorites,removeFromFavorites } from '../../redux/favorite/FavoritesAction';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                addedToFavorites:false
            }
        }
    }

    componentDidMount() {
        const { match } = this.props;
        const productId = match.params.productId;
        const categoryValues = Object.values(products);
        const productItems = categoryValues.reduce((acc, category) => {
            return [
                ...acc,
                ...category.items
            ]
        }, []);

        const currentProduct = productItems.find(product => {
            return Number(productId) === product.id;
        });
        
        this.setState({product: currentProduct});
    }

    checkProductIsInFavoritesList(props){
        const { favoritesList } = props;
        const { product } = this.state
        let isFavorite = false;

        favoritesList.forEach((favoriteProduct) => {
            const findResult = Number(favoriteProduct.id) === Number(product.id);
    
            if(findResult !== undefined && findResult === true)
                isFavorite = true;
        })
    
        return isFavorite;
    }

    render() {
        const { product } = this.state;

        return (
            <Layout>
                <div className="product-page content-min-height container-fluid container-min-max-width">
                    <h1 className="my-5 h2">{product.name}</h1>
                    <div className="product-info d-flex">
                        <div className="image-wrapper d-flex mr-5">
                            <img src={product.image} alt="Product presentation"/>
                        </div>
                        <div className="product-details">
                            <p className="h3 text-danger">{product.price} {product.currency}</p>
                            <button
                                className="btn btn-dark mb-4 font-weight-bold"
                                   onClick={() => {
                                    this.props.addToCart({
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
                                <ShopCart className="mr-2"/>Adaugă în coș
                            </button>
                            <div>
                            {!this.checkProductIsInFavoritesList(this.props) ?
                                (<button 
                                    className="btn btn-outline-info mb-4"
                                    onClick={() => {
                                        this.props.addToFavorites({
                                            product: {
                                                id: product.id,
                                                name: product.name,
                                                price: product.price,
                                                currency: product.currency,
                                                image: product.image,
                                                addedToFavorites: true
                                            }
                                        })
                                    }}
                                > 
                                    <FavoriteBorder className="mr-2"/> Adaugă la favorite
                                </button>)
                            : (<button 
                                className="btn btn-outline-info mb-4"
                                onClick={() => this.props.removeFromFavorites({id: product.id})}
                            > 
                                <FavoriteBlack className="mr-2"/> Elimina de la favorite
                            </button>)}
                            </div>
                            
                            <p><span className="font-weight-bold">Mărime</span>: {product.size}</p>
                            <p><span className="font-weight-bold">Culoare</span>: {product.colour}</p>
                            <p><span className="font-weight-bold">Material</span>: {product.material}</p>
                            <p><span className="font-weight-bold">Brand</span>: {product.brand}</p>
                            <p className="font-weight-bold mb-1">Descriere:</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

function mapStateToProps(state){
    return {
        favoritesList: state.favorites.products
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload)),
        addToFavorites: (product) => dispatch(addToFavorites(product)),
        removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);