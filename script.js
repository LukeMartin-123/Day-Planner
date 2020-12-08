const now = moment();

var rowDiv = $('.row');
var containerDiv = $('.container');
var past = $('.past');
var present = $('.present');
var future = $('future');


let day = [
    {
        value: "0",
        hour: "9:00",
        abbrieviation: "am",
        reminder: ""
    },

    {
        value: "1",
        hour: "10:00",
        abbrieviation: "am",
        reminder: ""
    },

    {
        value: "2",
        hour: "11:00",
        abbrieviation: "am",
        reminder: ""
    },

    {
        value: "3",
        hour: "12:00",
        abbrieviation: "pm",
        reminder: ""
    },

    {
        value: "4",
        hour: "1:00",
        abbrieviation: "pm",
        reminder: ""
    },

    {
        value: "5",
        hour: "2:00",
        abbrieviation: "pm",
        reminder: ""
    },

    {
        value: "6",
        hour: "3:00",
        abbrieviation: "pm",
        reminder: ""
    },

    {
        value: "7",
        hour: "4:00",
        abbrieviation: "pm",
        reminder: ""
    },

    {
        value: "8",
        hour: "5:00",
        abbrieviation: "pm",
        reminder: ""
    },

]

$("#currentDay").text(now.format("dddd MMMM Do YYYY"))


for (var i = 0; i < day.length; i++) {

    // This creates a new div for each row needed.
    var addRow = $(`
    <div id="hour-${day[i].value}" class="row time-block">
      <div class="col-md-1 hour">
        ${day[i].hour} ${day[i].abbrieviation} 
      </div>
      <textarea class="col-md-10 description"  id ="reminder" name = "entry">
      </textarea>
      <button class="btn saveBtn col-md-1"><i class="fa fa-floppy-o" aria-hidden="true"></i></button>
    </div>
    `);

    // It then adds this new row div.
    containerDiv.append(addRow);
}


var inputVal = document.getElementById("reminder").value;

function saveReminders() {
    localStorage.setItem("input", inputVal);
}

function getReminders() {
    localStorage.getItem('value')
    }

function displayReminders() {
    forEach(function () {
    })
}


$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description")
    saveReminders();
    displayReminders();
})









var timeSlot = $('.hour');




$(timeSlot).each(function (index) {
    var date = new Date;
    var hour = date.getHours();
    console.log(hour)

    if (index + 9 === hour) {
        $("#hour-" + index).addClass("present");
    }

    else if
        (index + 9 > hour) {
        $("#hour-" + index).addClass("past");
    }

    else if
        (index + 9 < hour) {
        $("#hour-" + index).addClass("future");
    }

})











