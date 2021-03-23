// Highlight the top nav as scrolling occurs, set offset if you need override top position
$('body').scrollspy({
    target: '.navbar-fixed-top', offset: 70
});

/* Click event on anchor items and use jQuery easing plugin for smooth scrolling */
$('a.page-scroll').bind('click', function(event) {
    var anchor = $(this);
    
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 50
    }, 1500, 'easeInOutExpo');
    
    // disable default click behaviour
    event.preventDefault();
});