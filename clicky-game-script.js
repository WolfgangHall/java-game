/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    var timer, secondsLeft, clicks = 0;
        //if you hit the start button once, the function works fine
        //if you hit the start button more than once, the alert window begins to spaz out
    function clickEvent() {
        clicks += 1;
        $('#click-counter').html(clicks);
        if (clicks === 20) {
            $('img').off();
            $('#countdown').html("You're a great trainer!");
            alert("You've caught 20 pokemon in " + (20 - secondsLeft) + " seconds!");
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
        $('#toggleBtnStop').on('click', resetClock);
        secondsLeft = 20;
        timer = setInterval(function () {
            $('#countdown').html(secondsLeft);
            secondsLeft -= 1;
            if (secondsLeft <= 0) {
                $('#countdown').html("Gotta catch em' all!");
                $('img').off();
                $('#toggleBtnStop').off();
                alert('The time is up'); // alert is now here!
                clearInterval(timer);
            }
        }, 1000);
    }
    function resetClock() {
        clearInterval(timer);
        $('#countdown').html('Play Again?');
        $('#toggleBtnStop').off();
        clicks = 0;
        $('#click-counter').html(clicks);
        $('#toggleBtn').on('click', startClock);
        $('img').off();
    }
    $('#toggleBtn').on('click', startClock);
    $('#musicBtn').on('click', playSong);
});