jQuery(document).ready(function($) {
  // Set Default Size to Med
  if( document.location.search.indexOf('variant') < 0 ) {
      $( function(){
          setTimeout( function() { $('.swatch-element.m-swatch label').trigger('click'); }, 250 );
      });
  }

  // Custom PopUp script
  $('.newsletter').addClass('hide');
  $('.yo').removeClass('hide');

  $('#yo-l').on('click', function() {
    $('.yo').addClass('hide');
    $('.newsletter').removeClass('hide');
  });

});