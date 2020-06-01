function copyText() {
  var copyText = $('#output').val();
  navigator.clipboard.writeText(copyText);
}
