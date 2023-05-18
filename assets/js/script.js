// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // Current day and logs it into header based on id=currentDay.
  var day = dayjs();
  $('#currentDay').text(day.format('MMM DD, YYYY h:mma.'));
  // Current hour
  var hour = dayjs().hour() - 12;
  console.log(hour);

  // Select every instance of time-block and loop though it
  $('.time-block').each(function() {
    // From all of 'this', which represents '.time-block'. Grab the id (the actual named/declared Id inputed in HTML) and split the corresponding string.
    // Split the string at '-' symbol. [0] represents hour [1] represent numeric value of hour.
    var id = $(this).attr('id').split('-')[1];
    // Represents numeric value of hour from the id (string that was split) on the corresponding HTML.
    var rowHour = parseInt(id);
    console.log(rowHour);

    // Will determine your current time and what is past/present/future.
    if (hour < rowHour) {
      $(this).addClass('future');
    } else if (hour > rowHour) {
      $(this).addClass('past');
    } else {
      $(this).addClass('present');
    }

  // Event listener on button press.
  $('.saveBtn').on('click', function() {
    // Represents the text corresponding to the button. DUE TO 'this' and stores it in a variable.
    var descriptionEl = $(this).siblings('.description').val();
    // Represents the hour of THIS button clicked
    var time = $(this).parent().attr("id").split('-')[1];

    // Making sure I am selecting the correct values
    console.log(time);
    console.log(descriptionEl);

    // Key = time, value = description for that specific button clicked due to 'this' object.
    localStorage.setItem(time, descriptionEl);

    // For every element with a period of hour-x and description, go to local storage and set its value(text) equal to whatever was input.
    $('#hour-' + time + '.description').val(localStorage.getItem(time));
  })

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

  // var currentDayEl = document.getElementById('currentDay');
  // currentDayEl.textContent = day;

  // currentDayEl.append();
});

