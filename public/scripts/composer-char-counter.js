$(document).ready(function() {

  // Gets the input in the textarea and counts the characters.
  $(".new-tweet form textarea").on("keyup", function() {
    const text  = $(this).val();

    // Sets counter of remaining characters and red if negative (and returns black if returns to be positive)
    if ((140 - text.length) < 0) {
      $(this).parent().children("span").text(140 - text.length).css("color", "red");
    } else {
      $(this).parent().children("span").text(140 - text.length).css("color", "black");
    }
  });

  // Sets the nav-bar button ("Compose") as toggle to slide showing and hidding the new-tweet form
  $( function() {
    $( "#nav-bar button" ).click(function() {
      $( ".new-tweet").slideToggle( );
      $( ".new-tweet form textarea").focus();
    });
  });
  $( ".new-tweet").hide();
});