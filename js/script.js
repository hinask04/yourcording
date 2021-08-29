// JavaScript Document
jQuery.noConflict();
jQuery(function(){
    jQuery("dd").hide();
    jQuery("dt").click(function(){
       jQuery(this).next("dd").slideToggle("slow"); 
    });
    jQuery(".humberger").click(function(){
        jQuery(this).toggleClass("close");
    });
		jQuery("a[href^='#']").on('click',function(){
			var speed = 500;
			var href=jQuery(this).attr("href");
			var target = jQuery(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top - jQuery(".header_inner").outerHeight();
			jQuery("html, body").animate({scrollTop:position}, speed, "swing");
    });
});
