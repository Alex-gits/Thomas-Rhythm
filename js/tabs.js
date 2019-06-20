(function() {
    const tabLink = $('.tab-menu__btn');
    const tabItem = $('.tabs__item');

    const tabsHandler = function(event) {
        event.preventDefault();
        const targetItem = $(this).attr('href');
        tabItem.removeClass('tabs__item--active');

        $(targetItem).addClass('tabs__item--active');
    }

    tabLink.on('click', tabsHandler);
})(jQuery);