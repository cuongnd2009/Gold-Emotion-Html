/**
 * 
 */
/*-- tablet + mobile menu--*/
$('#nav_res_btn').click(function () {
    if ($('body').hasClass('menu-push')) {
        $('body').removeClass('menu-push')
    } else {
        $('body').addClass('menu-push')
    }
});

$('.menu-right__close').click(function () {
    if ($('body').hasClass('menu-push')) {
        $('body').removeClass('menu-push')
    } else {
        $('body').addClass('menu-push')
    }
});




