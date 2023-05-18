// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var day = dayjs();
  console.log(day);
  // Current hour in the 
  var hour = dayjs().hour() - 19;
  console.log(hour);
  // Select every instance of time-block and loop though it
  $('.time-block').each(function() {
    // From all of 'this', which represents '.time-block'. Grab the id (the actual named/declared Id inputed in HTML) and split the corresponding string.
    // Split the string at '-' symbol. [0] represents hour [1] represent numeric value of hour.
    var id = $(this).attr('id').split('-')[1];
    // Represents numeric value of hour from the id (string that was split) on the corresponding HTML.
    var rowHour = parseInt(id);
    console.log(rowHour);

    // Will determine your current time and what is past/present.
    if (hour < rowHour) {
      $(this).addClass('future');
    } else if (hour > rowHour) {
      $(this).addClass('past');
    } else {
      $(this).addClass('present');
    }
  })
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var currentDayEl = document.getElementById('currentDay');
  currentDayEl.textContent = day;

  // currentDayEl.append();
});

