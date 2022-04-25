$('.destaque').owlCarousel({
    loop: true,
    margin: 5,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

$('.top').owlCarousel({
    loop: false,
    margin: 15,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

var vid = document.getElementById("trailer");

$(window).scroll(function () {
    $('header .container').toggleClass('scrolled', $(this).scrollTop() > 50);

});

function mute() {
    vid.muted = true;
    $('.fa-solid.fa-volume-high').hide();
    $('.fa-solid.fa-volume-xmark').show();
}
function som() {
    vid.muted = false;
    $('.fa-solid.fa-volume-high').show();
    $('.fa-solid.fa-volume-xmark').hide();
}
function video() {
    $('.filme-destaque .titulo').hide();
    $('.filme-destaque .descricao').hide();
    $('.botao.play').hide();
    $('.botao.inf').hide();
    $('#control-video').show();


    vid.play();
    vid.volume = 0.5;
}
function videoPause() {
    $('.filme-destaque .titulo').show();
    $('.filme-destaque .descricao').show();
    $('.botao.play').show();
    $('.botao.inf').show();
    $('#control-video').hide();
    vid.pause();
}
$(window).scroll(function () {
    vid.play();
    vid.volume = 0.5;
});