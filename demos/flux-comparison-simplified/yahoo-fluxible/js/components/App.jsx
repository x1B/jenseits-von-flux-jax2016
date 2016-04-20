// Not used in the simplified example (as the App component is inlined there),
// but left here for comparison.
'use strict';

var React = require('react');
var CartContainer = require('./CartContainer.jsx');
var ProductsContainer = require('./ProductsContainer.jsx');
var FluxibleMixin = require('fluxible').FluxibleMixin;

var App = React.createClass({
    mixins: [FluxibleMixin],
    render: function () {
        return (
            <div>
                <ProductsContainer />
                <CartContainer />
            </div>
        );
    }
});

module.exports = App;
