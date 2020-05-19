$(document).ready(function() {
    //gallery for workshops
  $("#next").on("click", function() {

    if ( $("#gallery-hyewon").is(":visible") ) {
      $("#gallery-hyewon").addClass("hidden");
      $("#gallery-kenichi").removeClass("hidden");
  } else if ( $("#gallery-kenichi").is(":visible") ) {
      $("#gallery-kenichi").addClass("hidden");
      $("#gallery-sharon").removeClass("hidden");
  } else if ( $("#gallery-sharon").is(":visible") ) {
      $("#gallery-sharon").addClass("hidden");
      $("#gallery-kasamatsu").removeClass("hidden");
  } else if ($("#gallery-kasamatsu").is(":visible") ){
      $("#gallery-kasamatsu").addClass("hidden");
      $("#gallery-hyewon").removeClass("hidden");
    }

  });
  // key is pressed event
 $("body").on("keydown", function(event) {
   // right key (39) was pressed
   if (event.keyCode == 39)

    if ( $("#gallery-hyewon").is(":visible") ) {
         $("#gallery-hyewon").addClass("hidden");
         $("#gallery-kenichi").removeClass("hidden");
     } else if ( $("#gallery-kenichi").is(":visible") ) {
         $("#gallery-kenichi").addClass("hidden");
         $("#gallery-sharon").removeClass("hidden");
     } else if ( $("#gallery-sharon").is(":visible") ) {
         $("#gallery-sharon").addClass("hidden");
         $("#gallery-kasamatsu").removeClass("hidden");
     } else if ($("#gallery-kasamatsu").is(":visible") ){
         $("#gallery-kasamatsu").addClass("hidden");
         $("#gallery-hyewon").removeClass("hidden");
       }
     });

    //gallery for showcases
    $("#next1").on("click", function() {

      if ( $("#gallery1-bailey").is(":visible") ) {
        $("#gallery1-bailey").addClass("hidden");
        $("#gallery1-willard").removeClass("hidden");
    } else if ( $("#gallery1-willard").is(":visible") ) {
        $("#gallery1-willard").addClass("hidden");
        $("#gallery1-orch").removeClass("hidden");
    } else if ( $("#gallery1-orch").is(":visible") ) {
        $("#gallery1-orch").addClass("hidden");
        $("#gallery1-drum").removeClass("hidden");
    } else if ($("#gallery1-drum").is(":visible") ){
        $("#gallery1-drum").addClass("hidden");
        $("#gallery1-dancing").removeClass("hidden");
    } else if ($("#gallery1-dancing").is(":visible") ){
        $("#gallery1-dancing").addClass("hidden");
        $("#gallery1-bailey").removeClass("hidden");
      }

    });
    // key is pressed event
   $("body").on("keydown", function(event) {
     // right key (39) was pressed
     if (event.keyCode == 39)
        if ( $("#gallery1-bailey").is(":visible") ) {
       $("#gallery1-bailey").addClass("hidden");
       $("#gallery1-willard").removeClass("hidden");
        } else if ( $("#gallery1-willard").is(":visible") ) {
       $("#gallery1-willard").addClass("hidden");
       $("#gallery1-orch").removeClass("hidden");
        } else if ( $("#gallery1-orch").is(":visible") ) {
       $("#gallery1-orch").addClass("hidden");
       $("#gallery1-drum").removeClass("hidden");
        } else if ($("#gallery1-drum").is(":visible") ){
       $("#gallery1-drum").addClass("hidden");
       $("#gallery1-dancing").removeClass("hidden");
        } else if ($("#gallery1-dancing").is(":visible") ){
       $("#gallery1-dancing").addClass("hidden");
       $("#gallery1-bailey").removeClass("hidden");
        }
      });

      //gallery for homepage
      $("#next2").on("click", function() {

        if ( $("#shirt").is(":visible") ) {
          $("#shirt").addClass("hidden");
          $("#landscape").removeClass("hidden");
      } else if ( $("#landscape").is(":visible") ) {
          $("#landscape").addClass("hidden");
          $("#baileyteamphoto").removeClass("hidden");
      } else if ( $("#baileyteamphoto").is(":visible") ) {
          $("#baileyteamphoto").addClass("hidden");
          $("#oweekteamphoto").removeClass("hidden");
      } else if ($("#oweekteamphoto").is(":visible") ){
          $("#oweekteamphoto").addClass("hidden");
          $("#trophy").removeClass("hidden");
      } else if ($("#trophy").is(":visible") ){
          $("#trophy").addClass("hidden");
          $("#shirt").removeClass("hidden");
        }

      });
      // key is pressed event
     $("body").on("keydown", function(event) {
       // right key (39) was pressed
       if (event.keyCode == 39)
          if ( $("#shirt").is(":visible") ) {
         $("#shirt").addClass("hidden");
         $("#landscape").removeClass("hidden");
       } else if ( $("#landscape").is(":visible") ) {
         $("#landscape").addClass("hidden");
         $("#baileyteamphoto").removeClass("hidden");
       } else if ( $("#baileyteamphoto").is(":visible") ) {
         $("#baileyteamphoto").addClass("hidden");
         $("#oweekteamphoto").removeClass("hidden");
       } else if ($("#oweekteamphoto").is(":visible") ){
         $("#oweekteamphoto").addClass("hidden");
         $("#trophy").removeClass("hidden");
       } else if ($("#trophy").is(":visible") ){
         $("#trophy").addClass("hidden");
         $("#shirt").removeClass("hidden");
          }
        });

});
