function makeQuarterSquare(keySquare) {
  var result = "";
  for (var i = 0; i < 5; i++) {
    result += "<p>"
    for (var j = 0; j < 5; j++) {
      result += "<span + class='" + j + "" + i +"'>" + keySquare[j][i] + " </span>";
    }
    result += "</p>";
  }
  return result;
}

$(document).ready(function() {
  var square = new FourSquare("example", "keyword");
  $(".column-1").append(makeQuarterSquare(square.alphabet) + "<br>");
  $(".column-1").append(makeQuarterSquare(square.key2));
  $(".column-1").append("<h3>Key 2</h3>");
  $(".column-2").append(makeQuarterSquare(square.key1) + "<br>");
  $(".column-2").append(makeQuarterSquare(square.alphabet));
  $(".column-2").append("<h3>Plaintext</h3>");

  $(".column-1 span.21").first().addClass("highlighted");
  $(".column-2 span.41").first().addClass("highlighted");
  $(".column-1 span.20").last().addClass("highlighted");
  $(".column-2 span.40").last().addClass("highlighted");
});
