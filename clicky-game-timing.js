var timer, secondsLeft;

function startClock () {
  secondsLeft = 20;
  timer = setInterval(function() {
    document.getElementById('countdown').innerHTML = --secondsLeft;

    if (secondsLeft <= 0)
    {
      document.getElementById('countdown').innerHTML = "Gotta catch em' all!";
      alert('The time is up');
      clearInterval(interval);
    }
  }, 1000);
};