/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license
 * http://www.laxarjs.org
 */

import patterns from 'laxar-patterns';

const injections = ['axContext'];
function create(context) {
   let products = {};
   let total = 0;

   const cartPublisher = patterns.resources
      .replacePublisherForFeature(context, 'cart');

   function publishCart() {
      cartPublisher({
         total: total,
         products: Object.keys( products ).map( id => products[id] )
      });
   }

   context.eventBus.subscribe('beginLifecycleRequest', publishCart);

   patterns.actions.handlerFor(context)
      .registerActionsFromFeature('add', ({product}) => {
         const id = product.id;
         products[id] = products[ id ] || {
            id: id, title: product.title, price: product.price, quantity: 0
         };
         products[id].quantity++;
         total += product.price;
         publishCart();
      })
      .registerActionsFromFeature('checkout', () => {
          products = {};
          total = 0;
          publishCart();
      });
}

export default {
   name: 'shopping-cart-activity',
   injections: injections,
   create: create
}
