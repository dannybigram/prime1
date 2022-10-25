$(".skillsbtn").click(function(){
  $(".skills").css("display", "block");
  $(".experience").css("display", "none");
  $(".education").css("display", "none");
});
$(".experiencebtn").click(function(){
  $(".skills").css("display", "none");
  $(".experience").css("display", "block");
  $(".education").css("display", "none");
});
$(".educationbtn").click(function(){
  $(".skills").css("display", "none");
  $(".experience").css("display", "none");
  $(".education").css("display", "block");
});
$(".fa-bars").click(function () {
  $(".container nav ul").css("max-height", "100%");
  $(".fa-bars").fadeOut();
  $(".fa-xmark").fadeIn();
})
$(".fa-xmark").click(function () {
  $(".container nav ul").css("max-height", "0");
  $(".fa-xmark").fadeOut();
  $(".fa-bars").fadeIn();
})
$(".fa-sun").click(function () {
  $("body").css("background-color", "#2C2C2C");
  $(".fa-sun").fadeOut();
  $(".fa-moon").fadeIn();
})
$(".fa-moon").click(function () {
  $("body").css("background-color", "#000");
  $(".fa-moon").fadeOut();
  $(".fa-sun").fadeIn();
})
