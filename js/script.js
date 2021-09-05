// JavaScript Document
jQuery.noConflict();
jQuery(function(){
    jQuery("dd:not(:first)").hide();
    jQuery("dt").click(function(){
       jQuery(this).next("dd").slideToggle("slow"); 
    });
    
    jQuery(".humberger").click(function(){
        jQuery(this).toggleClass("close");
        jQuery(".header_inner nav").fadeToggle();
    });
    
    jQuery("a[href^='#']:not('.no_scroll')").on('click',function(){
        var speed = 500;
        var href=jQuery(this).attr("href");
        var target = jQuery(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - jQuery(".header_inner").outerHeight();
        jQuery("html, body").animate({scrollTop:position}, speed, "swing");
        if(href == "#header"){
            jQuery("html, body").animate({scrollTop: 0}, speed, "swing");
        }
        if(jQuery(window).width() <= 768){
            jQuery(".header_inner nav").fadeOut();
            jQuery(".humberger").removeClass("close");
        }
    });
    jQuery("a[href='#header']").on('click',function(){
        var speed = 500;
        jQuery("html, body").animate({scrollTop: 0}, speed, "swing");
    });
    
    jQuery('#js_submit').prop("disabled", true);
    jQuery('form input:required,form textarea:required').on('change', function () {
      if (
        jQuery('form input[type="text"]').val() !== "" &&
        jQuery('form input[type="email"]').val() !== "" &&
        jQuery('form textarea').val() !== ""  &&
        jQuery('form input[type="checkbox"]').val() !== "" &&
        jQuery('#agree').prop('checked') === true
      ) {
        jQuery('#js_submit').prop('disabled', false);
      } else {
        jQuery('#js_submit').prop('disabled', true);
        }
    });
});
