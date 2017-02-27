$(function () {
    smoothScroll(300, 30);
});

function smoothScroll (duration, top) {
    $('a[href^="#"]').on('click', function(event) {

        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - top
            }, duration);
        }
    });
}