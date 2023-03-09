
function toggleNa() {
document.body.classList.toggle("nav-open");
}


//alt det under her om SCROLL og gjøre//
//koden handler pretty much om at den leser etter når viwport(brukersn syn) insecter med et element med "hidden" tag når dette skjer skifter den det hidden tagget til show som gjør så elementer flyr inn//
const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry)=>{
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
    });
});
const hiddenElements = document.querySelectorAll(".hidden"); //velger alle class="hidden" elementer//
hiddenElements.forEach((el) => observer.observe(el))





//alt under her er om svar bakgrunn og at det skal saves//

function toggleBackground(elementName) {
  var element = document.querySelector(elementName);
  element.classList.toggle("svartS");

  // Lagrer verdien til en lokal variabel
  var value = element.classList.contains("svartS");

  // Lagrer verdien i session storage
  sessionStorage.setItem("backgroundToggle", value);
}

// Sjekker session storage når siden lastes inn
var savedValue = sessionStorage.getItem("backgroundToggle");
if (savedValue === "true") {
  var element = document.querySelector("body");
  element.classList.add("svartS");
}