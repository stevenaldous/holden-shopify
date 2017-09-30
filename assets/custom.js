jQuery(document).ready(function($) {
  // Set Default Size to Med
  if( document.location.search.indexOf('variant') < 0 ) {
      $( function(){
          setTimeout( function() { $('.swatch-element.m-swatch label').trigger('click'); }, 250 );
      });
  }

});