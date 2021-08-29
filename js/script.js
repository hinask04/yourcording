// JavaScript Document
jQuery.noConflict();
jQuery(function(){
    jQuery("dd").hide();
    jQuery("dt").click(function(){
       jQuery(this).next("dd").slideToggle("slow"); 
    });
    jQuery(".humberger").click(function(){
        jQuery(this).toggleClass("close");
    })
});