
$('#food-style-drop').on('click', function(){
    $('#food-style-modal').css('display', 'block');
})

$('.closeBtn').on('click', function(){
    $('#food-style-modal').css('display', 'none');
})

$(window).on('click', function(event){
    if (event.target.id == 'food-style-modal'){
        $('#food-style-modal').css('display', 'none');
    }
})
$('#distance-drop').on('click', function(){
    $('#food-style-modal').css('display', 'block');
})

$('.closeBtn').on('click', function(){
    $('#radius-modal').css('display', 'none');
})

$(window).on('click', function(event){
    if (event.target.id == 'radius-modal'){
        $('#radius-modal').css('display', 'none');
    }
})
$(document).on('click','.truck-dropdown', function(){
    console.log('it clicked')
    $('#truck-modal').css('display', 'block');
})

$('.closeBtn').on('click', function(){
    $('#truck-modal').css('display', 'none');
})

$(window).on('click', function(event){
    if (event.target.id == 'truck-modal'){
        $('#truck-modal').css('display', 'none');
    }
})