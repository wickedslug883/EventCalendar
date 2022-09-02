
$(document).ready( function () {
    //connecting moment js to #currentDay
    $("#currentDay").text(moment().format("MMM Do, YYYY, h:mm:ss")); // use of moment.js
    //Saving timed plans to local storage through click listener
    $(".saveBtn").on("click", function () {
      
     
        var plan = $(this).siblings(".description").val(); 
        var timeData = $(this).parent().attr("id"); 
        
        localStorage.setItem(timeData, plan);
    })

    //For Loop Cloning the container for less HTML input, how can I customize clones to become different from one another?
// $(document).ready(function() {
//     var container = $('.container');
//     for (var i = 0; i < 7; i++) {
//         container.clone().insertAfter(container);
//     }
// });

//local storage textarea and hourblock
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

function timeCheck() {
    //get current number of hours.
    var momentH = moment().hour(); 
    
    // loop over time blocks
    $(".time-block").each(function () {
        var divH = parseInt($(this).attr("id").split("hour")[1]);
   
        if (divH < momentH) {
           
            $(this).addClass("past");
            // $(".container textarea").attr("disabled", "disabled"); 
        }
        else if (divH === momentH) {
          
            $(this).addClass("present");
            // $('.container textarea').prop('disabled', false);
        }
        else {

            $(this).addClass("future");
            // $('.container textarea').prop('disabled', false);
        }
    })
}
timeCheck(); //recall
})