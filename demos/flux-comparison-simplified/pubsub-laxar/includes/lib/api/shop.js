/**
 * Mocking client-server processing
 */
'use strict';

define(['json!./products.json'], function(_products) {
   var TIMEOUT = 100;
   var Shop = {};

   Shop.getProducts = function (cb, timeout) {
       timeout = timeout || TIMEOUT;
       setTimeout(function () {
           cb(_products);
       }, timeout);
   };

   Shop.buyProducts = function (payload, cb, timeout) {
       timeout = timeout || TIMEOUT;
       setTimeout(function () {
           cb();
       }, timeout);
   };

   return Shop;
});
