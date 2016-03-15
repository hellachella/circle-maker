var $body = $('body');

$body.on('keydown', function () {
  var $newBall = $('<div>');

  $newBall.addClass('ball');
  $body.append($newBall);
  $newBall.css('left', Math.random() * 1000);
  $newBall.css('top', Math.random() * 1000);
});
