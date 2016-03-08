$(document).ready(function() {
  alert("Loaded");

  $('.OnStashCell').bind('click', function(e) {
    $(this).css({
      margin:"0"
    });
    $(this).appendTo($('#testCell'));
  });


}, false);
