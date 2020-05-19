$(document).ready(function () {

  $("#feedback").on("submit", function() {

    var valid = true;

    var c = document.getElementById("year");
    var value = c.options[c.selectedIndex].value;


    if ( $("#name").prop("validity").valid ) {
      $("#name_error").addClass("hidden");
    } else {
      $("#name_error").removeClass("hidden");
      valid = false;
    };

    if ( $("#mail").prop("validity").valid ) {
      $("#mail_error").addClass("hidden");
    } else {
      $("#mail_error").removeClass("hidden");
      valid = false;
    };

    if ( value!="" ) {
      $("#year_error").addClass("hidden");
    } else {
      $("#year_error").removeClass("hidden");
      valid = false;
    };

    return valid

});

});
