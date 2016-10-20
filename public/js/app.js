$(document).foundation()
// $('#search').foundation('close');
// $('#signIn').foundation('open');



var counter = 0;

$("#plus").click(function(){
  counter++;
  console.log(counter);
  $("#count").text(counter);
});

$("#minus").click(function(){
  counter--;
  $("#count").text(counter);
});
