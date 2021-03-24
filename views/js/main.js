const { shell } = require('electron');
window.jQuery = window.$ = require('jquery');

function urlopen(url) {
    shell.openExternal(url);
};

var sr = false;

function startup_sound_play() {
    return new Promise(resolve => {
        var audio = document.getElementById("startup_sound");
        audio.onended = resolve;
        audio.play();
    });
};

async function startup() {
    document.getElementById("loading").classList.add("loaded");
    await startup_sound_play();
};

$(async () => {
    startup();
    $(window).scroll(function () {
        $('.effect-fade').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight) {
                $(this).addClass('effect-scroll');
            }
        });
    });
});