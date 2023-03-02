(function( $ ) {
	"use strict";
  var $body	= $('body');

  $( window ).load(function() {
  	if ($('#show_popups').length ) {
  		$body.addClass('activeModal');
  		$.magnificPopup.open({
  		 items: {
  				 src: '#show_popups'
  		 },
  		 type: 'inline',
  		 preloader: false,
  		 closeBtnInside: true
     });
  	}
		$(document).on('click', '.popup-modal-dismiss', function (e) {
			e.preventDefault();
			$body.removeClass('activeModal');
			$.magnificPopup.close();
		});
  });
})( jQuery );
