$('.btn-menu, .top-menu-hidden ul a').click(function () {
    if( $('.top-menu-hidden' ).is(':hidden')) {
        $('.top-menu-hidden').show();
    }else {
        $('.top-menu-hidden').hide();
    }
});