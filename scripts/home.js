/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    let navMenu= document.getElementById("nav-menu");
    if (navMenu.style.display === "block") {
      navMenu.style.display = "none";
    } else {
      navMenu.style.display = "block";
    }
  } 