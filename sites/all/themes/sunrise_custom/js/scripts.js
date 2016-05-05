jQuery(document).ready(function($) {
    $('#js-button, #js-button2').click(function(){
        alert('BANANA SHAAAAARK!');
    });

    $('#js-button2, #js-button').hover(function(){
        $(this).addClass("hover");
    }, function(){
        $(this).removeClass("hover");
    }
    );
});
