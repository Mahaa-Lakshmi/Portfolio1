$('.member-title').click(function(e) {
  console.log("Clicked");
  $(this).next().slideToggle();
  $(this).next().next().next().slideToggle();
})

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}