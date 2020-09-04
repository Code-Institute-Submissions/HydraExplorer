//Added in document.ready function to ensure that all html is loaded before these scripts run.

$(document).ready(function(){

// dark mode toggler

$('#btn-singers').click(function(){
    $('#darkModeToggle').toggleClass(dark-mode);
       
    });




// End Dark Mode toggle.


  
 // Pill button click event to show and hide selections.

$('#btn-all').click(function(){
    $('#hero').removeClass().addClass('hero-hydra');
    $('.hero-text p').empty()
    $('.singers, .producers, .remixers, .consultancy ').show()

    // Condensed down code to multiple selectors, keeping in below as evidence of previous code.
    // $('.producers').show();
    // $('.remixers').show();
    // $('.consultancy').show();

 
});


$('#btn-singers').click(function(){
    $('#hero').removeClass().toggleClass('hero-singer');
    $('.hero-text p').empty().append('<br><h3 class="focus-in-contract-bck" >Singers</h3>');
    $('.singers').show(2000).removeClass('').addClass('');
    $('.producers, .remixers, .consultancy').fadeTo(1000, 0.5);
    
    // Condensed down !
    // $('.remixers').hide(2000);
    // $('.consultancy').hide(2000);


});


 
$('#btn-producers').click(function(){
    $('#hero').removeClass().toggleClass('hero-producers');
    $('.hero-text p').empty().append('<br><h3 class="focus-in-contract-bck" >Producers</h3>');
    $('.producers').show(2000).removeClass('').addClass('');
    $('.singers, .remixers, .consultancy').fadeTo(1000, 0.5);
    
    // Condensed down !
    // $('.remixers').hide(2000);
    // $('.consultancy').hide(2000);


});

$('#btn-remixers').click(function(){
    $('#hero').removeClass().toggleClass('hero-remixers');
    $('.hero-text p').empty().append('<br><h3 class="focus-in-contract-bck" >Remixers</h3>');
    $('.remixers').show(2000).removeClass('').addClass('');
    $('.singers, .producers, .consultancy ').fadeTo(1000, 0.5);
    // Condensed down !
    // $('.producers').hide(2000);
    // $('.consultancy').hide(2000);


});

$('#btn-consultancy').click(function(){
    $('#hero').removeClass().toggleClass('hero-consultancy');
    $('.hero-text p').empty().append('<br><h3 class="focus-in-contract-bck">Consultancy</h3>');

    $('.consultancy').show(2000).removeClass('').addClass('');
    $('.singers, .producers, .remixers').hide();
    // Condensed down !
    // $('.producers').hide(2000);
    // $('.remixers').hide(2000);
    


});


$('#btn-map').click(function(){
    $('#map-toggle').toggle();
});

// Mouse fade events - changing hero section and more info display on cards

$('.singers').mouseenter(function(){
    $('#hero').removeClass().toggleClass('hero-singer');
    $('.hero-text p').empty().append('<br><h3 class="focus-in-contract-bck" >Singers</h3>');

});

$('.producers').mouseenter(function(){
    $('#hero').removeClass().toggleClass('hero-producers');
    $('.hero-text p').empty().append('<br><h3 class="focus-in-contract-bck" >Producers</h3>');
});

$('.remixers').mouseenter(function(){
    $('#hero').removeClass().toggleClass('hero-remixers');
$('.hero-text p').empty().append('<br><h3 class="focus-in-contract-bck" >Remixers</h3>');
});

$('.consultancy').mouseenter(function(){
    $('#hero').removeClass().toggleClass('hero-consultancy');
$('.hero-text p').empty().append('<br><h3 class="focus-in-contract-bck">Consultancy</h3>');
});

//mouse leave 

$('.singers').mouseleave(function(){
    $('#hero').removeClass().toggleClass('hero-hydra');
$('.hero-text p').empty()
});

$('.producers').mouseleave(function(){
    $('#hero').removeClass().toggleClass('hero-hydra');
$('.hero-text p').empty()
});

$('.remixers').mouseleave(function(){
    $('#hero').removeClass().toggleClass('hero-hydra');
$('.hero-text p').empty()
});

$('.consultancy').mouseleave(function(){
    $('#hero').removeClass().toggleClass('hero-hydra');
$('.hero-text p').empty()
});


});