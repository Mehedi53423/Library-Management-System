
$(function () {

    "use strict";

    //TOASTR NOTIFICATION
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    toastr.options = {
    "progressBar": true,
    "positionClass": "toast-bottom-right",
    "timeOut": 3500,
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "slideDown",
    "hideMethod": "fadeOut"
    };

    toastr.info('Enjoy it!', '<h5 style="margin-top: 0px; margin-bottom: 5px;"><b>This is Helsinki Template!</b></h5>');

    //AREA CHART EXAMPLE
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    var area = document.getElementById("area-chart");

    var options ={
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    };
    var dataArea = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                label: "Data 1",
                fill: true,
                backgroundColor: "rgba(55, 209, 119, 0.45)",
                borderColor: "rgba(55, 209, 119, 0.45)",
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointHoverBackgroundColor: "343d3e",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                data: [12, 13, 11, 6, 9, 12]
            },
            {
                label: "Data 2",
                fill: true,
                backgroundColor: "rgba(175, 175, 175, 0.26)",
                borderColor: "rgba(175, 175, 175, 0.26)",
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointHoverBackgroundColor: "#343d3e",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                data: [14, 6, 9, 13, 12, 16],
            }
        ],
        options: {
            scales: {
                yAxes: [{
                    stacked: true
                }]
            }
        }
    };

    var areaChart = new Chart(area, {
        type: 'line',
        data: dataArea,
        options: options

    });

    //PIE  & POLAR CHART EXAMPLE
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    var pie = document.getElementById("pie-chart");

    var dataPie = {
        labels: [
            "Data 1",
            "Data 2",
            "Data 3"
        ],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "rgba(55, 209, 119, 0.45)",
                    "#FFCE56",
                    "rgba(175, 175, 175, 0.26)"
                ],
                hoverBackgroundColor: [
                    "rgba(55, 209, 119, 0.6)",
                    "#FFCE56",
                    "rgba(175, 175, 175, 0.4)"
                ]
            }]
    };


    var pieChar = new Chart(pie, {
        type: 'pie',
        data: dataPie

    });


    //MAGNIFIC POPUP GALLERY
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    $('.gallery-wrap').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-with-zoom',
        zoom: {
            enabled: true,
            duration: 300
        }
    });

});