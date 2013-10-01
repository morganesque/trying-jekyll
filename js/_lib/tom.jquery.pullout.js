/*! Tom's special pullout plugin created especially for the Woundlife project */
(function( $ ) {
  $.fn.pullout = function( options ) {
  
        // grab the .main we're going to show.
        var main = $(this);
        var tab = main.find('.tab');
        var icon = tab.find('.icon');
        var label = tab.find("p");

        var dc = -1 * (main.width()+50); 
        var dt = -1 * (tab.width()-50);
    
        // create an animation which will initially hide the main.
        var tl = new TimelineMax({onComplete:function()
        {
            icon.addClass('icon-left').removeClass('icon-close');
        }, onReverseComplete:function()
        {
            icon.addClass('icon-close').removeClass('icon-left'); 
        }});
        // tl.to(main, 0.5, {css:{autoAlpha:0, scale:0.5}, ease:Power4.easeInOut});
        tl.to(main, 1, {css:{'right':dc}, ease:Power4.easeInOut});
        tl.to(tab, 1, {css:{'left':dt}, ease:Power4.easeInOut},-0.7);
        tl.progress(1);
    
        // toggle the animated forwards or backwards which the tab is clicked. 
        tab.click(function(e)
        {
            e.preventDefault();            
            if (main.hasClass('showing'))
            {
                label.show();
                tl.play();
                main.removeClass('showing');
            } else {
                label.hide();
                tl.reverse();
                main.addClass('showing');
                $('.pullout').css({'z-index':0});
                main.css({'z-index':1});         // make sure the main is now in front.
            }
        });

  };
})( jQuery );