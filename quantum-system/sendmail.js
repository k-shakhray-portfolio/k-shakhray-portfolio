$(document).ready(function () {

    console.log($(location).attr('href').toString().includes('localhost'))

    $('#form_1').submit(function (e) {

        e.preventDefault();

        $('#button-submit').attr('disabled', true);

        if ($(location).attr('href').toString().includes('github'))
        {
            $('#button-submit').html('На github не работает php, тестил на Denwer');
        }
        else if ($(location).attr('href').toString().includes('localhost'))
        {
            $('#button-submit').html('Локально не работает, тестил на Denwer');
        }

        else
            {

        if (
            $.ajax({
                type: $(this).attr('method'),
                url: $(this).attr('action'),
                data: new FormData(this),
                contentType: false,
                processData: false,
                cache: false,
                success: function (res) {
                    console.log(res);
                }
            })
        ) {
            $('#name').hide();
            $('.name').hide();
            $('#email').hide();
            $('.email').hide();
            $('#button-submit').html('Заявка отправлена!');
        } else {
                $('#button-submit').attr('disabled', false);
                $('#button-submit').html('Что-то пошло не так, попробуйте ещё раз');
            }

        }

    })

})