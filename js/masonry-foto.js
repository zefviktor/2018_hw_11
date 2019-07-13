jQuery(document).ready(function($) {
    // init Masonry after all images have loaded
    $('.elements-gride').masonry({
        // options
        itemSelector: '.element-item',
        columnWidth: 399,
        isFitWidth: true
    });
});