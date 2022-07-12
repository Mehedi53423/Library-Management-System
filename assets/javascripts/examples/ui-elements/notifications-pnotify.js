$(function () {
    "use strict";

    PNotify.prototype.options.styling = "fontawesome";

    //BASIC NOTIFICATIONS
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    $('#pnotify-basic-success').on('click',function () {
        new PNotify({
            title: 'Success',
            text: 'Good everything went well!',
            type: 'success'
        });
    });
    $('#pnotify-basic-warning').on('click',function () {
        new PNotify({
            title: 'Warning',
            text: 'Better check again!',
            type: 'warning',
            icon: 'fa fa-exclamation'

        });
    });
    $('#pnotify-basic-error').on('click',function () {
        new PNotify({
            title: 'Error',
            text: 'A problem has occurred!',
            type: 'error'

        });
    });
    $('#pnotify-basic-info').on('click',function () {
        new PNotify({
            title: 'Note',
            text: 'Please read this message!',
            type: 'info'

        });
    });
    $('#pnotify-basic-primary').on('click',function () {
        new PNotify({
            title: 'Primary',
            text: 'I\'m a primary color notice!',
            type: 'custom',
            addclass: 'pnotify-primary',
            icon: "fa fa-user"
        });
    });
    $('#pnotify-basic-dark').on('click',function () {
        new PNotify({
            title: 'Dark',
            text: 'I\'m a Dark notice!',
            type: 'custom',
            addclass: 'pnotify-dark',
            icon: "fa fa-shield"
        });
    });
    $('#pnotify-basic-light').on('click',function () {
        new PNotify({
            title: 'Light',
            text: 'I\'m a Light notice!',
            type: 'custom',
            addclass: 'pnotify-light',
            icon: "fa fa-bell"
        });
    });

    //POSITIONS of the NOTIFICATIONS
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    var stack_topleft = {"dir1": "down", "dir2": "right", "push": "bottom"};
    var stack_bottomright = {"dir1": "up", "dir2": "left", "firstpos1": 15, "firstpos2": 15};
    var stack_bottomleft = {"dir1": "up", "dir2": "right", "push": "bottom"};


    $('#pnotify-position-topLeft').on('click',function () {
        new PNotify({
            title: 'Success',
            text: 'Good everything went well!',
            type: 'success',
            addclass: 'stack-topleft',
            stack: stack_topleft
        });
    });
    $('#pnotify-position-topRight').on('click',function () {
        new PNotify({
            title: 'Warning',
            text: 'Better check again!',
            type: 'warning',
            icon: 'fa fa-exclamation'
        });
    });
    $('#pnotify-position-bottomRight').on('click',function () {
        new PNotify({
            title: 'Error',
            text: 'A problem has occurred!',
            type: 'error',
            addclass: 'stack-bottomright',
            stack: stack_bottomright
        });
    });

    $('#pnotify-position-bottomLeft').on('click',function () {
        new PNotify({
            title: 'Note',
            text: 'Please read this message!',
            type: 'info',
            addclass: 'stack-bottomleft',
            stack: stack_bottomleft
        });
    });

    //STYLE NOTIFICATIONS
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    $('#pnotify-style-withouticon').on('click',function () {
        new PNotify({
            title: 'Without Icon',
            text: 'I\'m a notice without icon!',
            type: 'success',
            addclass: 'pnotify-no-icon',
            icon: false
        });
    });
    $('#pnotify-style-sharp').on('click',function () {
        new PNotify({
            title: 'Without border-radius',
            text: 'My borders are sharp!',
            type: 'warning',
            icon: 'fa fa-exclamation',
            cornerclass: 'pnotify-sharp'

        });
    });
    $('#pnotify-style-withoutshadow').on('click',function () {
        new PNotify({
            title: 'Without shadow',
            text: 'I don\'t have a shadow!',
            type: 'error',
            shadow: false

        });
    });

    //FEATURE NOTIFICATIONS
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    //Non-blocking notice
    $('#pnotify-feature-nonblocking').on('click',function () {
        new PNotify({
            title: 'Non-Blocking Notice',
            text: 'I\'m a special kind of notice called "non-blocking". When you hover over me I\'ll fade to show the elements underneath. Feel free to click any of them just like I wasn\'t even here.\n\nNote: HTML links don\'t trigger in some browsers, due to security settings.',
            type: 'success',
            nonblock: {
                nonblock: true,
                nonblock_opacity: .2
            }
        });
    });
    //Sticky notice
    $('#pnotify-feature-sticky').on('click',function () {
        new PNotify({
            title: 'Sticky Notice',
            text: 'Check me out! I\'m a sticky notice. You\'ll have to close me yourself.',
            type: 'warning',
            icon: 'fa fa-exclamation',
            hide: false,
            buttons: {
                sticker: false
            }
        });
    });
    //Click to close
    $('#pnotify-feature-click').on('click',function () {
        var notice = new PNotify({
            title: 'Click to close',
            text: 'Click me anywhere to dismiss me.',
            type: 'error',
            hide: false,
            buttons: {
                closer: false,
                sticker: false
            }
        });
        notice.get().on('click',function () {
            notice.remove();
        });
    });

    //TOPBAR NOTIFICATIONS
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    var stack_bar_top = {"dir1": "down", "dir2": "right", "push": "top", "spacing1": 0, "spacing2": 0};

    $('#pnotify-topbar-success').on('click',function () {
        new PNotify({
            title: 'Topbar Success',
            text: 'I\'m a topbar success notice!',
            type: 'success',
            addclass: " stack-bar-top",
            cornerclass: "pnotify-sharp",
            width: "100%",
            stack: stack_bar_top

        });
    });
    $('#pnotify-topbar-error').on('click',function () {
        new PNotify({
            title: 'Topbar Error',
            text: 'I\'m a topbar error notice!',
            type: 'error',
            addclass: " stack-bar-top",
            cornerclass: "pnotify-sharp",
            width: "100%",
            stack: stack_bar_top

        });
    });
    $('#pnotify-topbar-primary').on('click',function () {
        new PNotify({
            title: 'Topbar Primary',
            text: 'I\'m a topbar primary color notice!',
            type: 'custom',
            addclass: "pnotify-primary stack-bar-top",
            icon: "fa fa-user",
            cornerclass: "pnotify-sharp",
            width: "100%",
            stack: stack_bar_top


        });
    });
    $('#pnotify-topbar-dark').on('click',function () {
        new PNotify({
            title: 'Topbar Dark',
            text: 'I\'m a topbar dark color notice!',
            type: 'custom',
            addclass: "pnotify-dark stack-bar-top",
            icon: "fa fa-shield",
            cornerclass: "pnotify-sharp",
            width: "100%",
            stack: stack_bar_top

        });
    });

    //BOTTOM BAR NOTIFICATIONS
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    var stack_bar_bottom = {"dir1": "up", "dir2": "right", "spacing1": 0, "spacing2": 0};

    $('#pnotify-bottombar-success').on('click',function () {
        new PNotify({
            title: 'Topbar Succes',
            text: 'I\'m a bottom bar success notice!',
            type: 'success',
            addclass: " stack-bar-bottom",
            cornerclass: "pnotify-sharp",
            width: "70%",
            stack: stack_bar_bottom

        });
    });
    $('#pnotify-bottombar-error').on('click',function () {
        new PNotify({
            title: 'Topbar Error',
            text: 'I\'m a bottom bar error notice!',
            type: 'error',
            addclass: " stack-bar-bottom",
            cornerclass: "pnotify-sharp",
            width: "70%",
            stack: stack_bar_bottom

        });
    });
    $('#pnotify-bottombar-primary').on('click',function () {
        new PNotify({
            title: 'Topbar Primary',
            text: 'I\'m a bottom bar primary color notice!',
            type: 'custom',
            addclass: "pnotify-primary stack-bar-bottom",
            icon: "fa fa-user",
            cornerclass: "pnotify-sharp",
            width: "70%",
            stack: stack_bar_bottom


        });
    });
    $('#pnotify-bottombar-dark').on('click',function () {
        new PNotify({
            title: 'Topbar Dark',
            text: 'I\'m a bottom bar dark color notice!',
            type: 'custom',
            addclass: "pnotify-dark stack-bar-bottom",
            icon: "fa fa-shield",
            cornerclass: "pnotify-sharp",
            width: "70%",
            stack: stack_bar_bottom

        });
    });

    //MODAL NOTIFICATIONS
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    var stack_modal = {'dir1': 'down', 'dir2': 'right', 'modal': true};

    $('#pnotify-modal-success').on('click',function () {
        new PNotify({
            title: 'Success Modal',
            text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores debitis exercitationem inventore modi molestiae numquam perspiciatis qui suscipit totam ut?',
            type: 'success',
            hide: false,
            cornerclass: 'pnotify-sharp',
            confirm: {
                confirm: true
            },
            buttons: {
                closer: false,
                sticker: false
            },
            history: {
                history: true
            },
            addclass: 'stack-modal',
            stack: stack_modal
        }).get().on('pnotify.confirm', function () {
                alert('Ok, cool.');
            });
    });

    $('#pnotify-modal-warning').on('click',function () {
        new PNotify({
            title: 'Warning Modal',
            text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores debitis exercitationem inventore modi molestiae numquam perspiciatis qui suscipit totam ut?',
            type: 'warning',
            icon: 'fa fa-exclamation',
            hide: false,
            cornerclass: 'pnotify-sharp',
            confirm: {
                confirm: true
            },
            buttons: {
                closer: false,
                sticker: false
            },
            history: {
                history: true
            },
            addclass: 'stack-modal',
            stack: stack_modal
        }).get().on('pnotify.confirm', function () {
                alert('Ok, cool.');
            });
    });
    $('#pnotify-modal-error').on('click',function () {
        new PNotify({
            title: 'Error Modal',
            text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores debitis exercitationem inventore modi molestiae numquam perspiciatis qui suscipit totam ut?',
            type: 'error',
            hide: false,
            cornerclass: 'pnotify-sharp',
            confirm: {
                confirm: true
            },
            buttons: {
                closer: false,
                sticker: false
            },
            history: {
                history: true
            },
            addclass: 'stack-modal',
            stack: stack_modal
        }).get().on('pnotify.confirm', function () {
                alert('Ok, cool.');
            });
    });
    $('#pnotify-modal-info').on('click',function () {
        new PNotify({
            title: 'Info Modal',
            text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores debitis exercitationem inventore modi molestiae numquam perspiciatis qui suscipit totam ut?',
            type: 'info',
            hide: false,
            cornerclass: 'pnotify-sharp',
            confirm: {
                confirm: true
            },
            buttons: {
                closer: false,
                sticker: false
            },
            history: {
                history: true
            },
            addclass: 'stack-modal',
            stack: stack_modal
        }).get().on('pnotify.confirm', function () {
                alert('Ok, cool.');
            });
    });
    $('#pnotify-modal-primary').on('click',function () {
        new PNotify({
            title: 'Primary Modal',
            text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores debitis exercitationem inventore modi molestiae numquam perspiciatis qui suscipit totam ut?',
            type: 'custom',
            icon: "fa fa-user",
            hide: false,
            cornerclass: 'pnotify-sharp',
            confirm: {
                confirm: true
            },
            buttons: {
                closer: false,
                sticker: false
            },
            history: {
                history: true
            },
            addclass: 'stack-modal pnotify-primary',
            stack: stack_modal
        }).get().on('pnotify.confirm', function () {
                alert('Ok, cool.');
            });
    });
    $('#pnotify-modal-dark').on('click',function () {
        new PNotify({
            title: 'Dark Modal',
            text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores debitis exercitationem inventore modi molestiae numquam perspiciatis qui suscipit totam ut?',
            type: 'custom',
            icon: "fa fa-shield",
            hide: false,
            cornerclass: 'pnotify-sharp',
            confirm: {
                confirm: true
            },
            buttons: {
                closer: false,
                sticker: false
            },
            history: {
                history: true
            },
            addclass: 'stack-modal pnotify-dark',
            stack: stack_modal
        }).get().on('pnotify.confirm', function () {
                alert('Ok, cool.');
            });
    });

})

