
$(document).ready(function() {

  $('#btn-otro').click(function(){

  	if ( $('#otro-input').hasClass('hidden') ){
  		$('#otro-input').removeClass('hidden');
  	}

  });

  $('#btn-agricultor').click(function(){

  	if ( !$('#otro-input').hasClass('hidden') ){
  		$('#otro-input').addClass('hidden');
  	}

  });

  $('#btn-restaurantero').click(function(){

  	if ( !$('#otro-input').hasClass('hidden') ){
  		$('#otro-input').addClass('hidden');
  	}

  });

});