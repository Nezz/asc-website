$(document).ready(function(){
   // cache the window object
   $window = $(window);
 
   $('section[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);
                     
      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards                            
        var yPos = -($window.scrollTop() / 2);
         
        // background position
        var coords = '50% '+ yPos + 'px';
 
        // move the background
        $scroll.css({ backgroundPosition: coords });   
      });
   });
});

/* Create HTML5 element for IE */
document.createElement("section");

$(window).load(function(){
	$('#prototypeframe').html('<iframe width="396" height="834" src="http://invis.io/2SV4NV75" frameborder="0" allowfullscreen>');
});