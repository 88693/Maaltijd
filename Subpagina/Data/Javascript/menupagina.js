let artichoke = 0;
let blackbass = 0;
let caviar = 0;
let crab = 0;
let filetMignon = 0;
let kampachi = 0;
let langoustine = 0;
let lobster = 0;
let mesclunsalad = 0;
let octopus = 0;
let oysteruni = 0;
let oyster = 0;
let redsnapper = 0;
let salmon = 0;
let scallopcaviar = 0;
let scallop = 0;
let shellfishmedley = 0;
let tasmanianseatrout = 0;
let tuna = 0;
let tunaurchin = 0;
let tapas = 0;

let totaalArtichoke = 0;
let totaalBlackbass = 0;
let totaalCaviar = 0;
let totaalCrab = 0;
let totaalFiletmignon = 0;
let totaalKampachi = 0;
let totaalLangoustine = 0;
let totaalLobster = 0;
let totaalMesclunsalad = 0;
let totaalOctopus = 0;
let totaalOysteruni = 0;
let totaalOyster = 0;
let totaalRedsnapper = 0;
let totaalSalmon = 0;
let totaalScallopcaviar = 0;
let totaalScallop = 0;
let totaalShellfishmedley = 0;
let totaalTasmanianseatrout = 0;
let totaalTuna = 0;
let totaalTunaurchin = 0;
let totaalTapas = 0;

document.getElementById("aantalArtichoke").value = artichoke;
document.getElementById("aantalBlackBass").value = blackbass;
document.getElementById("aantalCaviar").value = caviar;
document.getElementById("aantalCrab").value = crab;
document.getElementById("aantalFiletMignon").value = filetMignon;
document.getElementById("aantalKampachi").value = kampachi;
document.getElementById("aantalLangoustine").value = langoustine;
document.getElementById("aantalLobster").value = lobster;
document.getElementById("aantalMesclunSalad").value = mesclunsalad;
document.getElementById("aantalOctopus").value = octopus;
document.getElementById("aantalOysterUni").value = oysteruni;
document.getElementById("aantalOyster").value = oyster;
document.getElementById("aantalRedSnapper").value = redsnapper;
document.getElementById("aantalSalmon").value = salmon;
document.getElementById("aantalScallopCaviar").value = scallopcaviar;
document.getElementById("aantalScallop").value = scallop;
document.getElementById("aantalShellfishMedley").value = shellfishmedley;
document.getElementById("aantalTasmanianSeaTrout").value = tasmanianseatrout;
document.getElementById("aantalTuna").value = tuna;
document.getElementById("aantalTunaUrchin").value = tunaurchin;
document.getElementById("aantalTapas").value = tapas;

document.getElementById("prijsArtichoke").value = totaalArtichoke;

let koopProduct = function(product, aantal) {

    console.log(product, aantal, artichoke)

if (product === 'artichoke') {
    artichoke = artichoke + 1;
    totaalArtichoke = totaalArtichoke + aantal;
}

if (product === 'blackBass') {
    blackbass = blackbass + 1;
    totaalBlackbass = totaalBlackbass + aantal;
}

document.getElementById("aantalArtichoke").value = artichoke;
document.getElementById("aantalBlackBass").value = blackbass;
}

