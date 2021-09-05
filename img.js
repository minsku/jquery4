$('button').click(function(){
  $('#advice').text('select your favourite colour among the colours');
  $('#sel').text('your favourite colours in order');
  $('#img1').attr('src', 'red.jpg');
  $('#img2').attr('src', 'blue.jpg');
  $('#img3').attr('src', 'yellow.jpg')
});

$('img').click(function(){
  $('ul').append('<li>' + $(this).data('color') + '</li>');
  $(this).hide();
});