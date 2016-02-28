/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {

  var clicks = 0;
  var secondsLeft = 5;
  var timer;



  $("#toggleBtn").click(function(){

    function startClock () {
      secondsLeft = 5;

      timer = setInterval(function() {
        $("#countdown").html(--secondsLeft);
        if (secondsLeft <= 0) {
          ("#countdown").html("Gotta catch em' all");
          $(".modalinfo").html("You clicked " + clicks + " images in " + secondsLeft + " s");
          $('#endgameModal').modal('show');
          clearInterval(interval);
        }
      }, 1000);
    };

    if (clicks === 20) {
      $(".modalinfo").html("You clicked " + clicks + " images!");
      $('#endgameModal').modal('show');
    }

    $( "#pic-box" ).click(function() {
      clicks += 1;
      $(this).addClass(".on");
      $("#click-counter").html(clicks);
    });

    $(".timer-box").html(--secondsLeft);
    $("#click-counter").html(clicks);





    $("#musicBtn").click(function() {
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', 'clicky-game-motivation.mp3');
      audioElement.setAttribute('autoplay', 'autoplay');

      audioElement.play();
    });


    $("#resetBtn").click(function() {
     clearInterval(timer);
     $('#countdown').html("5");
   });


    }); //ends toggle button click



});










