$(document).ready(function(){
    // Set the interval to be 5 seconds
    var t = setInterval(function(){
        $("#carousel ul").animate({marginLeft:-1920},1000,function(){
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({marginLeft:0});
        })
    },5000);
    //when user clicks the image for sliding right  
    $('#right_scroll img').click(function(){
            $("#carousel ul").animate({marginLeft:1920},1000,function(){
                $(this).find("li:first").before($(this).find("li:last"));
                $(this).css({marginLeft:0});
            })
    });  
    $('#left_scroll img').click(function(){
            $("#carousel ul").animate({marginLeft:-1920},1000,function(){
                $(this).find("li:last").after($(this).find("li:first"));
                $(this).css({marginLeft:0});
            })
    }); 
});

var secondaryNav = $('.not_scrolled'),
    secondaryNavTopPosition = secondaryNav.offset().top;
 
$(window).on('scroll', function(){
    if($(window).scrollTop() > secondaryNavTopPosition ) {
        secondaryNav.addClass('scrolled').removeClass('not_scrolled');  
        $('.li_not_scrolled').addClass('li_scrolled').removeClass('li_not_scrolled');
    } else {
        secondaryNav.removeClass('scrolled').addClass('not_scrolled');
        $('.li_scrolled').addClass('li_not_scrolled').removeClass('li_scrolled');
    }
    if($(window).scrollTop() >= $('#video').offset().top && $(window).scrollTop() < $('#carousel').offset().top) {
        $('#video_nav').addClass('selected').removeClass('not_selected');
        $('#carousel_nav').addClass('not_selected').removeClass('selected');
    }
    if($(window).scrollTop() >= $('#carousel').offset().top) {
        $('#video_nav').addClass('not_selected').removeClass('selected');
        $('#carousel_nav').addClass('selected').removeClass('not_selected');
    }
});

$('a').click(function() {
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

$('.modal').click(function() {
    var dialog = document.getElementById('dialog');
    dialog.showModal();

});

$('#close').click(function() {
    var dialog = document.getElementById('dialog');
    dialog.close();

});