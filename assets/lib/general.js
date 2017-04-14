$(function() {
    /* ==============================================
       Smooth Scroll
    =============================================== */
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });

    /* ==============================================
       Add id on Item 
    =============================================== */
    var idCount = 1;
    $('.search-result .col-3 a').each(function() {
       $(this).attr('id', 'item' + idCount);
       idCount++;
    });

    /* ==============================================
       Modal Popup
    =============================================== */

    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open'); 
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);        
        $('body').addClass('modal-open');
        e.preventDefault();
    });
 
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);        
        $('body').removeClass('modal-open');
        e.preventDefault();
    });

    
}(jQuery)); 