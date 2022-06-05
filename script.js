//redundant, potentiell tilläggning
/*function toggleTable() {
    table = document.getElementById("table").classList;
    table.contains("hidden") ? table.remove("hidden") : table.add("hidden");
}*/
//redundant, potentiell tilläggning

//togglar nav via hamburgarmeny
function toggleNav() {
    nav = document.getElementById("nav").classList;
    nav.contains("active") ? nav.remove("active") : nav.add("active");
}
//togglar nav via hamburgarmeny


//öppnar listan i hamburgarmeny på mobil
function openList(elem) {
    var parent = elem.parentNode;
    var dropDown = parent.lastElementChild;
    dropDown.classList.toggle('isOpen');
}
//öppnar listan i hamburgarmeny på mobil


//gör så du måste dubbelklicka för att öppna länk i mobilläge
const mediaQuery = window.matchMedia('(max-width: 1650px');
if (mediaQuery.matches) {
    Array.from(document.getElementsByClassName('main__link')).forEach(
        function(element) {
            element.removeAttribute("href");
            element.setAttribute("onclick", "openList(this)");
        }
    );
}
//gör så du måste dubbelklicka för att öppna länk i mobilläge