var tom = ( function()
{    
    return { // start of return
        
        waitForFinalEvent : ( function() 
        {
            var timers = {};
            return function (callback, ms, uniqueId) 
            {
                // must always include a unique ID.
                if (!uniqueId) uniqueId = "Don't call this twice without a uniqueId";
                // always clear it before setting it.
                if (timers[uniqueId]) clearTimeout (timers[uniqueId]);
                // set a new timer to trigger your resize function.
                timers[uniqueId] = setTimeout(callback, ms);
            };
        })()
        
        // this is how you call the above.
        // $(window).resize(function () 
        // {
        //     tom.waitForFinalEvent(function()
        //     {
        //       alert('Resize...');
        //       //...
        //     }, 500, "some unique string");
        // });
        
    }; // end of return.
}());