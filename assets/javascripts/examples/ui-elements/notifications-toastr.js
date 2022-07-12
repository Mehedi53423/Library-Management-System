$(function () {
    "use strict";

    var i = -1;
    var toastCount = 0;
    var $toastlast;

    var getMessage = function () {
            var msgs = ['toastr is a Javascript library for non-blocking notifications',
                'John Papa, Tim Ferrell & Hans Fjällemark, are the creators',
                'Incredible!',
                'Try again!',
                'One more time!'
        ];
        i++;
        if (i === msgs.length) {
            i = 0;
        }

        return msgs[i];
    };

    var getMessageWithClearButton = function (msg) {
        msg = msg ? msg : 'Click button to close';
        msg += '<br /><br /><button type="button" class="btn btn-danger clear">Close</button>';
        return msg;
    };

    $('#closeButton').on('click',function() {
        if($(this).is(':checked')) {
            $('#addBehaviorOnToastCloseClick').prop('disabled', false);
        } else {
            $('#addBehaviorOnToastCloseClick').prop('disabled', true);
            $('#addBehaviorOnToastCloseClick').prop('checked', false);
        }
    });

    $('#showtoast').on('click',function () {
        var shortCutFunction = $("#toastTypeGroup input:radio:checked").val();
        var msg = $('#message').val();
        var title = $('#title').val() || '';
        var $showDuration = $('#showDuration');
        var $hideDuration = $('#hideDuration');
        var $timeOut = $('#timeOut');
        var $extendedTimeOut = $('#extendedTimeOut');
        var $showEasing = $('#showEasing');
        var $hideEasing = $('#hideEasing');
        var $showMethod = $('#showMethod');
        var $hideMethod = $('#hideMethod');
        var toastIndex = toastCount++;
        var addClear = $('#addClear').prop('checked');

        toastr.options = {
            closeButton: $('#closeButton').prop('checked'),
            debug: $('#debugInfo').prop('checked'),
            newestOnTop: $('#newestOnTop').prop('checked'),
            progressBar: $('#progressBar').prop('checked'),
            rtl: $('#rtl').prop('checked'),
            positionClass: $('#positionGroup input:radio:checked').val() || 'toast-top-right',
            preventDuplicates: $('#preventDuplicates').prop('checked'),
            onclick: null
        };

        if ($('#addBehaviorOnToastClick').prop('checked')) {
            toastr.options.onclick = function () {
                alert('You can perform some custom action after a toast goes away');
            };
        }

        if ($('#addBehaviorOnToastCloseClick').prop('checked')) {
            toastr.options.onCloseClick = function () {
                alert('You can perform some custom action when the close button is clicked');
            };
        }

        if ($showDuration.val().length) {
            toastr.options.showDuration = parseInt($showDuration.val());
        }

        if ($hideDuration.val().length) {
            toastr.options.hideDuration = parseInt($hideDuration.val());
        }

        if ($timeOut.val().length) {
            toastr.options.timeOut = addClear ? 0 : parseInt($timeOut.val());
        }

        if ($extendedTimeOut.val().length) {
            toastr.options.extendedTimeOut = addClear ? 0 : parseInt($extendedTimeOut.val());
        }

        if ($showEasing.val().length) {
            toastr.options.showEasing = $showEasing.val();
        }

        if ($hideEasing.val().length) {
            toastr.options.hideEasing = $hideEasing.val();
        }

        if ($showMethod.val().length) {
            toastr.options.showMethod = $showMethod.val();
        }

        if ($hideMethod.val().length) {
            toastr.options.hideMethod = $hideMethod.val();
        }

        if (addClear) {
            msg = getMessageWithClearButton(msg);
            toastr.options.tapToDismiss = false;
        }
        if (!msg) {
            msg = getMessage();
        }

        $('#toastrOptions').text('Command: toastr["'
            + shortCutFunction
            + '"]("'
            + msg
            + (title ? '", "' + title : '')
            + '")\n\ntoastr.options = '
            + JSON.stringify(toastr.options, null, 2)
        );

        var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
        $toastlast = $toast;

        if(typeof $toast === 'undefined'){
            return;
        }

        if ($toast.find('#okBtn').length) {
            $toast.delegate('#okBtn', 'click', function () {
                alert('you clicked me. i was toast #' + toastIndex + '. goodbye!');
                $toast.remove();
            });
        }
        if ($toast.find('#surpriseBtn').length) {
            $toast.delegate('#surpriseBtn', 'click', function () {
                alert('Surprise! you clicked me. i was toast #' + toastIndex + '. You could perform an action here.');
            });
        }
        if ($toast.find('.clear').length) {
            $toast.delegate('.clear', 'click', function () {
                toastr.clear($toast, { force: true });
            });
        }
    });

    function getLastToast(){
        return $toastlast;
    }
    $('#clearlasttoast').on('click',function () {
        toastr.clear(getLastToast());
    });
    $('#cleartoasts').on('click',function () {
        toastr.clear();
    });
})
