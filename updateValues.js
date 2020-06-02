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
    $('#previewText').html(input);
    var italic = document.getElementById("italic").checked;
    var bold = document.getElementById("bold").checked;
    var underline = document.getElementById("underline").checked;
    var strikethrough = document.getElementById("strikethrough").checked;
    var spoiler = document.getElementById("spoiler").checked;
    var input = $('#input').val();
    document.getElementById("previewText").style.backgroundColor = "transparent";
    document.getElementById("previewText").style.color = "#000";
    document.getElementById("previewText").style.borderRadius = "0";
    if (spoiler == true) {
      var input = "||" + $('#input').val() + "||";
      document.getElementById("previewText").style.backgroundColor = "#4A4D53";
      document.getElementById("previewText").style.color = "#fff";
      document.getElementById("previewText").style.borderRadius = "5px";
    }
    if (italic == false && bold == false && underline == false && strikethrough == false) {
      document.getElementById("previewText").style.fontStyle = "normal";
      document.getElementById("previewText").style.fontWeight = "normal";
      document.getElementById("previewText").style.textDecoration = "none";
      document.getElementById("output").innerHTML = input;
    }
    if (italic == true && bold == false && underline == false && strikethrough == false) {
      document.getElementById("previewText").style.fontStyle = "italic";
      document.getElementById("previewText").style.fontWeight = "normal";
      document.getElementById("previewText").style.textDecoration = "none";
      document.getElementById("output").innerHTML = "*" + input + "*";
    }
    if (italic == false && bold == true && underline == false && strikethrough == false) {
      document.getElementById("previewText").style.fontStyle = "normal";
      document.getElementById("previewText").style.fontWeight = "bold";
      document.getElementById("previewText").style.textDecoration = "none";
      document.getElementById("output").innerHTML = "**" + input + "**";
    }
    if (italic == false && bold == false && underline == true && strikethrough == false) {
      document.getElementById("previewText").style.fontStyle = "normal";
      document.getElementById("previewText").style.fontWeight = "normal";
      document.getElementById("previewText").style.textDecoration = "underline";
      document.getElementById("output").innerHTML = "__" + input + "__";
    }
    if (italic == false && bold == false && underline == false && strikethrough == true) {
      document.getElementById("previewText").style.fontStyle = "normal";
      document.getElementById("previewText").style.fontWeight = "normal";
      document.getElementById("previewText").style.textDecoration = "line-through";
      document.getElementById("output").innerHTML = "~~" + input + "~~";
    }
    if (italic == true && bold == true && underline == false && strikethrough == false) {
      document.getElementById("previewText").style.fontStyle = "italic";
      document.getElementById("previewText").style.fontWeight = "bold";
      document.getElementById("previewText").style.textDecoration = "none";
      document.getElementById("output").innerHTML = "***" + input + "***";
    }
    if (italic == true && bold == false && underline == true && strikethrough == false) {
      document.getElementById("previewText").style.fontStyle = "italic";
      document.getElementById("previewText").style.fontWeight = "normal";
      document.getElementById("previewText").style.textDecoration = "underline";
      document.getElementById("output").innerHTML = "__*" + input + "*__";
    }
    if (italic == true && bold == false && underline == false && strikethrough == true) {
      document.getElementById("previewText").style.fontStyle = "italic";
      document.getElementById("previewText").style.fontWeight = "normal";
      document.getElementById("previewText").style.textDecoration = "line-through";
      document.getElementById("output").innerHTML = "*~~" + input + "~~*";
    }
    if (italic == false && bold == true && underline == true && strikethrough == false) {
      document.getElementById("previewText").style.fontStyle = "normal";
      document.getElementById("previewText").style.fontWeight = "bold";
      document.getElementById("previewText").style.textDecoration = "underline";
      document.getElementById("output").innerHTML = "__**" + input + "**__";
    }
    if (italic == false && bold == true && underline == false && strikethrough == true) {
      document.getElementById("previewText").style.fontStyle = "normal";
      document.getElementById("previewText").style.fontWeight = "bold";
      document.getElementById("previewText").style.textDecoration = "line-through";
      document.getElementById("output").innerHTML = "**~~" + input + "~~**";
    }
    if (italic == false && bold == false && underline == true && strikethrough == true) {
      document.getElementById("previewText").style.fontStyle = "normal";
      document.getElementById("previewText").style.fontWeight = "normal";
      document.getElementById("previewText").style.textDecoration = "underline line-through";
      document.getElementById("output").innerHTML = "__~~" + input + "~~__";
    }
    if (italic == true && bold == true && underline == true && strikethrough == false) {
      document.getElementById("previewText").style.fontStyle = "italic";
      document.getElementById("previewText").style.fontWeight = "bold";
      document.getElementById("previewText").style.textDecoration = "underline";
      document.getElementById("output").innerHTML = "__***" + input + "***__";
    }
    if (italic == true && bold == false && underline == true && strikethrough == true) {
      document.getElementById("previewText").style.fontStyle = "italic";
      document.getElementById("previewText").style.fontWeight = "normal";
      document.getElementById("previewText").style.textDecoration = "underline line-through";
      document.getElementById("output").innerHTML = "__*~~" + input + "~~*__";
    }
    if (italic == true && bold == true && underline == false && strikethrough == true) {
      document.getElementById("previewText").style.fontStyle = "italic";
      document.getElementById("previewText").style.fontWeight = "bold";
      document.getElementById("previewText").style.textDecoration = "line-through";
      document.getElementById("output").innerHTML = "***~~" + input + "~~***";
    }
    if (italic == false && bold == true && underline == true && strikethrough == true) {
      document.getElementById("previewText").style.fontStyle = "normal";
      document.getElementById("previewText").style.fontWeight = "bold";
      document.getElementById("previewText").style.textDecoration = "underline line-through";
      document.getElementById("output").innerHTML = "__**~~" + input + "~~**__";
    }
    if (italic == true && bold == true && underline == true && strikethrough == true) {
      document.getElementById("previewText").style.fontStyle = "italic";
      document.getElementById("previewText").style.fontWeight = "bold";
      document.getElementById("previewText").style.textDecoration = "underline line-through";
      document.getElementById("output").innerHTML = "__***~~" + input + "~~***__";
    }
  }
});
