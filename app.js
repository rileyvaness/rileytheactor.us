const intro = document.getElementById("intro");
const about = document.getElementById("about");
const aboutButton= document.getElementById("aboutButton");
const backArrow = document.getElementById("backArrow");
const backArrowOne= document.getElementById("backArrowOne");
const backArrowTwo= document.getElementById("backArrowTwo");
const portfolioButton = document.getElementById("portfolioButton");
const portfolio = document.getElementById("portfolio");
const contactButton = document.getElementById("contactButton");
const contact = document.getElementById("contact");

function aboutMe () {
    intro.style.display = "none";
    about.style.display = "block";
}
aboutButton.addEventListener("click", aboutMe);

function portfolioMe () {
    intro.style.display = "none";
    portfolio.style.display = "block";
}
portfolioButton.addEventListener("click", portfolioMe);

function contactMe () {
    intro.style.display = "none";
   contact.style.display = "block";
}
contactButton.addEventListener("click", contactMe);

function returnMe () {
    intro.style.display = "block";
   
    about.style.display = "none";
}
backArrow.addEventListener("click", returnMe);

function returnMeOne () {
    intro.style.display = "block";
   
    portfolio.style.display = "none";
}
backArrowOne.addEventListener("click", returnMeOne);

function returnMeTwo () {
    intro.style.display = "block";
   
    contact.style.display = "none";
}
backArrowTwo.addEventListener("click", returnMeTwo);