//=======Dynamic settings applying

//trigger for Sales Text
var switchStatus = false;
$("#salesText").on('change', function() {
    if ($(this).is(':checked')) {
        switchStatus = $(this).is(':checked');
//        alert(switchStatus);// To verify
        $('.delay').attr('style', "display:block");
    }
    else {
       switchStatus = $(this).is(':checked');//
        var stat = $('.delay').attr('style', "display:none");
//        console.log(stat);
    }
});

//Change background img
$(".custom-select").on('change', function() {
    var backgroundNum = $(this).val()
    var url      = window.location.href;
    //get absolute url
    url = url.split(/(.+\/).+\.html$/)[1];
    console.log(url);

    var imgName = "url("+url+"images/bg-"+backgroundNum+".jpg)"
    $('body').attr('style', 'background-image:'+imgName);

});

//trigger for Autoplay
var switchAutoplay = false;
$("#autoplay").on('change', function() {
    if ($(this).is(':checked')) {
        switchStatus = $(this).is(':checked');
//        $(".video")[0].play();
        $('.video')[0].autoplay = true;
//        $('.video').attr('autoplay', true);
    }
    else {
       switchStatus = $(this).is(':checked');//
        var stat = $('.video').attr('autoplay', false);
//        console.log(stat);
    }
});
//======= END Dynamic settings applying

//============= Get parameters from url ====//
//alert(location.search);
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

    var background = getUrlVars()["background"];
    var autoplay = getUrlVars()["autoplay"];
    var buyButton = getUrlVars()["buyButton"];
    var salesText = getUrlVars()["salesText"];
    var exitPop = getUrlVars()["exitPop"];
//    console.log(background);
//    console.log(autoplay);
//    console.log(buyButton);
//    console.log(salesText);
//    console.log(exitPop);
if(background){
    var imgName = "url(../images/bg-"+background+".jpg)"
    $('body').attr('style', 'background-image:'+imgName);

}
if(autoplay){
   $('.video')[0].autoplay = true;
}
if(buyButton){
   $('.sales_text').attr('style', "display:block");
}
if(salesText){
   $('.delay').attr('style', "display:block");
}
if(exitPop){
   $('.exit_pop').attr('style', "display:block");
}