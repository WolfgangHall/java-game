var timer, secondsLeft;

function startClock () {
  secondsLeft = 20;
  timer = setInterval(function() {
    document.getElementById('countdown').innerHTML = --secondsLeft;

    if (secondsLeft <= 0)
    {
      document.getElementById('countdown').innerHTML = "Gotta catch em' all!";
      clearInterval(timer);
      alert('The time is up'); // alert is now here!
    }
  }, 1000);
};



var clicks = 0;
function onClick() {
 clicks += 1;
 document.getElementById("click-counter").innerHTML = clicks;
};

