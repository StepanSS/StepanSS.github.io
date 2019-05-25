//=======Dynamic settings applying
var link2 = 'http://8xfemaleorgasm.com/VSL/VSL_4.html';
var link = 'http://affiliate.zube8woeng.hop.clickbank.net/';
var bgVal = '1';
var autoplayVsl = '';
var instButton = '';
var salesText = '';
var exitPopup = '';

//---Change background img
$(".custom-select").on('change', function() {
    var backgroundNum = $(this).val()
    var url      = window.location.href;
    //get absolute url
    url = url.split(/(.+\/).?/)[1];
    console.log(url);
    var imgName = "url("+url+"images/bg-"+backgroundNum+".jpg)"
    $('body').attr('style', 'background-image:'+imgName);
    bgVal=backgroundNum;

    //Change bg color to black
    if(backgroundNum==1){
        $("#footer-inside a").attr('style', 'color:black');
        $(".footer-left").attr('style', 'color:black');
    };
});

//---trigger for Autoplay
var switchAutoplay = false;
$("#autoplay").on('change', function() {
    if ($(this).is(':checked')) {
        switchStatus = $(this).is(':checked');
        autoplayVsl = 'play=on';
        displayLink(autoplayVsl);
    }
    else {
       switchStatus = $(this).is(':checked');//
        autoplayVsl = 'play=on';
        removeFromLink(autoplayVsl);
    }
});
//---trigger for Buy Button
var switchStatus = false;
$("#buyButton").on('change', function() {
    if ($(this).is(':checked')) {
        switchStatus = $(this).is(':checked');
        instButton = "button=on";
        displayLink(instButton);
    }
    else {
       switchStatus = $(this).is(':checked');//
        instButton = "button=on";
        removeFromLink(instButton);
    }
});

//---trigger for Sales Text
var switchTextStatus = false;
$("#salesText").on('change', function() {
    if ($(this).is(':checked')) {       
        salesText='text=on'; 
        displayLink(salesText);
    }
    else {
        salesText='text=on';
        removeFromLink(salesText);
    }
});
//---trigger for Exit Popup
var switchTextStatus = false;
$("#exitPop").on('change', function() {
    if ($(this).is(':checked')) {       
        exitPopup='popup=on'; 
//        console.log(exitPopup);
        displayLink(exitPopup);
    }
    else {
        exitPopup='popup=on';
//        console.log(exitPopup);
        removeFromLink(exitPopup);
    }
});
//======= END Dynamic settings applying

// Display link
$( "#your_link" ).val(link);

//function to display ClickBank
function displayClickBank(str){
    var presentLink = $( "#your_link" ).val();
    var regExp1 = new RegExp('\/\/.*zu');
    var newLink = presentLink.replace(regExp1, '//'+str+'.zu');    
    if(str==''){
        newLink = presentLink.replace(regExp1, '//'+str+'zu');
//        console.log("Empty str");
    }
//    console.log(newLink);
    $( "#your_link" ).val(newLink);
}

// Function to display TID
function displayTID(str){
    var presentLink = $( "#your_link" ).val();
    var originalLinkEnd = /\/$/;
    var hasSomeParam = /\?/;
    var tid='tid='+str;
    var newlink='';
    //original end
    if(presentLink.match(originalLinkEnd) && str!=''){
        newlink =presentLink +"?"+ tid;
        console.log("print");
    }else if(presentLink.match('tid=')){//Has some tid
        
        if(str==''){
            console.log(tid);
            newlink = removeFromLink(tid);
        }else{
            var regExp1 = new RegExp('tid=\\w+');
            newlink = presentLink.replace(regExp1, tid);
        }
    }else if(presentLink.match(hasSomeParam) && str!=''){//has some param
        newlink =presentLink +"&"+ tid;
        console.log("print &");
    }
    if(newlink != ''){
       $( "#your_link" ).val(newlink);  
    }
    
}

//Function to display Your Link
function displayLink(str){
    var presentLink = $( "#your_link" ).val();
    var originalLinkEnd = /\/$/;
    if(presentLink.match(originalLinkEnd)){
        var newlink =presentLink +"?"+ str;
        $( "#your_link" ).val(newlink);  
    }else{
       var newlink =presentLink +"&"+ str;
        $( "#your_link" ).val(newlink); 
    }   
}

// Function to remove param from link
function removeFromLink(str){
    var presentLink = $( "#your_link" ).val();
    if(presentLink == link){//original link
    } 
    //  has '\\w?' for TID removing
    var regExp1 = new RegExp('[\\?|\\&]'+str+'\\w?');
    var regExp2 = new RegExp('[\\?]'+str+'\\w?\&?');
    var regExp3 = new RegExp('[\\&]'+str+'\\w?');
    var mutchSumm=presentLink.match('&');
//    console.log(mutchSumm);
    if(mutchSumm){//if more than 1 param
        var newLink = '';
        if(presentLink.match(regExp3)){
          newLink = presentLink.replace(regExp3, ''); 
        }
        if(presentLink.match(regExp2)){
           newLink = presentLink.replace(regExp2, '?');
       }
//        console.log(newLink);
        $( "#your_link" ).val(newLink);
        
    }else{
        var newLink = presentLink.replace(regExp1, '');
        $( "#your_link" ).val(newLink);
//        console.log(newLink);
//        console.log(regExp1);
    }
    return newLink;
    
}








//****** NOT IN USE ****//

//============= Get parameters from url ====//
//alert(location.search);
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

    var background = getUrlVars()["bg"];
    var autoplay = getUrlVars()["play"];
    var buyButton = getUrlVars()["button"];
    var salesText = getUrlVars()["text"];
    var exitPop = getUrlVars()["exit"];
//    console.log(background);
//    console.log(autoplay);
//    console.log(buyButton);
//    console.log(salesText);
//    console.log(exitPop);
if(background){
    var url      = window.location.href;
    //get absolute url
    url = url.split(/(.+\/).?/)[1];
    var imgName = "url("+url+"images/bg-"+background+".jpg)"
    $('body').attr('style', 'background-image:'+imgName);
    //Change bg color to black
    if(background==1){
        $("#footer-inside a").attr('style', 'color:black');
        $(".footer-left").attr('style', 'color:black');
    };
}
if(autoplay){
   $('.video')[0].autoplay = true;
}
if(buyButton){
   $('.delay').attr('style', "display:block");
}
if(salesText){
   $('.sales_text').attr('style', "display:block");
}
if(exitPop){
   $('.exit_pop').attr('style', "display:block");
}
