//Added in document.ready function to ensure that all html is loaded before these scripts run.

$(document).ready(function(){

  
 // Pill button click event to show and hide selections.

$('#btn-all').click(function(){
    $('#hero').removeClass().addClass('hero-hydra');
    $('.singers').show();
    $('.producers').show();
    $('.remixers').show();
    $('.consultancy').show();

 
});

$('#btn-singers').click(function(){
    $('#hero').removeClass().toggleClass('hero-singer');
    $('.singers').show(2000);
    $('.producers').hide(2000);
    $('.remixers').hide(2000);
    $('.consultancy').hide(2000);

});
 
$('#btn-producers').click(function(){
    $('#hero').removeClass().toggleClass('hero-producers');
    $('.singers').hide(2000);
    $('.producers').show(2000);
    $('.remixers').hide(2000);
    $('.consultancy').hide(2000);


});

$('#btn-remixers').click(function(){
    $('#hero').removeClass().toggleClass('hero-remixers');
    $('.singers').hide(2000);
    $('.producers').hide(2000);
    $('.remixers').show(2000);
    $('.consultancy').hide(2000);


});

$('#btn-consultancy').click(function(){
    $('#hero').removeClass().toggleClass('hero-consultancy');
    $('.singers').hide(2000);
    $('.producers').hide(2000);
    $('.remixers').hide(2000);
    $('.consultancy').show(2000);


});

});
