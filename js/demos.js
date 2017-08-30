function fillShiftSelect() {
  for (var i = 0; i < 26; i++) {
    $("#demo-shift").append("<option value='" + i + "'>" + i + "</option>")
  }
}

$(document).ready(function() {
  fillShiftSelect();
});
