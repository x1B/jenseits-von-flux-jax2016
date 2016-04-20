'use strict';

var Fluxible = require('fluxible');
var view = require('./view')
var receiveProducts = require('./actions/receiveProducts');

var CartStore = require('./stores/CartStore');
var ProductStore = require('./stores/ProductStore');

var app = new Fluxible();
app.registerStore(CartStore);
app.registerStore(ProductStore);
var context = app.createContext();

context.executeAction(receiveProducts, {}, function (err) {
    if (err) {
        throw err;
    }
    return view.render(context);
});
