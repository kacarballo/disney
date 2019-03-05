// business logic
function getDisneyCharacter(color, quote, word) {
  if(color == "Red" && quote == "quote4" && word == "Playful")
    $("#mickey").show();
  else if(color == "Blue" && quote === "quote2" && word == "Spaz")
    $("#dory").show();
  else if(color)

}

// user interface logic
$(document).ready(function() {
  $("form#quiz").submit(function(event) {

    var name = $("#name").val();
    var color = $("#color option:selected").text();
    var quote = $('input[name=quote]:checked').val();
    // var placeToVisit = $('input[name=quote]:checked').val();
    var wordDescribe = $("#noun option:selected").text();
    //alert("name = " + name + " color = " + color + " quote = " + quote + " word = " + wordDescribe);

    getDisneyCharacter(color, quote, wordDescribe);
    event.preventDefault();

  });
});
