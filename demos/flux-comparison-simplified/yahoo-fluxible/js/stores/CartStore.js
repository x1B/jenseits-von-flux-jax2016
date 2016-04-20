'use strict';

var createStore = require('fluxible/utils/createStore');
var assign = require('object-assign');

var CartStore = createStore({
    storeName: 'CartStore',

    initialize: function () {
        this._products = {};
    },

    handlers: {
        'ADD_TO_CART': 'handleAddToCart',
        'CART_CHECKOUT': 'handleCartCheckout',
        'SUCCESS_CHECKOUT': 'handleSuccessCheckout'
    },

    handleAddToCart: function (payload) {
        // Original example has waitFor here, which is not very useful:
        // When the product store has already been updated, we cannot tell
        // anymore if there was 1 product or zero products in store.
        //
        // Commented out:
        // this.dispatcher.waitFor('ProductStore', function () {

        // Instead, the Cart store can now go first, to check the inventory
        // *before* adding the article, relying on the ProductStore to wait for
        // us.
        var productStore = this.dispatcher.getStore('ProductStore');
        var productEmpty = productStore.getAllProducts().some(function(product) {
           return product.id === payload.product.id && product.inventory === 0;
        });
        if(productEmpty) { return; }

        var product = payload.product;
        var id = product.id;
        product.quantity = id in this._products ? this._products[id].quantity + 1 : 1;
        this._products[id] = assign({}, product);
        this.emitChange();

        // see note above:
        // }.bind(this));
    },

    handleCartCheckout: function () {
        this._products = {};
        this.emitChange();
    },

    handleSuccessCheckout: function (payload) {
        console.log('YOU BOUGHT:', payload.products);
    },

    getAddedProducts: function () {
        return Object.keys(this._products).map(function (id) {
            return this._products[id];
        }.bind(this));
    },

    getTotal: function () {
        var total = 0;
        for (var id in this._products) {
            var product = this._products[id];
            total += product.price * product.quantity;
        }
        return total.toFixed(2);
    }
});

module.exports = CartStore;
