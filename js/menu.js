const menuBtn = $('.header__menu-btn');
const menu = $('.header__navigation');

const handleMenu = function() {
    menu.toggleClass('header__navigation--open');
};

menuBtn.on('click', handleMenu);