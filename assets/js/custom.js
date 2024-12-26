$(document).ready(function(){
    $('.qa-question').on('click', function() {
        if($(this).hasClass('active')) {
            $(this).parent().removeClass('expand');
            $(this).next().slideUp();
            $(this).removeClass('active');
        } else {
            $('.list-qa li').removeClass('expand');
            $('.qa-answer').slideUp();
            $('.qa-question').removeClass('active');
            $(this).parent().addClass('expand');
            $(this).next().slideDown();
            $(this).addClass('active');
        }
    })
  });