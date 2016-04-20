define(['exports', 'module', 'laxar-patterns'], function (exports, module, _laxarPatterns) {
   /**
    * Copyright 2016 aixigo AG
    * Released under the MIT license
    * http://www.laxarjs.org
    */

   'use strict';

   function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

   var _patterns = _interopRequireDefault(_laxarPatterns);

   var injections = ['axContext'];
   function create(context) {
      var products = {};
      var total = 0;

      var cartPublisher = _patterns['default'].resources.replacePublisherForFeature(context, 'cart');

      function publishCart() {
         cartPublisher({
            total: total,
            products: Object.keys(products).map(function (id) {
               return products[id];
            })
         });
      }

      context.eventBus.subscribe('beginLifecycleRequest', publishCart);

      _patterns['default'].actions.handlerFor(context).registerActionsFromFeature('add', function (_ref) {
         var product = _ref.product;

         var id = product.id;
         products[id] = products[id] || {
            id: id, title: product.title, price: product.price, quantity: 0
         };
         products[id].quantity++;
         total += product.price;
         publishCart();
      }).registerActionsFromFeature('checkout', function () {
         products = {};
         total = 0;
         publishCart();
      });
   }

   module.exports = {
      name: 'shopping-cart-activity',
      injections: injections,
      create: create
   };
});