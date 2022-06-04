function toggleTable() {
    table = document.getElementById("table").classList;
    table.contains("hidden") ? table.remove("hidden") : table.add("hidden");
}

function toggleNav() {
    nav = document.getElementById("nav").classList;
    nav.contains("active") ? nav.remove("active") : nav.add("active");
}