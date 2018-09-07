var arrLang = {
    'en': {
        'home': 'Home',
        'tours': 'tours',
    },
    'vn': {
        'home': 'trang chủ',
        'tours': 'du lịch'
    }
};
$(function () {
    $('.translate').click(function () {
        var lang = $(this).attr('id');

        $('.lang').each(function (index, element) {
            $(this).text(arrLang[lang][$(this).attr('key')])
        });
    });
});
