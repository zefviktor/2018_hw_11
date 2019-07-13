jQuery(document).ready(function($) {
    // init Masonry after all images have loaded
    $('.posts-gride').masonry({
        // options
        itemSelector: '.post-item',
        columnWidth: 380,
        isFitWidth: true
    });
});