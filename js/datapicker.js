$( function() {
    $( ".datepicker-input" ).datepicker({
        prevText: "<",
        nextText: ">",
        showAnim: "slideDown",
        beforeShow: function() {
          $('.ui-datepicker').blur();
        setTimeout(function(){
            $('.ui-datepicker').css('z-index', 99999999999999);
        }, 0);
    }

    });
    $(".datepicker-input").attr('readonly','readonly');
  } );
