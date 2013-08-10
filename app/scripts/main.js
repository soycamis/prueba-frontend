$(document).ready(function() {
    'use strict';

    // Slider
    $('.flexslider').flexslider({
        animation: 'slide',
        controlNav: false
    });

    // Menu
    function mostrarMenu () {
        $('#menu').slideToggle('slow');
    }
    $('.icon-menu').on('click', mostrarMenu);
});