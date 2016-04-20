var React = require('react');
var FluxibleMixin = require('fluxible').FluxibleMixin;
var ProductStore = require('./stores/ProductStore');
var addToCart = require('./actions/addToCart');


export function render(context) {
   React.withContext(
      context.getComponentContext(),
      function() {
         React.render(
            React.createElement(App),
            document.getElementById('fluxible-app')
         );
      }
   );
}


var ShoppingCart = require('./components/CartContainer.jsx');
var App = React.createClass({
   mixins: [FluxibleMixin],
   render: function() {
      return <div>
         <Products />
         <ShoppingCart />
      </div>;
   }
});


var Products = React.createClass({
   mixins: [FluxibleMixin],
   statics: {
      storeListeners: {
         _onChange: [ProductStore]
      }
   },

   render: function() {
      return <ul>
          {this.state.products.map(product =>
              <li>
                  <img src={product.image}/>
                  {product.title} - {product.price}&euro;
                  <button onClick={() => this.addToCart(product)}>add</button>
              </li>
          )}
      </ul>;
   },

   addToCart: function(product) {
      this.executeAction(addToCart, { product: product });
   },

   getInitialState: function() {
      return this._getStateFromStores();
   },

   _getStateFromStores: function() {
      return {
         products: this.getStore(ProductStore).getAllProducts()
      };
   },

   _onChange: function() {
      this.setState(this._getStateFromStores());
   }
});
