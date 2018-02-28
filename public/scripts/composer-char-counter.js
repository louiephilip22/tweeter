$(document).ready(function () {
  $('.new-tweet').on('keyup', 'textarea', function() {
    // console.log('length: ', this);
    var maxLength = 140;
    var tweetLength = $(this).val().length;
    var finalLength = maxLength - tweetLength;
    if (tweetLength > maxLength) {
      $(this).siblings('.counter').addClass('red');
      $(this).siblings('.counter').text(finalLength);
    } else {
      $(this).siblings('.counter').removeClass('red');
      $(this).siblings('.counter').text(finalLength);
    }
  });
});






