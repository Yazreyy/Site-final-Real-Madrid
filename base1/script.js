const player = {
    "name": "mbappe",
    "firstname": "Kylian",
    "poste": "attaquant",
    "nationality": "français",
    "numero": "9",
    "image": "../images/mbappe.png"
}
const mbappelink = document.getElementById("mbappelink");


function loadplayer(player) {
    localStorage.setItem("player", JSON.stringify(player));
}

mbappelink.addEventListener("click" , function(e) { 
      loadplayer(player);
});