function switchMenu(obj) {
    var el = document.getElementById(obj);
    if ( el.style.display != "none" ) {
        el.style.display = 'none';
    }
    else {
        el.style.display = '';
    }
}
function collapse(obj)
{
    var el = document.getElementById(obj);
    if ( el )
        el.style.display = 'none';
}
function expand(obj)
{
    var el = document.getElementById(obj);
    if ( el )
        el.style.display = '';
}


window.onload = collapseAll;

function collapseAll()
{
    //collapse("");
    //collapse("libcod");
    collapse("AI");
    collapse("Animation");
    collapse("BadPlaces");
    collapse("Clans");
    collapse("Client");
    collapse("Control");
    collapse("Damage");
    collapse("Debug");
    collapse("Dvars");
    collapse("Effects");
    collapse("Entity");
    collapse("File");
    collapse("HUD");
    collapse("IW4x");
    collapse("Level");
    collapse("Math");
    collapse("Menus");
    collapse("Missile");
    collapse("Motion");
    collapse("Objective");
    collapse("Physics");
    collapse("Player");
    collapse("Precache");
    collapse("Rumble");
    collapse("Save");
    collapse("Sentient");
    collapse("Sound");
    collapse("Spawn");
    collapse("String");
    collapse("System");
    collapse("Teams");
    collapse("Trace");
    collapse("Triggers");
    collapse("Turret");
    collapse("Variables");
    collapse("Vector");
    collapse("Vehicles");
    collapse("Weapons");
}
function expandAll()
{
    //expand("");
    //expand("libcod");
    expand("AI");
    expand("Animation");
    expand("BadPlaces");
    expand("Clans");
    expand("Client");
    expand("Control");
    expand("Damage");
    expand("Debug");
    expand("Dvars");
    expand("Effects");
    expand("Entity");
    expand("File");
    expand("HUD");
    expand("IW4x");
    expand("Level");
    expand("Math");
    expand("Menus");
    expand("Missile");
    expand("Motion");
    expand("Objective");
    expand("Physics");
    expand("Player");
    expand("Precache");
    expand("Rumble");
    expand("Save");
    expand("Sentient");
    expand("Sound");
    expand("Spawn");
    expand("String");
    expand("System");
    expand("Teams");
    expand("Trace");
    expand("Triggers");
    expand("Turret");
    expand("Variables");
    expand("Vector");
    expand("Vehicles");
    expand("Weapons");
}