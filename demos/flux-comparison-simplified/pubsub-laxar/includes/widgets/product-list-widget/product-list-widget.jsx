/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license
 * http://www.laxarjs.org
 */

// compile using
// > babel -m amd -d . product-list-widget.jsx


import React from 'react';
import patterns from 'laxar-patterns';

const injections = ['axContext', 'axReactRender'];
function create(context, reactRender) {

    patterns.resources.handlerFor(context)
        .registerResourceFromFeature('products', {
            onUpdateReplace: render
        });

    function render() {
        reactRender(<ul>
            {(context.resources.products || []).map(product =>
                <li key={product.id}>
                    <img src={product.image}/>
                    {product.title} - {product.price}€
                    x {product.inventory}
                    <button onClick={() => addToCart(product)}
                            disabled={product.inventory === 0}>
                        add
                    </button>
                </li>
            )}
        </ul>);
    }


    const addToCartPublisher =
        patterns.actions.publisherForFeature(context, 'addToCart')

    function addToCart(product) {
        if(product.inventory > 0) {
            addToCartPublisher({ product: product });
        }
    }

    return { onDomAvailable: render };
}

export default {
    name: 'product-list-widget',
    injections: injections,
    create: create
};
