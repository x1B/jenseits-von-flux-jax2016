import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { addToCart } from './actions';
import { getProductsList } from './reducers/products';
import { ShoppingCart } from './components/CartContainer.jsx';

class ProductsBase extends Component {
    render() {
        const { products } = this.props;
        return <ul>
            {products.map(product =>
                <li>
                    <img src={product.image}/>
                    {product.title} - {product.price}€ x {product.inventory}
                    <button onClick={() => this.props.addToCart(product.id)}
                            disabled={product.inventory === 0}
                        >add</button>
                </li>
            )}
        </ul>;
    }
}

function mapStateToProps(state) {
    return { products: getProductsList(state.productsById) };
}

const Products = connect(
    mapStateToProps,
    { addToCart: addToCart }
)(ProductsBase)

export function render(store, element) {
    React.render(
        <Provider store={store}>
            {() =>  <div>
                        <Products />
                        <ShoppingCart />
                    </div>}
        </Provider>,
        element
    );
}
