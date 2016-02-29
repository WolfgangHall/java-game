$(document).ready(function () {
    "use strict";
    var timer, secondsLeft, clicks = 0;

    function clickEvent() {
        if ($(this).hasClass('unclicked') === true) {
            clicks += 1;
            $(this).removeClass('unclicked').addClass('opaque clicked');
        }
        
        $('#click-counter').html(clicks);
        if (clicks === 20) {
            $('#countdown').html("You're a great trainer!");
            $(".modalinfo").html("You clicked " + clicks + " images!");
            $('#endgameModal').modal('show');
            clearInterval(timer);
        }

    }

    function playSong() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'clicky-game-motivation.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');
    }

    function startClock() {
        $('#toggleBtn').off();
        $('img').on('click', clickEvent);
        $('#resetBtn').on('click', resetAll);
        secondsLeft = 20;
        timer = setInterval(function () {
            $('#countdown').html(--secondsLeft);
            if (secondsLeft <= 0) {
                $('#countdown').html("Gotta catch em' all!");
                $(".modalinfo").html("You clicked " + clicks + " images!");
                $('#endgameModal').modal('show');
                clearInterval(timer);
            }
        }, 1000);
    }

    function resetAll() {
        clearInterval(timer);
        secondsLeft = 20;
        clicks = 0;
        $('#click-counter').html(clicks);
        $('#toggleBtn').on('click', startClock);
    }

    $('#resetBtn').on('click', resetAll);
    $('#toggleBtn').on('click', startClock);
    $('#musicBtn').on('click', playSong);
});