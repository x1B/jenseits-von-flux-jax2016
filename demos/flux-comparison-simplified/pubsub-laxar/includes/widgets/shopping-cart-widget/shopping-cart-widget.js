define(['exports', 'module', 'angular', 'laxar-patterns'], function (exports, module, _angular, _laxarPatterns) {
   /**
    * Copyright 2016 aixigo AG
    * Released under the MIT license
    * http://www.laxarjs.org
    */

   'use strict';

   function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

   var _ng = _interopRequireDefault(_angular);

   var _patterns = _interopRequireDefault(_laxarPatterns);

   Controller.$inject = ['$scope'];
   function Controller($scope) {
      _patterns['default'].resources.handlerFor($scope).registerResourceFromFeature('cart');

      $scope.actions = {
         checkout: _patterns['default'].actions.publisherForFeature($scope, 'checkout')
      };
   }

   module.exports = _ng['default'].module('shoppingCartWidget', []).controller('ShoppingCartWidgetController', Controller);
});