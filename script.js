const now = moment();
var timeSlot = $('#hour');
var rowDiv = $('#row');
var containerDiv = $('#container');

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
    var addRow = $("<div>" + day[i] + "</div>");

    // It then adds this new row div.
    addRow.append(containerDiv);
}


 // For Loop then loops through our day array...
 for (var i = 0; i < day.length; i++) {

    // It then creates a new div for each drink. Note we create divs and add the content in the same line.
    var newTimeDiv = $("<div>" + day[i] + "</div>");

    // It then adds this new div to the drinkList div.
    timeSlot.append(newTimeDiv);
 }

// Add each hour to a row- Use a for loop to cycle through the hours and append them to the DOM.
// Add a section for the user to place a reminder in each row
// Add a save button to each row

// Eventually add functionality that shows if the time slot is in the past, present, or future
// Add local storage elements that will save the inputs












