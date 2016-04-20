define(['exports', 'module', 'react', 'laxar-patterns'], function (exports, module, _react, _laxarPatterns) {
    /**
     * Copyright 2016 aixigo AG
     * Released under the MIT license
     * http://www.laxarjs.org
     */

    // compile using
    // > babel -m amd -d . product-list-widget.jsx

    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _React = _interopRequireDefault(_react);

    var _patterns = _interopRequireDefault(_laxarPatterns);

    var injections = ['axContext', 'axReactRender'];
    function create(context, reactRender) {

        _patterns['default'].resources.handlerFor(context).registerResourceFromFeature('products', {
            onUpdateReplace: render
        });

        function render() {
            reactRender(_React['default'].createElement(
                'ul',
                null,
                (context.resources.products || []).map(function (product) {
                    return _React['default'].createElement(
                        'li',
                        { key: product.id },
                        _React['default'].createElement('img', { src: product.image }),
                        product.title,
                        ' - ',
                        product.price,
                        '€ x ',
                        product.inventory,
                        _React['default'].createElement(
                            'button',
                            { onClick: function () {
                                    return addToCart(product);
                                },
                                disabled: product.inventory === 0 },
                            'add'
                        )
                    );
                })
            ));
        }

        var addToCartPublisher = _patterns['default'].actions.publisherForFeature(context, 'addToCart');

        function addToCart(product) {
            if (product.inventory > 0) {
                addToCartPublisher({ product: product });
            }
        }

        return { onDomAvailable: render };
    }

    module.exports = {
        name: 'product-list-widget',
        injections: injections,
        create: create
    };
});