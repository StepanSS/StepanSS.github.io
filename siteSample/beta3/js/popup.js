// =============SETTINGS=================!!!!!!!!!!!!!
// to switch on/off cookie - just comment/uncomment next line(line 3)
setCookie("modalCookieState", 0, 0); //remove cookie
//number of days until the cookie should expire
exdays = 1;


//Use line 7 for test and line 8 to send form data to Aweber
//url = "http://localhost/beta3/subscribe.php"; //test server
//url = $('#aweberForm').attr('action');// Aweber server
//console.log("url:"+url);


// Get modal element
var modal = document.getElementById('popModal');
//Get close modal button
var closeBtn = document.getElementById('closeModalBtn');

// Listen for close click
closeBtn.addEventListener('click', closeModal);
//Listen for outside modal content click
window.addEventListener('click', clickOutside);

// Get parametr from userSettings.js
var exitState = exitPopState;

// Function to open modal if cursor leave body
var modalState = true; //trigger to open modal one time only

$(document).mouseleave(openModal);

// Function to open modal
function openModal() { 
    if(modalState && exitState && !modalStateInCookie){
        modal.style.display = 'flex';
        modalState = false;        
        setCookie("modalCookieState", "y", exdays)
        
    }    
}

// Function to close modal
function closeModal(){
    modal.style.display = 'none';
//    showAweberSuccess();//for testing only - after need to comment
    
}

// Function to close modal if outside click
function clickOutside(e){
  if(e.target==modal) {
      modal.style.display='none';
  } 
}

// Popup for mobile devices
$( document ).ready(function() {      
    var isMobile = window.matchMedia("only screen and (max-width: 770px)").matches;
    
    if(isMobile){
       window.history.pushState({page: 1}, "", "");

        window.onpopstate = function(event) {

          // "event" object seems to contain value only when the back button is clicked
          // and if the pop state event fires due to clicks on a button
          // or a link it comes up as "undefined" 

          if(event){
              // Code to handle back button or prevent from navigation
              modal.style.display = 'flex';
              modalState = false;
    //          console.log('mobile');
    //          alert('stop');
          }
          else{
            // Continue user action through link or button
          }
        } 
    }
//    //Switch Popup with delay
//    if (isMobile) {
//        if(modalState && exitState){
//            setTimeout(function(){
//        			modal.style.display = 'flex'
//     			}, 5000);
//            modalState = false;
//            console.log('mobile');
//        }
//    }
 });


//========================Section for Submit Event============!!!!!!!!!!!!
//to return normal form behavior comment this section
//===============================================
var aweberForm = window.document.querySelector('#aweberForm');

aweberForm.addEventListener('submit', (e)=>{
    
    e.preventDefault();
    

    closeModal();
    showAweberSuccess(); // show info msg when subscribed
    console.log(aweberForm);
    setTimeout(()=>{aweberForm.submit();},3000);
    
//    aweberForm.submit();
    
})

//get Iframe window
const myIframe = document.getElementById('iframeAweber');
var iframeForm = null;
// get iframe form onload 
//function access(){
//    const iframeDocument = myIframe.contentDocument;
//    //console.log(iframeDocument);
//    try{
//        iframeForm = iframeDocument.querySelector("#aweberIframeForm"); 
////        console.log(iframeForm);
//    }catch(error){console.error(error);}
//}
//
function sendDataToIframeForm(formData){
    iframeForm.elements['email'].value = formData.get('email');
//    iframeForm.elements['redirect'].value = formData.get('redirect'); //"http://127.0.0.1:13920/aweberform.html";
    console.log(iframeForm.elements['redirect'].value);
    for (var pair of formData.entries()){
        console.log(pair[0]+ ', '+ pair[1]);
    }
}
// ==============END Section for Submit Event===============!!!!!!!!!!!!!!!

//================Functions to close/open Success Info
aweberSuccess = $('#aweberSuccess')
//console.log(aweberSuccess);
function showAweberSuccess(){
    aweberSuccess.attr("style", "display: block");
    setTimeout(()=>{
        aweberSuccess.attr("style", "display: none")
        }, 5000); //show for 5 sec
}
function closeAweberSuccess(){
    aweberSuccess.attr("style", "display: none") ;
}
$('#closeBtnAweberSuccess').on('click', closeAweberSuccess)


// ======================= Cookie Section
modalStateInCookie = getCookie("modalCookieState");
console.log(modalStateInCookie);

// Create Cookie function
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//Get Cookie function
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}















