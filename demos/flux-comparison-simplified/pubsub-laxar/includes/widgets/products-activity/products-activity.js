define(['exports', 'module', 'laxar', 'laxar-patterns', 'api'], function (exports, module, _laxar, _laxarPatterns, _api) {
    /**
     * Copyright 2016 aixigo AG
     * Released under the MIT license
     * http://www.laxarjs.org
     */

    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _ax = _interopRequireDefault(_laxar);

    var _patterns = _interopRequireDefault(_laxarPatterns);

    var _Shop = _interopRequireDefault(_api);

    var injections = ['axContext'];
    function create(context) {
        var products = [];
        var replaceProducts = _patterns['default'].resources.replacePublisherForFeature(context, 'products');

        context.eventBus.subscribe('beginLifecycleRequest', function () {
            _Shop['default'].getProducts(function (list) {
                products = list;
                replaceProducts(products);
            });
        });

        _patterns['default'].actions.handlerFor(context).registerActionsFromFeature('decrementInventory', function (_ref) {
            var product = _ref.product;

            products.filter(function (current) {
                return current.id == product.id;
            }).forEach(function (current) {
                current.inventory = Math.max(0, current.inventory - 1);
            });
            replaceProducts(products);
        });
    }

    module.exports = {
        name: 'products-activity',
        injections: injections,
        create: create
    };
});