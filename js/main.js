$(function() {

    $('#comment-form').on("submit", function (event) {

        event.preventDefault();

        var $form = $(this);
        $form.find('.info').remove();

        $form.find('#comment-redirect').val('');

        var $submitBtn = $form.find('#comment-form-submit');
        // Disable to prevent multiple submit
        $submitBtn.attr('disabled', 'disabled');

        var type = $form.attr('method'),
        url = $form.attr('action'),
        data = $form.serialize(),
        contentType = 'application/x-www-form-urlencoded';

        $submitBtn.html('Posting comment, please wait...');

        $.ajax({
            type: type,
            url: url,
            data: data,
            contentType: contentType,
            success: function (data) {
                $form.find('textarea').val('');
                $form.append('<div class="info info-success">Thanks for your comment! It will appear <a href="https://github.com/ratibus/ratibus.github.io/pulls?q=is%3Apr+author%3Astaticmanapp" target="_blank">once validated</a>.</div>');
            },
            error: function (err) {
                $form.append('<div class="info info-error">Error while posting your comment :( Contact me on Twitter.</div>');
            },
            complete: function () {
                grecaptcha.reset();
                $submitBtn.attr('disabled', null);
                $submitBtn.html('Add my comment');
            }
        });
    });

});