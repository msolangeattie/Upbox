$(window).load(function() {
    // Slide
    $('.templatemo-slide-link').click(function() {
        var this_href = $(this).attr('href');
        $('#templatemo-slide-link-target img').attr('src', this_href);
        return false;
    });
    // End Slide
});