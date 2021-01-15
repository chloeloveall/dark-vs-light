$(document).ready(function() {
  $("button#dark-background").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $("button#light-background").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });

  $("div#unclicked").click(function() {
    $("div#unclicked").removeClass();
    $("div#unclicked").addClass("click-highlight");
  })

});