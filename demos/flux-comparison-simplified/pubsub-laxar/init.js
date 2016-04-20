/**
 * Copyright 2016 Michael Kurze, aixigo AG
 * Released under the MIT license
 * http://www.laxarjs.org
 */
require( [
   'laxar',
   'laxar-react-adapter',
   'laxar-application-dependencies',
   'json!laxar-application/var/flows/main/resources.json'
], function( ax, axReactAdapter, applicationDependencies, resources ) {
   'use strict';

   // prepare file listings for efficient asset loading
   // listing contents are determined by the Gruntfile.js
   window.laxar.fileListings = {
      application: resources,
      bower_components: resources,
      includes: resources
   };

   ax.bootstrap( applicationDependencies, [ axReactAdapter ] );
} );
