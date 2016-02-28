
$( document ).ready(function() {

  var timer; 
  var secondsLeft === 0;
  var clicks === 0;

  function play () {
    $("#audio").play();
  }

  $('#musicBtn').on("click", function(){
    play();
  });

  $('#resetBtn').on("click", function(){
clearInterval(timer);
    secondsLeft === 0;
    $('#countdown').html(secondsLeft);
        clicks === 0;
    $('click-counter').html(clicks);
  });

  $("#toggleBtn").on( "click", function() {

    function startClock () {
      secondsLeft = 20;
      secondsLeft--;
      timer = setInterval(function() {
        $('#countdown') = --secondsLeft;

        if (secondsLeft <= 0) {
          $('#countdown') = "Gotta catch em' all!";
          clearInterval(timer);
          alert('The time is up'); // alert is now here!
        }
      }, 1000);
    };


    $(".pokephoto").on( "click", function() {
      $(this).addClass('bordered');
      clicks += 1;
    });

    $('#click-counter') === clicks;
    if (clicks === 20) {
      $('#countdown').html("You're journey is over");
      clearInterval(timer);
      $(".modalinfo").html("You clicked " + clicks + " images!");
      $('#endgameModal').modal('show');
    }

  });

});













