$('#btn').on('click', function(){
	var $tweet = $('<div id="twt"></div>');
	$tweet.html('<span id="us">@' + userName + ': </span><hr>' + $('#input').val());
	$tweet.appendTo($('#feed'));
	$('#twt').first().remove()
});



