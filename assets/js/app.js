$('#food-style-drop').on('click', function() {
  $('#food-style-modal').css('display', 'flex');
});

$('.closeBtn').on('click', function() {
  $('#food-style-modal').css('display', 'flex');
});

$(window).on('click', function(event) {
  if (event.target.id === 'food-style-modal') {
    $('#food-style-modal').css('display', 'none');
  }
});
$('#distance-drop').on('click', function() {
  $('#food-style-modal').css('display', 'flex');
});

$('.closeBtn').on('click', function() {
  $('.modal').css('display', 'none');
});

$(window).on('click', function(event) {
  if (event.target.id === 'distance-drop') {
    $('#radius-modal').css('display', 'flex');
  }
  if (event.target.id === 'sign-up-btn') {
    $('#sign-up-modal').css('display', 'flex');
  }
  if (event.target.id === 'log-in-btn') {
    $('#log-in-modal').css('display', 'flex');
  }
  if (event.target.id === 'location-input') {
    $('#location-input').val('');
  }
  if (event.target.id === 'header-account-btn') {
    $('.account-menu').css('display', 'flex');
  }
  if (event.target.id === 'close-account-button') {
    $('.account-menu').css('display', 'none');
  }
});
