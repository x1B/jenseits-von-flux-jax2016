/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license
 * http://www.laxarjs.org
 */


import ax from 'laxar';
import patterns from 'laxar-patterns';
import Shop from 'api';

const injections = ['axContext'];
function create(context) {
    let products = [];
    const replaceProducts =
        patterns.resources.replacePublisherForFeature(context, 'products');

    context.eventBus.subscribe('beginLifecycleRequest', () => {
        Shop.getProducts(list => {
            products = list;
            replaceProducts(products);
        });
    });

    patterns.actions.handlerFor(context)
        .registerActionsFromFeature('decrementInventory', ({ product }) => {
            products
                .filter(current => current.id == product.id)
                .forEach(current => {
                    current.inventory = Math.max(0, current.inventory - 1);
                });
            replaceProducts(products);
        });
}

export default {
    name: 'products-activity',
    injections: injections,
    create: create
};
