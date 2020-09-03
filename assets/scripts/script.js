//Added in document.ready function to ensure that all html is loaded before these scripts run.

$(document).ready(function(){

  
 // Pill button click event to show and hide selections.

$('#btn-all').click(function(){
    $('.singers').show();
    $('.producers').show();
    $('.remixers').show();
    $('.consultancy').show();


});

$('#btn-singers').click(function(){
    $('#hero').removeClass('').addClass('.hero-singer');
    $('.singers').show(2000);
    $('.producers').hide(2000);
    $('.remixers').hide(2000);
    $('.consultancy').hide(2000);


});

$('#btn-producers').click(function(){{
    $('.singers').hide(2000);
    $('.producers').show(2000);
    $('.remixers').hide(2000);
    $('.consultancy').hide(2000);


};

$('#btn-producers').click(function(){
    $('.singers').hide(2000);
    $('.producers').show(2000);
    $('.remixers').hide(2000);
    $('.consultancy').hide(2000);


});

$('#btn-remixers').click(function(){
    $('.singers').hide(2000);
    $('.producers').hide(2000);
    $('.remixers').show(2000);
    $('.consultancy').hide(2000);


});

$('#btn-consultancy').click(function(){
    $('.singers').hide(2000);
    $('.producers').hide(2000);
    $('.remixers').hide(2000);
    $('.consultancy').show(2000);


});





})
})