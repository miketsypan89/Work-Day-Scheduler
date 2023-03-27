
$(document).ready(function () {
  // console.log('testing')
  $('.saveBtn').on('click', function () {
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    console.log("value", value);
    console.log("time", time);
    localStorage.setItem(time, value);
  })
  $('#9 .description').val(localStorage.getItem('9'));
  $('#10 .description').val(localStorage.getItem('10'));
  $('#11 .description').val(localStorage.getItem('11'));
  $('#12 .description').val(localStorage.getItem('12'));
  $('#13 .description').val(localStorage.getItem('13'));
  $('#14 .description').val(localStorage.getItem('14'));
  $('#15 .description').val(localStorage.getItem('15'));
  $('#16 .description').val(localStorage.getItem('16'));
  $('#17 .description').val(localStorage.getItem('17'));


  // We'll create a for loop that will run and compare each hour with current hour and add or remove the necessary class

  for (let i = 9; i < 18; i++) {
    if (dayjs().hour() === i) {
      $('#' + i).removeClass('past future');
      $('#' + i).addClass('present');
    } else if (dayjs().hour() > i) {
      $('#' + i).addClass('past');
      $('#' + i).removeClass('present future');
    } else {
      $('#' + i).addClass('future');
      $('#' + i).removeClass('present past');
    }
  }

  // We'll display the current date in the header of the page.

  Date.prototype.yyyymmdd = function () {
    var yyyy = this.getFullYear().toString();
    var mm = (this.getMonth() + 1).toString(); // getMonth() is zero-based
    var dd = this.getDate().toString();
    return (mm[1] ? mm : "0" + mm[0]) + "/" + (dd[1] ? dd : "0" + dd[0]) + "/" + yyyy;
  };

  var currentDay = dayjs().format('dddd, MMMM D, YYYY h:mm A')
  $('#currentDay').text(currentDay);

  $('#currentDay .lead').val(localStorage.getItem(value));
});
