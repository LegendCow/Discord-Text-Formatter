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
  $("#input").bind('paste', function() {
    setTimeout(function() {
    updateValues();
    }, 100);
  });
  function updateValues() {
    var input = $('#input').val();
    $('#output').html(input);
    $('#preview').html(input);
  }
});
