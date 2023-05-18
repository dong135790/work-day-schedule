// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // Current day and logs it into header based on id=currentDay.
  var day = dayjs();
  $('#currentDay').text(day.format('MMM DD, YYYY h:mma.'));
  // Current hour
  var hour = dayjs().hour();
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

});

