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