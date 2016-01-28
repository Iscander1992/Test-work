$(function(){

    /**
     *  Слайдер
     * */
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });


    /**
     *  Модальное окно
     * **/
    var div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    var scrollWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);

    var body = $("body");
    var modal = $("#modal");
    var modalWindow = $("#modal-window");
    $("#modal-button").on("click", function(){
        body.addClass("overflow").css({"padding-right":scrollWidth});
        modal.addClass("opacity");
        modalWindow.delay(300).animate({"top":"0px", "opacity":"1"},300);
    });

    $("#close-modal").on("click", function(){
        modalWindow.animate({"top":"-50px", "opacity":"0"},300);

        setTimeout(function(){
            modal.removeClass("opacity");
            body.removeClass("overflow").css({"padding-right":""});
        }, 300)
    });

    /**
     *  Якоря
     * **/

    $('.header-links__link').on("click" ,function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 700);
        return false;
    });
});