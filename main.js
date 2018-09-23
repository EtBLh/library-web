
//scrolljacking
$(window).on('scroll', function() {
    //get the total height of whole page
    var totalY = $(document).height() - $(window).height() - $("#footer").height();
    //calculate the pecentage of scrolling progress
    var progress = window.scrollY / totalY;
    //get the target element
    var header = $('#header');
    //set the background-color value
    header.css('background-color',`rgba(0,0,0,${progress*2 > 0.85 ? 0.85:progress*2})`);
});