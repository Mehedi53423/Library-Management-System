
$(function () {

    "use strict";

    $('#btn-options').on('click',function(e){
        var button = $(this);
        button.loadingButton({icon:'fa fa-circle-o-notch', text:'charging'});
        setTimeout(function () {
            button.loadingButton({action:'stop'});
        }, 2000);
    });

  $('.btn-loading').on('click',function(e){
        var button = $(this);
        button.loadingButton();
        setTimeout(function () {
            button.loadingButton({action:'stop'});
        }, 2000);
    });



});

