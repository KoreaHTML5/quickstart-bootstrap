'use strict';

$(document).ready(function() {
    // initialize components
    $('[data-toggle="popover"]').popover({offset: 10});
    $('[data-toggle="tooltip"]').tooltip();
    $('#loading-example-btn').click(function () {
        var btn = $(this);
        btn.button('loading');
        setTimeout(function() {
          btn.button('reset');
        }, 400);
    });
});
