/**
 * Copyright 2016 aixigo AG
 * Released under the MIT license
 * http://www.laxarjs.org
 */

import ng from 'angular';
import patterns from 'laxar-patterns';

Controller.$inject = [ '$scope' ];
function Controller( $scope ) {
   patterns.resources.handlerFor($scope)
      .registerResourceFromFeature('cart');

   $scope.actions = {
      checkout: patterns.actions.publisherForFeature($scope, 'checkout')
   };
}

export default ng.module('shoppingCartWidget', [])
   .controller('ShoppingCartWidgetController', Controller);
