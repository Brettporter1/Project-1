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
  $('#radius-modal').css('display', 'flex');
  // $('#food-style-modal').css('display', 'flex');
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
// $(document).on('click', '.food-truck', function() {
//   $('#truck-modal').css('display', 'block');
// });

$(document).on('click', '.closeBtn', function() {
  $('#truck-modal').css('display', 'none');
});

$(window).on('click', function(event) {
  if (event.target.id == 'truck-modal') {
    $('#truck-modal').css('display', 'none');
  }
});

$(window).on('click', function(event) {
  if (
    event.target.id == 'user-info' ||
    event.target.id == 'user-image' ||
    event.target.id == 'user-name'
  ) {
    $('#user-drop-content').toggle('css', 'display', 'block');
  } else {
    $('#user-drop-content').css('display', 'none');
  }
});

$('.add-truck').on('click', () => {
  $('#add-truck-modal').css('display', 'block');
  $('.account-menu').css('display', 'none');
});
