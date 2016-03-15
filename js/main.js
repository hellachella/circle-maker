var $body = $('body')

$body.on('keydown', function () {
 var $newBall = $('<div>');

 $newBall.addClass('ball');
 $body.append($newBall);
 console.log('it worked');
});


