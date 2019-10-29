$('#btn').on('click', function(){
	var $tweet = $('<div id="twt"></div>');
	$tweet.text('@insaf:' + $('#input').val());
	$tweet.appendTo($('#feed'));
});