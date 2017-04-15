$( document ).ready(function() {

  var width = $(window).width(), height = $(window).height();

  function mobileNavStatus(){
    var checkClass = $("#wrapper").attr("class");
    //var pad = window.location.protocol + "//" + window.location.host + "/" + "green-id/grav/user/themes/greenid/images-iface";
    var pad = window.location.protocol + "//" + window.location.host + "/" + "~greenid/user/themes/greenid/images-iface";
    if(checkClass == "toggled"){
      $("#mobile-img").attr("src",pad+"/mobile-close.svg");
    }else{
      $("#mobile-img").attr("src",pad+"/mobile-open.svg");
    }
  }

  function mobileViewUpdate(){
    //var viewportWidth = $(window).width();
    //if (viewportWidth < 768) {

    if($('div#mobile').is(':visible')){
          $("#wrapper").removeClass("toggled");
    }else{
          $("#wrapper").addClass("toggled");
    }
  }

  mobileViewUpdate();

  $( window ).resize(function() {
    console.log("resized" + width + height);
    if($(window).width() != width || $(window).height() != height){
      console.log("newzize");
      mobileViewUpdate();
      mobileNavStatus();
  }
  });

  $("#mobile").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
      mobileNavStatus();
  });

  $('.accordeon').click(function () {
       $(this).children('span').toggleClass('plus min');
       $(this).parent().siblings().children('h2').children('span').removeClass('min').addClass('plus');
       $(this).next('div').slideToggle();
       $(this).parent().siblings().children().next('div').slideUp();
       return false;
   });



});
