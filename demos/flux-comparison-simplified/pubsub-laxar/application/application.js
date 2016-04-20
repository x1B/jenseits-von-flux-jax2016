// See https://github.com/LaxarJS/laxar/blob/master/docs/manuals/configuration.md
window.laxar = ( function() {
   'use strict';

   var modeAttribute = 'data-ax-application-mode';
   var mode = document.querySelector( 'script[' + modeAttribute + ']' ).getAttribute( modeAttribute );

   return {
      name: 'pubsub-demo',
      description: 'pub/sub based shop example',
      theme: 'default',

      widgets: {
         // put your widgets' global ax.configuration.get( ... ) options here
      },

      useEmbeddedFileListings: mode === 'PRODUCTION',
      useMergedCss: true,
      eventBusTimeoutMs: (mode === 'PRODUCTION' ? 120 : 10) * 1000
   };

} )();
