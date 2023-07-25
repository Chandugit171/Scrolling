// Pure JavaScript


document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    var link = document.getElementById("myLink");
    var div = document.getElementById("myDiv");

    link.addEventListener("click", function(event) {
     event.preventDefault(); // Prevent the default anchor behavior

  // Toggle the display of the div
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
});

// jQuery
$("#myLink").click(function(event) {
  event.preventDefault();

  $("#myDiv").toggle();
});

  });
  
