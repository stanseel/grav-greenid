$( document ).ready(function() {
  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
  });

  $(window).on('load, resize', function mobileViewUpdate() {
      var viewportWidth = $(window).width();
      if (viewportWidth < 768) {
            $("#wrapper").removeClass("toggled");
      }else{
            $("#wrapper").addClass("toggled");
      }
  });

  $('.accordeon').click(function () {
       $(this).children('span').toggleClass('plus min');
       $(this).parent().siblings().children('h2').children('span').removeClass('min').addClass('plus');
       $(this).next('div').slideToggle();
       $(this).parent().siblings().children().next().slideUp();
       return false;
   });



});

/*onclick="clickChapter('item1')"*/
