// SLICK PLUGIN

$(document).ready(function(){
    $('.main-reviews-content').slick({
        dots: true
    });
});

//SERVICES-SECTION TABS SCRIPT

$('.services-tabs-item').on('click', function () {
    let currentTab = $(this).attr('data-tab');
    let accordContent = $('.services-tabs-content-item[data-tab="'+ currentTab +'"]');

    if(!($(this).hasClass('current-tab'))) {
        $('.services-tabs-item.current-tab').removeClass('current-tab');
        $(this).addClass('current-tab');

        $('.services-tabs-content-item.current-content').removeClass('current-content');
        accordContent.addClass('current-content');
    }
});


//WORKS-SAMPLES-SECTION TABS SCRIPT

$('.works-sample-tabs-item').on('click', function () {
    // console.log(1);
    let activeTab = $(this).attr('data-tab');
    if (activeTab === 'all') {
        if (loadHasDone) {
            $('.works-samples-tabs-content').css('height', '1236px');
        }
        else {
            $('.works-samples-tabs-content').css('height', '618px');
        }
        $('.works-sample-tabs-item.active-tab').removeClass('active-tab');
        $(this).addClass('active-tab');

        $('.samples-tabs-img').each( function () {
            if (!($(this).hasClass('active-content'))){
                $(this).addClass('active-content');
            }
        });
    }

    else {
        $('.works-samples-tabs-content').css('height', 'initial');
        let activeContent = $('.samples-tabs-img[data-tab="' + activeTab + '"]');
        // console.log(activeContent);
        $('.works-sample-tabs-item.active-tab').removeClass('active-tab');
        $(this).addClass('active-tab');

        $('.samples-tabs-img.active-content').removeClass('active-content');
        activeContent.each( function () {
            $(this).addClass('active-content');
        })
    }
});

//WORKS-SAMPLES-SECTION LOADER SCRIPT

let loadHasDone = false;

$('.samples-tabs-img-loader-button').click(function () {
    this.remove();
    $('.main-works-samples-tabs').append(
        '<div id="floatingCirclesG">\n' +
        '\t<div class="f_circleG" id="frotateG_01"></div>\n' +
        '\t<div class="f_circleG" id="frotateG_02"></div>\n' +
        '\t<div class="f_circleG" id="frotateG_03"></div>\n' +
        '\t<div class="f_circleG" id="frotateG_04"></div>\n' +
        '\t<div class="f_circleG" id="frotateG_05"></div>\n' +
        '\t<div class="f_circleG" id="frotateG_06"></div>\n' +
        '\t<div class="f_circleG" id="frotateG_07"></div>\n' +
        '\t<div class="f_circleG" id="frotateG_08"></div>\n' +
        '</div>'
    );
    setTimeout(() =>  {
        $('#floatingCirclesG').remove();
        if (loadHasDone) {
            $('.works-samples-tabs-content').css('height', '1854px');
        }
        else {
            $('.works-samples-tabs-content').css('height', '1236px');
            $('.main-works-samples-tabs').append(this);
            loadHasDone = true;
        }
    }, 3000);
});


//FOOTER COPYRIGHT DATE

let copyrightDate = new Date().getFullYear();

const footerCopyrightDate = $('#copyright-current-date');

footerCopyrightDate.text(copyrightDate.toString());
