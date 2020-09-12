//Added in document.ready function to ensure that all html is loaded before these scripts run.
//Jquery
$(document).ready(function () {
  // Pill button click event to show and hide selections.

  $("#btn-all").click(function () {
    $("#hero").removeClass().addClass("hero-hydra");
    $(".hero-text p").empty();
    $(".singers, .producers, .remixers, .consultancy ").fadeTo(1000, 1);

    // Condensed down code to multiple selectors, keeping in below as evidence of previous code.
    // $('.producers').show();
    // $('.remixers').show();
    // $('.consultancy').show();
  });

  $("#btn-singers").click(function () {
    $("#hero").removeClass().toggleClass("hero-singer");
    $(".hero-text p")
      .empty()
      .append('<br><h3 class="focus-in-contract-bck" >Singers</h3>');
    $(".singers").fadeTo(1000, 1);
    $(".producers, .remixers, .consultancy").fadeTo(1000, 0.1);

    // Condensed down !
    // $('.remixers').hide(2000);
    // $('.consultancy').hide(2000);
  });

  $("#btn-producers").click(function () {
    $("#hero").removeClass().toggleClass("hero-producers");
    $(".hero-text p")
      .empty()
      .append('<br><h3 class="focus-in-contract-bck" >Producers</h3>');
    $(".producers").fadeTo(1000, 1);
    $(".singers, .remixers, .consultancy").fadeTo(1000, 0.1);

    // Condensed down !
    // $('.remixers').hide(2000);
    // $('.consultancy').hide(2000);
  });

  $("#btn-remixers").click(function () {
    $("#hero").removeClass().toggleClass("hero-remixers");
    $(".hero-text p")
      .empty()
      .append('<br><h3 class="focus-in-contract-bck" >Remixers</h3>');
    $(".remixers").fadeTo(1000, 1);
    $(".singers, .producers, .consultancy ").fadeTo(1000, 0.1);
    // Condensed down !
    // $('.producers').hide(2000);
    // $('.consultancy').hide(2000);
  });

  $("#btn-consultancy").click(function () {
    $("#hero").removeClass().toggleClass("hero-consultancy");
    $(".hero-text p")
      .empty()
      .append('<br><h3 class="focus-in-contract-bck">Consultancy</h3>');

    $(".consultancy").fadeTo(1000, 1);
    $(".singers, .producers, .remixers").fadeTo(1000, 0.1);
    // Condensed down !
    // $('.producers').hide(2000);
    // $('.remixers').hide(2000);
  });

  $("#btn-map").click(function () {
    $("#map").toggle(1000, 0);
  });

  // Mouse fade events - changing hero section and more info display on cards, going to test my knowledge, adding an active state to enable or disable mouse enter...wish me luck! better commit lol!

  $(".singers").hover(function () {
    $("#hero").removeClass().toggleClass("hero-singer");
    $(".hero-text p")
      .empty()
      .append('<br><h3 class="focus-in-contract-bck" >Singers</h3>');
  });

  $(".producers").hover(function () {
    $("#hero").removeClass().toggleClass("hero-producers");
    $(".hero-text p")
      .empty()
      .append('<br><h3 class="focus-in-contract-bck" >Producers</h3>');
  });

  $(".remixers").hover(function () {
    $("#hero").removeClass().toggleClass("hero-remixers");
    $(".hero-text p")
      .empty()
      .append('<br><h3 class="focus-in-contract-bck" >Remixers</h3>');
  });

  $(".consultancy").hover(function () {
    $("#hero").removeClass().toggleClass("hero-consultancy");
    $(".hero-text p")
      .empty()
      .append('<br><h3 class="focus-in-contract-bck">Consultancy</h3>');
  });

  // //mouse leave

  // $('.singers').mouseleave(function(){
  //     $('#hero').removeClass().toggleClass('hero-hydra');
  // $('.hero-text p').empty();

  // });

  // $('.producers').mouseleave(function(){
  //     $('#hero').removeClass().toggleClass('hero-hydra');
  // $('.hero-text p').empty()
  // });

  // $('.remixers').mouseleave(function(){
  //     $('#hero').removeClass().toggleClass('hero-hydra');
  // $('.hero-text p').empty()
  // });

  // $('.consultancy').mouseleave(function(){
  //     $('#hero').removeClass().toggleClass('hero-hydra');
  // $('.hero-text p').empty()
  // });
});
