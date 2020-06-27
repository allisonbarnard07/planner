$(".btn").on("click", function saveWork () {    
var workEvent = document.getElementById("#workEvent").value
saveInfo.push(workEvent);
localStorage.setItem("saveInfo", JSON.stringify(saveInfo));
});


$('#workEvent').html("Test");
localStorage.content = $('#workEvent').html();
$('#workEvent').html(localStorage.content);



function info(){
    var storedInfo = JSON.parse(localStorage.getItem("saveInfo"));
    if (storedInfo !== null){
        saveInfo = storedInfo;
    }
}

info();


////TIME CODE

var timeOfDay = moment().format('k'); // 24-hour time digit (1-24)
var mornOrNight = moment().format('A'); // PM (AM/PM)
$('.time-block').each(function() {
    if ($(this).attr('data-time') < timeOfDay) {
        $(this).addClass('red');
    }
});

var minuteOfHour = moment().format('m'); // 25
var timeTilNextHour = 60 - minuteOfHour; // 60 minutes in an hour, minus the current gives you the number of minutes until next hour starts
timeTilNextHour = timeTilNextHour * 60 * 1000; // convert timeTilNextHour to milliseconds for use in setTimeout

