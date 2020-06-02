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
    var input = $('#input').val();
    if (spoiler == true) {
      var input = "||" + $('#input').val() + "||";
    }
    if (italic == false && bold == false && underline == false && strikethrough == false) {
      document.getElementById("preview").style.fontStyle = "normal";
      document.getElementById("preview").style.fontWeight = "normal";
      document.getElementById("preview").style.textDecoration = "none";
      document.getElementById("output").innerHTML = input;
    }
    if (italic == true && bold == false && underline == false && strikethrough == false) {
      document.getElementById("preview").style.fontStyle = "italic";
      document.getElementById("preview").style.fontWeight = "normal";
      document.getElementById("preview").style.textDecoration = "none";
      document.getElementById("output").innerHTML = "*" + input + "*";
    }
    if (italic == false && bold == true && underline == false && strikethrough == false) {
      document.getElementById("preview").style.fontStyle = "normal";
      document.getElementById("preview").style.fontWeight = "bold";
      document.getElementById("preview").style.textDecoration = "none";
      document.getElementById("output").innerHTML = "**" + input + "**";
    }
    if (italic == false && bold == false && underline == true && strikethrough == false) {
      document.getElementById("preview").style.fontStyle = "normal";
      document.getElementById("preview").style.fontWeight = "normal";
      document.getElementById("preview").style.textDecoration = "underline";
      document.getElementById("output").innerHTML = "__" + input + "__";
    }
    if (italic == false && bold == false && underline == false && strikethrough == true) {
      document.getElementById("preview").style.fontStyle = "normal";
      document.getElementById("preview").style.fontWeight = "normal";
      document.getElementById("preview").style.textDecoration = "line-through";
      document.getElementById("output").innerHTML = "~~" + input + "~~";
    }
    if (italic == true && bold == true && underline == false && strikethrough == false) {
      document.getElementById("preview").style.fontStyle = "italic";
      document.getElementById("preview").style.fontWeight = "bold";
      document.getElementById("preview").style.textDecoration = "none";
      document.getElementById("output").innerHTML = "***" + input + "***";
    }
    if (italic == true && bold == false && underline == true && strikethrough == false) {
      document.getElementById("preview").style.fontStyle = "italic";
      document.getElementById("preview").style.fontWeight = "normal";
      document.getElementById("preview").style.textDecoration = "underline";
      document.getElementById("output").innerHTML = "__*" + input + "*__";
    }
    if (italic == true && bold == false && underline == false && strikethrough == true) {
      document.getElementById("preview").style.fontStyle = "italic";
      document.getElementById("preview").style.fontWeight = "normal";
      document.getElementById("preview").style.textDecoration = "line-through";
      document.getElementById("output").innerHTML = "*~~" + input + "~~*";
    }
    if (italic == false && bold == true && underline == true && strikethrough == false) {
      document.getElementById("preview").style.fontStyle = "normal";
      document.getElementById("preview").style.fontWeight = "bold";
      document.getElementById("preview").style.textDecoration = "underline";
      document.getElementById("output").innerHTML = "__**" + input + "**__";
    }
    if (italic == false && bold == true && underline == false && strikethrough == true) {
      document.getElementById("preview").style.fontStyle = "normal";
      document.getElementById("preview").style.fontWeight = "bold";
      document.getElementById("preview").style.textDecoration = "line-through";
      document.getElementById("output").innerHTML = "**~~" + input + "~~**";
    }
    if (italic == false && bold == false && underline == true && strikethrough == true) {
      document.getElementById("preview").style.fontStyle = "normal";
      document.getElementById("preview").style.fontWeight = "normal";
      document.getElementById("preview").style.textDecoration = "underline line-through";
      document.getElementById("output").innerHTML = "__~~" + input + "~~__";
    }
    if (italic == true && bold == true && underline == true && strikethrough == false) {
      document.getElementById("preview").style.fontStyle = "italic";
      document.getElementById("preview").style.fontWeight = "bold";
      document.getElementById("preview").style.textDecoration = "underline";
      document.getElementById("output").innerHTML = "__***" + input + "***__";
    }
    if (italic == true && bold == false && underline == true && strikethrough == true) {
      document.getElementById("preview").style.fontStyle = "italic";
      document.getElementById("preview").style.fontWeight = "normal";
      document.getElementById("preview").style.textDecoration = "underline line-through";
      document.getElementById("output").innerHTML = "__*~~" + input + "~~*__";
    }
    if (italic == true && bold == true && underline == false && strikethrough == true) {
      document.getElementById("preview").style.fontStyle = "italic";
      document.getElementById("preview").style.fontWeight = "bold";
      document.getElementById("preview").style.textDecoration = "line-through";
      document.getElementById("output").innerHTML = "***~~" + input + "~~***";
    }
    if (italic == false && bold == true && underline == true && strikethrough == true) {
      document.getElementById("preview").style.fontStyle = "normal";
      document.getElementById("preview").style.fontWeight = "bold";
      document.getElementById("preview").style.textDecoration = "underline line-through";
      document.getElementById("output").innerHTML = "__**~~" + input + "~~**__";
    }
    if (italic == true && bold == true && underline == true && strikethrough == true) {
      document.getElementById("preview").style.fontStyle = "italic";
      document.getElementById("preview").style.fontWeight = "bold";
      document.getElementById("preview").style.textDecoration = "underline line-through";
      document.getElementById("output").innerHTML = "__***~~" + input + "~~***__";
    }
  }
});
