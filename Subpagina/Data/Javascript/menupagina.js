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

if (product === 'caviar') {
    caviar = caviar + 1;
    totaalCaviar = totaalCaviar + aantal;
}

if (product === 'crab') {
    crab = crab + 1;
    totaalCrab = totaalCrab + aantal;
}

if (product === 'filetMignon') {
    filetMignon = filetMignon + 1;
    totaalFiletmignon = totaalFiletmignon + aantal;
}

if (product === 'kampachi') {
    kampachi = kampachi + 1;
    totaalKampachi = totaalKampachi + aantal;
}

if (product === 'langoustine') {
    langoustine = langoustine + 1;
    totaalLangoustine = totaalLangoustine + aantal;
}

if (product === 'lobster') {
    lobster = lobster + 1;
    totaalLobster = totaalLobster + aantal;
}

if (product === 'mesclunSalad') {
    mesclunsalad = mesclunsalad + 1;
    totaalMesclunsalad = totaalMesclunsalad + aantal;
}

if (product === 'octopus') {
    octopus = octopus + 1;
    totaalOctopus = totaalOctopus + aantal;
}

if (product === 'oysterUni') {
    oysteruni = oysteruni + 1;
    totaalOysteruni = totaalOysteruni + aantal;
}

if (product === 'oyster') {
    oyster = oyster + 1;
    totaalOyster = totaalOyster + aantal;
}

if (product === 'redSnapper') {
    redsnapper = redsnapper + 1;
    totaalRedsnapper = totaalRedsnapper + aantal;
}

if (product === 'salmon') {
    salmon = salmon + 1;
    totaalSalmon = totaalSalmon + aantal;
}

if (product === 'scallopCaviar') {
    scallopcaviar = scallopcaviar + 1;
    totaalScallopcaviar = totaalScallopcaviar + aantal;
}

if (product === 'scallop') {
    scallop = scallop + 1;
    totaalScallop = totaalScallop + aantal;
}

if (product === 'shellfishMedley') {
    shellfishmedley = shellfishmedley + 1;
    totaalShellfishmedley = totaalShellfishmedley + aantal;
}

if (product === 'tasmanianSeaTrout') {
    tasmanianseatrout = tasmanianseatrout + 1;
    totaalTasmanianseatrout = totaalTasmanianseatrout + aantal;
}

if (product === 'tuna') {
    tuna = tuna + 1;
    totaalTuna = totaalTuna + aantal;
}

if (product === 'tunaUrchin') {
    tunaurchin = tunaurchin + 1;
    totaalTunaurchin = totaalTunaurchin + aantal;
}

if (product === 'tapas') {
    tapas = tapas + 1;
    totaalTapas = totaalTapas + aantal;
}

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
document.getElementById("prijsBlackBass").value = totaalBlackbass;
document.getElementById("prijsCaviar").value = totaalCaviar;
document.getElementById("prijsCrab").value = totaalCrab;
document.getElementById("prijsFiletMignon").value = totaalFiletmignon;
document.getElementById("prijsKampachi").value = totaalKampachi;
document.getElementById("prijsLangoustine").value = totaalLangoustine;
document.getElementById("prijsLobster").value = totaalLobster;
document.getElementById("prijsMeslunSalad").value = totaalMesclunsalad;
document.getElementById("prijsOctopus").value = totaalOctopus;
document.getElementById("prijsOysterUni").value = totaalOysteruni;
document.getElementById("prijsOyster").value = totaalOyster;
document.getElementById("prijsRedSnapper").value = totaalRedsnapper;
document.getElementById("prijsSalmon").value = totaalSalmon;
document.getElementById("prijsScallopCaviar").value = totaalScallopcaviar;
document.getElementById("prijsScallop").value = totaalScallop;
document.getElementById("prijsShellfishMedley").value = totaalShellfishmedley;
document.getElementById("prijsTasmanianSeaTrout").value = totaalTasmanianseatrout;
document.getElementById("prijsTuna").value = totaalTuna;
document.getElementById("prijsTunaUrchin").value = totaalTunaurchin;
document.getElementById("prijsTapas").value = totaalTapas;
}

let verwijderProduct = function(product, aantal) {

}