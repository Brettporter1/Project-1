$('#food-style-drop').on('click', function() {
  $('#food-style-modal').css('display', 'block');
});

$('.closeBtn').on('click', function() {
  $('#food-style-modal').css('display', 'none');
});

$(window).on('click', function(event) {
  if (event.target.id == 'food-style-modal') {
    $('#food-style-modal').css('display', 'none');
  }
});
$('#distance-drop').on('click', function() {
  $('#food-style-modal').css('display', 'block');
});

$('.closeBtn').on('click', function() {
  $('#radius-modal').css('display', 'none');
});

$(window).on('click', function(event) {
  if (event.target.id == 'radius-modal') {
    $('#radius-modal').css('display', 'none');
  }
});
