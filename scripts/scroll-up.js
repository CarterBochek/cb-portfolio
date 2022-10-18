//Create scrollBtn variable and make it equal scroll-btn
const scrollBtn = document.getElementById('scroll-btn');
//Create scrollBotBtn variable and make it equal scroll-bot-btn
//let scrollBotBtn = document.getElementById('scroll-bot-btn')
//when the user clicks this button scroll them to the top of the webpage
function scrollUp () {
 window.scroll({top: 0, behavior: "smooth"})
}
//when the user is at top of page, button will be hidden
const showOnPx = 100;
const scrollContainer = () => {
    return document.documentElement || document.body;
  };
document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
      scrollBtn.classList.remove("hidden")
    } else {
      scrollBtn.classList.add("hidden")
    }
  })
// function scrollDown() {
//   window.scroll({bottom: 100, behavior: "smooth"});
// }