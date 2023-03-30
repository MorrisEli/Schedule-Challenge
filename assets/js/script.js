// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = moment();

var timeblockEL = document.querySelector('.container');

$('#currentDay').text(today.format('LLL'));

$('.saveBtn').on('click', function () {
    var textValue = $(this).siblings('.description').val();
    var timeKey = $(this).parent().attr('id');

    localStorage.setItem(timeKey, textValue);
});

$('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));

function auditTask() {
    var currentHour = today.hours();

    $('.time-block').each(function () {
        var timeId = parseInt($(this).attr('id').split("hour")[1]);

        if (timeId < currentHour) {
            $(this).addClass('past');
        }
        else if (timeId === currentHour) {
            $(this).removeClass('past');
            $(this).removeClass('future');
            $(this).addClass('present');
        }
        else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    });
}

auditTask();

setTimeout(function () {
    location = '';
}, 1000 * 60);


