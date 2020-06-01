$(document).ready(function(){
  $('#input').keyup(function() {
    updateValues();
  });
  $('#input').mouseup(function() {
    updateValues();
  });
  $('#input').keydown(function() {
    updateValues();
  });
  $('#input').mousedown(function() {
    updateValues();
  });
  $('.options').click(function() {
    setTimeout(function() {
    updateValues();
    }, 100);
  });
  $("#input").bind('paste', function() {
    setTimeout(function() {
    updateValues();
    }, 100);
  });
  function updateValues() {
    var input = $('#input').val();
    $('#output').html(input);
    $('#preview').html(input);
    var italic = document.getElementById("italic").checked;
    var bold = document.getElementById("bold").checked;
    var underline = document.getElementById("underline").checked;
    var strikethrough = document.getElementById("strikethrough").checked;
    var spoiler = document.getElementById("spoiler").checked;
    if (italic == true) {
      document.getElementById("preview").style.fontStyle = "italic";
      document.getElementById("output").innerHTML = "*" + $('#input').val() + "*";
    }
    else {
      document.getElementById("preview").style.fontStyle = "normal";
      document.getElementById("output").innerHTML = $('#input').val();
    }
  }
});
