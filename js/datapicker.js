$( function() {
    $( ".datepicker-input" ).datepicker({
        prevText: "<",
        nextText: ">",
        showAnim: "slideDown",
        beforeShow: function() {
        setTimeout(function(){
            $('.ui-datepicker').css('z-index', 99999999999999);
        }, 0);
    }

    });

  } );
