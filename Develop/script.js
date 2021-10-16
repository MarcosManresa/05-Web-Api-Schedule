// This variable is used to acquire the current day and date.
var dateToday = moment().format('dddd, MMM Do YYYY, h:mm.ss');
$("#currentDay").html(dateToday);

$(document).ready(function () {
    //Allows the buttom to be used as a click listener
    $(".saveBtn").on("click", function () {
        // Gets nearvby values of descriptions shown in JQuery
        var texting = $(this).siblings(".describe").val();
        var timer = $(this).parent().attr("id");

        //Saves text into the local storage
        localStorage.setItem(timer, texting);
    })
   
    function trackTime() {
        //Aquires the number of hours shown
        var nowTimer = moment().hour();

        // Loop function that goes over each block
        $(".block-time").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            // Evaluates the time and changes the class backgrounds depending on time.
            if (timeBlock < nowTimer) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
            else if (timeBlock === nowTimer) {
                $(this).removeClass("future");
                $(this).addClass("present");
                $(this).removeClass("past");
            }
            else {
                $(this).removeClass("past");
                $(this).addClass("future");
                $(this).removeClass("present");

            }
        })
    }

    // Acquires items from the local storage to save on page.
    $("#hour8 .describe").val(localStorage.getItem("hour8"));
    $("#hour9 .describe").val(localStorage.getItem("hour9"));
    $("#hour10 .describe").val(localStorage.getItem("hour10"));
    $("#hour11 .describe").val(localStorage.getItem("hour11"));
    $("#hour12 .describe").val(localStorage.getItem("hour12"));
    $("#hour13 .describe").val(localStorage.getItem("hour13"));
    $("#hour14 .describe").val(localStorage.getItem("hour14"));
    $("#hour15 .describe").val(localStorage.getItem("hour15"));
    $("#hour16 .describe").val(localStorage.getItem("hour16"));
    $("#hour17 .describe").val(localStorage.getItem("hour17"));
    $("#hour18 .describe").val(localStorage.getItem("hour18"));

    trackTime();
})