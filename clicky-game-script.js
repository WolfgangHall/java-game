
// add jquery


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

//if you hit the start button once, the function works fine
//if you hit the start button more than once, the alert window begins to spaz out

var clicks = 0;
function onClick() {
 clicks += 1;
 document.getElementById("click-counter").innerHTML = clicks;

 if (clicks === 20) {
  document.getElementById('countdown').innerHTML = "You're a great trainer!"
  clearInterval(timer);
  alert("You've caught 20 pokemon in" + secondsLeft + " seconds!");
  };
};

var clicks = 0;
function resetClock() {
  clearInterval(timer);
  document.getElementById('countdown').innerHTML=20;
}


var clicks = 0;
function resetClicks() {
 
}

function play () {
  document.getElementById("audio").play();
}


  


