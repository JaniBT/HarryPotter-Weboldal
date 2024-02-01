function navBar() {
    const x = document.getElementById("myNavigaciosSav");
    if (x.className === "navigacios-sav") {
        x.className += " responsive";
    } else {
        x.className = "navigacios-sav";
    }
}