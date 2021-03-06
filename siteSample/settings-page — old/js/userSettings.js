//=======Dynamic settings applying
var link2 = 'http://8xfemaleorgasm.com/VSL/VSL_4.html';
var link = 'http://affiliate.zube8woeng.hop.clickbank.net/';
//Variables to change Landing Page
var landingPage2='Long Form Sales Text';
var landingPage3='Direct to pre-order page';
var landingPage4='Direct to order page';

var bg = '';
var autoplayVsl = '';
var instButton = '';
var salesText = '';
var exitPopup = '';

// Display link
$( "#your_link" ).val(link);

//add default Background
var bgDefault = 'bg='+$(".background").val();
displayLink(bgDefault);

// Add Exit Popup
if ($('#exitPop').is(':checked')){
   addPopupState('exit=on'); 
}


//---Change background img
$(".background").on('change', function() {
    var backgroundNum = $(this).val()
    var url      = window.location.href;
    //get absolute url
    url = url.split(/(.+\/).?/)[1];
//    console.log(url);
    var imgName = "url("+url+"images/bg-"+backgroundNum+".jpg)"
//    $('body').attr('style', 'background-image:'+imgName);
    showBGlightbox(imgName);
    bg='bg='+backgroundNum;
    displayBg(bg);

    //Change bg color to black
//    if(backgroundNum==1){
//        $("#footer-inside a").attr('style', 'color:black');
//        $(".footer-left").attr('style', 'color:black');
//    };
});

//---Change Landing Page
$(".landing_page").on('change', function() {
    var landingPage = $(this).val();
    if(landingPage==1){
        $(".custom-variables").attr('style', 'display:block');
        
        //reset checkboxes
        resetCheckboxes();                
        //reset original link
        $( "#your_link" ).val(link);
        //reset Background
        bgDefault = 'bg='+$(".background").val();
        displayLink(bgDefault);
        //reset Popup
        addPopupState("exit=on");
        
    }else{
        $(".custom-variables").attr('style', 'display:none');
    };
    if(landingPage==2){
        $( "#your_link" ).val(landingPage2);
    };
    if(landingPage==3){
        $( "#your_link" ).val(landingPage3);
    };
    if(landingPage==4){
        $( "#your_link" ).val(landingPage4);
    };
});

//---trigger for Autoplay
var switchAutoplay = false;
$("#autoplay").on('change', function() {
    if ($(this).is(':checked')) {
        switchStatus = $(this).is(':checked');//for debug
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
$("#buyButton").on('change', function() {
    if ($(this).is(':checked')) {
        instButton = "button=on";
        displayLink(instButton);
    }
    else {
        instButton = "button=on";
        removeFromLink(instButton);
    }
});

//---trigger for Sales Text
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
$("#exitPop").on('change', function() {
    if ($(this).is(':checked')) {       
        exitPopup='exit=on'; 
        addPopupState(exitPopup);
    }
    else {
        exitPopup='exit=off';
        addPopupState(exitPopup);
    }
});
//======= END Dynamic settings applying


//+++ Copy to Clipboard Function
function copyToClopboard(){
    var text = $( "#your_link" ).val();
    navigator.clipboard.writeText(text).then(function() {
//        console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
//        console.error('Async: Could not copy text: ', err);
    });
    
    var tooltip = $('.inner_info');
    tooltip.text( "Copied to Clipboard");
}
function outFunc() {
  var tooltip = $('.inner_info');
  tooltip.text( "Copy to Clipboard");
}
//+++ Function to add Exit Popup State
function addPopupState(str){
    var presentLink = $( "#your_link" ).val();
    var regExp1 = new RegExp('exit=\\w{2,3}');
    //insert in link if parameter not found
    if(!presentLink.match(regExp1)&& str=='exit=on'){
        displayLink(str); 
//        console.log('first print exit=on');
    }else{// replace if par exist
        var newLink = presentLink.replace(regExp1, str); 
         $( "#your_link" ).val(newLink);
    }
}

//+++ Function to reset Checkboxes
function resetCheckboxes(){
    $("#exitPop").prop('checked', true);
    $("#autoplay").prop('checked', false);
    $("#buyButton").prop('checked', false);
    $("#salesText").prop('checked', false);
//    $("#autoplay").val('checked')[0].checked=false;
//    var attr = $("#autoplay").val('checked')[0].checked;
//    console.log(attr);
}

//+++ Function to add Background to Link
function displayBg(bg){
    var presentLink = $( "#your_link" ).val();
    var regExp1 = new RegExp('bg=\\d');
    var newLink = presentLink.replace(regExp1, bg); 
     $( "#your_link" ).val(newLink);
}

//+++function to add ClickBank to Link
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

//+++ Function to add TID
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
//            console.log(tid);
            newlink = removeFromLink(tid);
        }else{
            var regExp1 = new RegExp('tid=\\w+');
            newlink = presentLink.replace(regExp1, tid);
        }
    }else if(presentLink.match(hasSomeParam) && str!=''){//has some param
        newlink =presentLink +"&"+ tid;
//        console.log("print &");
    }
    if(newlink != ''){
       $( "#your_link" ).val(newlink);  
    }
    
}

//+++Function to show "Your Link"
function displayLink(str){
    var presentLink = $( "#your_link" ).val();
    var originalLinkEnd = /\/$/;
    var match = presentLink.match(originalLinkEnd);
    
    if(presentLink.match(originalLinkEnd)){
        var newlink =presentLink +"?"+ str;
        $( "#your_link" ).val(newlink)
    }else{
       var newlink =presentLink +"&"+ str;
        $( "#your_link" ).val(newlink); 
    }
}

//+++ Function to remove param from link
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
