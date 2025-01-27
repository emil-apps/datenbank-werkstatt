var version_string = "Version 1.0.0.0 (Januar 2025)";

/* Kontextmenu deaktivieren */
document.addEventListener("contextmenu", (e)=>{
    e.preventDefault();
});

/* Einstellungen */
document.getElementById("einstellungen-btn").addEventListener("click", ()=>{
    new Audio("select.wav").play();
    
    document.getElementById("settings-container").classList.remove("hidden");
});
document.getElementById("settings-back-btn").addEventListener("click", ()=>{
    new Audio("select.wav").play();
    document.getElementById("settings-container").classList.add("hidden");
});

/* Hauptmenü */
var menu = document.getElementById("menu");
var taskname = document.getElementById("name");
var home_btn = document.getElementById("hauptmenu-btn");
var panel1 = document.getElementById("p-klassenkartedatensatz");
var panel2 = document.getElementById("p-sqlabfrage");

taskname.innerHTML = version_string;

document.getElementById("klassenkarte-zu-datensatz").addEventListener("click", ()=>{
    new Audio("select.wav").play();

    menu.classList.add("hidden");
    taskname.innerHTML = "Klassenkarte &lt;=&gt; Datensatz";
    home_btn.classList.remove("hidden");

    panel1.classList.remove("hidden");
});

/* Klassenkarte & Datensatz */
document.getElementById("attribute").addEventListener("keyup", ()=>{
    var result = document.getElementById("klassenname").value;

    

    document.getElementById("datensatz").innerHTML = result;
});

document.getElementById("attribute").dispatchEvent(new Event("change"));