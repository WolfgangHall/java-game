var seconds;
var temp;
var toggleBtn = document.getElementById("toggleBtn");
 
  function countdown() {
    seconds = document.getElementById('countdown').innerHTML;
    seconds = parseInt(seconds, 10);
 
    if (seconds == 1) {
      temp = document.getElementById('countdown');
      temp.innerHTML = "Gotta Catch em' All";
      alert("time is up");
      return;
    }
 
    seconds--;
    temp = document.getElementById('countdown');
    temp.innerHTML = seconds;
    timeoutMyOswego = setTimeout(countdown, 1000);
  }
 
  toggleBtn.addEventListener("click", countdown);

