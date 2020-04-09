// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");



// Déplacer les aiguilles 
function demarrerLaMontre() {

    //Extraire l'heure actuel à l'aide de l'objet Date()
    const actualDate = new Date();

    //Ajouter l'heure , minite , seconde  dans des varaiables
    // var heure = actualDate.getHours();
    var minute = actualDate.getMinutes();
    var seconde = actualDate.getSeconds();

    // Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
     // Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
     // 360° dans le rond & 60s/min & 1min = 360° ==> on veut ° pour every sec
    const secDeg = ((seconde / 60) * 360);
    const minDeg = ((minute / 60) * 360) + ((seconde / 60) + 6) ;
    // const hrDeg = ((heure / 12) * 360) + ((minute / 60) * 360);

    // Déplacer les aiguilles 
    AIGUILLESEC.style.transform=`rotate(${secDeg}deg)`
    AIGUILLEMIN.style.transform=`rotate(${minDeg}deg)`
    // AIGUILLEHR.style.transform=`rotate(${hrDeg}deg)`

}

// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);