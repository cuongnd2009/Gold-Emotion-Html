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

/*-- chat__bottom--*/
$('.chat-floating-actions').click(function () {
    if ($('.chat-floating-actions').hasClass('active')) {
        $('.chat-floating-actions').removeClass('active')
    } else {
        $('.chat-floating-actions').addClass('active')
    }
});


