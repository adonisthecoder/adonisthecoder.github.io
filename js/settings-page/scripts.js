function replaceYTVideo() {
    var ytVideoIDVar = document.getElementById("ytVideoIDBox").value;
    document.cookie = "ytVideoID="+ytVideoIDVar+"; expires=Friday, 1 Jan 2100 4:59:59 UTC; path=/";
    document.getElementById("message-1").innerHTML = "Changes saved.";
    document.getElementById("message-1").style.display = "block";  
}
// Code below from stackoverflow.com/questions/14251676/detect-enter-key-pressed-using-javascript
// The code below was modified by me. 
function enterPressAlert(e, textarea) {
   var code = (e.keyCode ? e.keyCode : e.which);
   if(code == 13) {
      replaceYTVideo();
   }
}
// --------------------