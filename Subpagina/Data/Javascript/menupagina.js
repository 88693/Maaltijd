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
let prijs = 0;

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

let koopProduct = function(product, aantal) {

if (product === 'artichoke') {
    artichoke = artichoke + 1;
    totaalArtichoke = totaalArtichoke + aantal;
    prijs = prijs + aantal;
}

if (product === 'blackBass') {
    blackbass = blackbass + 1;
    totaalBlackbass = totaalBlackbass + aantal;
    prijs = prijs + aantal;
}

if (product === 'caviar') {
    caviar = caviar + 1;
    totaalCaviar = totaalCaviar + aantal;
    prijs = prijs + aantal;
}

if (product === 'crab') {
    crab = crab + 1;
    totaalCrab = totaalCrab + aantal;
    prijs = prijs + aantal;
}

if (product === 'filetMignon') {
    filetMignon = filetMignon + 1;
    totaalFiletmignon = totaalFiletmignon + aantal;
    prijs = prijs + aantal;
}

if (product === 'kampachi') {
    kampachi = kampachi + 1;
    totaalKampachi = totaalKampachi + aantal;
    prijs = prijs + aantal;
}

if (product === 'langoustine') {
    langoustine = langoustine + 1;
    totaalLangoustine = totaalLangoustine + aantal;
    prijs = prijs + aantal;
}

if (product === 'lobster') {
    lobster = lobster + 1;
    totaalLobster = totaalLobster + aantal;
    prijs = prijs + aantal;
}

if (product === 'mesclunSalad') {
    mesclunsalad = mesclunsalad + 1;
    totaalMesclunsalad = totaalMesclunsalad + aantal;
    prijs = prijs + aantal;
}

if (product === 'octopus') {
    octopus = octopus + 1;
    totaalOctopus = totaalOctopus + aantal;
    prijs = prijs + aantal;
}

if (product === 'oysterUni') {
    oysteruni = oysteruni + 1;
    totaalOysteruni = totaalOysteruni + aantal;
    prijs = prijs + aantal;
}

if (product === 'oyster') {
    oyster = oyster + 1;
    totaalOyster = totaalOyster + aantal;
    prijs = prijs + aantal;
}

if (product === 'redSnapper') {
    redsnapper = redsnapper + 1;
    totaalRedsnapper = totaalRedsnapper + aantal;
    prijs = prijs + aantal;
}

if (product === 'salmon') {
    salmon = salmon + 1;
    totaalSalmon = totaalSalmon + aantal;
    prijs = prijs + aantal;
}

if (product === 'scallopCaviar') {
    scallopcaviar = scallopcaviar + 1;
    totaalScallopcaviar = totaalScallopcaviar + aantal;
    prijs = prijs + aantal;
}

if (product === 'scallop') {
    scallop = scallop + 1;
    totaalScallop = totaalScallop + aantal;
    prijs = prijs + aantal;
}

if (product === 'shellfishMedley') {
    shellfishmedley = shellfishmedley + 1;
    totaalShellfishmedley = totaalShellfishmedley + aantal;
    prijs = prijs + aantal;
}

if (product === 'tasmanianSeaTrout') {
    tasmanianseatrout = tasmanianseatrout + 1;
    totaalTasmanianseatrout = totaalTasmanianseatrout + aantal;
    prijs = prijs + aantal;
}

if (product === 'tuna') {
    tuna = tuna + 1;
    totaalTuna = totaalTuna + aantal;
    prijs = prijs + aantal;
}

if (product === 'tunaUrchin') {
    tunaurchin = tunaurchin + 1;
    totaalTunaurchin = totaalTunaurchin + aantal;
    prijs = prijs + aantal;
}

if (product === 'tapas') {
    tapas = tapas + 1;
    totaalTapas = totaalTapas + aantal;
    prijs = prijs + aantal;
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
document.getElementById("totaal").value = prijs;
}

let verwijderProduct = function(product, aantal) {
    

if (product === 'artichoke') {
    artichoke = artichoke - 1 > 0 ? artichoke-1 : 0;
    totaalArtichoke = totaalArtichoke - aantal > 0 ? totaalArtichoke-aantal : 0;
    prijs = prijs - aantal > 0 ? prijs-aantal : 0;

}

if (product === 'blackBass') {
    blackbass = blackbass - 1 > 0 ? blackbass-1 : 0;
    totaalBlackbass = totaalBlackbass - aantal > 0 ? totaalBlackbass-aantal : 0;
    prijs = prijs - aantal > 0 ? prijs-aantal : 0;
}

if (product === 'caviar') {
    caviar = caviar - 1 > 0 ? caviar-1 : 0;
    totaalCaviar = totaalCaviar - aantal > 0 ? totaalCaviar-aantal : 0;
    prijs = prijs - aantal > 0 ? prijs-aantal : 0;
}

if (product === 'crab') {
    crab = crab - 1 > 0 ? crab-1 : 0;
    totaalCrab = totaalCrab - aantal > 0 ? totaalCrab-aantal : 0;
    prijs = prijs - aantal > 0 ? prijs-aantal : 0;
}

if (product === 'filetMignon') {
    filetMignon = filetMignon - 1 > 0 ? filetMignon-1 : 0;
    totaalFiletmignon = totaalFiletmignon - aantal > 0 ? totaalFiletmignon-aantal : 0;
    prijs = prijs - aantal > 0 ? prijs-aantal : 0;
}

if (product === 'kampachi') {
    kampachi = kampachi - 1 > 0 ? kampachi-1 : 0;
    totaalKampachi = totaalKampachi - aantal > 0 ? totaalKampachi-aantal : 0;
    prijs = prijs - aantal > 0 ? prijs-aantal : 0;
}

if (product === 'langoustine') {
    langoustine = langoustine - 1 > 0 ? langoustine-1 : 0;
    totaalLangoustine = totaalLangoustine - aantal > 0 ? totaalLangoustine-aantal : 0;
    prijs = prijs - aantal > 0 ? prijs-aantal : 0;
}

if (product === 'lobster') {
    lobster = lobster - 1 > 0 ? lobster-1 : 0;
    totaalLobster = totaalLobster - aantal > 0 ? totaalLobster-aantal : 0;
    prijs = prijs - aantal > 0 ? prijs-aantal : 0;
}

if (product === 'mesclunSalad') {
    mesclunsalad = mesclunsalad - 1 > 0 ? mesclunsalad-1 : 0;
    totaalMesclunsalad = totaalMesclunsalad - aantal > 0 ? totaalMesclunsalad-aantal : 0;
    prijs = prijs - aantal > 0 ? prijs-aantal : 0;
}

if (product === 'octopus') {
    octopus = octopus - 1 > 0 ? octopus-1 : 0;
    totaalOctopus = totaalOctopus - aantal > 0 ? totaalOctopus-aantal : 0;
    prijs = prijs - aantal > 0 ? prijs-aantal : 0;
}

if (product === 'oysterUni') {
    oysteruni = oysteruni - 1 > 0 ? oysteruni-1 : 0;
    totaalOysteruni = totaalOysteruni - aantal > 0 ? totaalOysteruni-aantal : 0;
    prijs = prijs - aantal > 0 ? prijs-aantal : 0;
}

if (product === 'oyster') {
    oyster = oyster - 1 > 0 ? oyster-1 : 0;
    totaalOyster = totaalOyster - aantal > 0 ? totaalOyster-aantal : 0;
    prijs = prijs - aantal > 0 ? prijs-aantal : 0;
}

if (product === 'redSnapper') {
    redsnapper = redsnapper - 1 > 0 ? redsnapper-1 : 0;
    totaalRedsnapper = totaalRedsnapper - aantal > 0 ? totaalRedsnapper-aantal : 0;
    prijs = prijs - aantal > 0 ? prijs-aantal : 0;
}

if (product === 'salmon') {
    salmon = salmon - 1 > 0 ? salmon-1 : 0;
    totaalSalmon = totaalSalmon - aantal > 0 ? totaalSalmon-aantal : 0;
    prijs = prijs - aantal > 0 ? prijs-aantal : 0;
}

if (product === 'scallopCaviar') {
    scallopcaviar = scallopcaviar - 1 > 0 ? scallopcaviar-1 : 0;
    totaalScallopcaviar = totaalScallopcaviar - aantal > 0 ? totaalScallopcaviar-aantal : 0;
    prijs = prijs - aantal > 0 ? prijs-aantal : 0;
}

if (product === 'scallop') {
    scallop = scallop - 1 > 0 ? scallop-1 : 0;
    totaalScallop = totaalScallop - aantal > 0 ? totaalScallop-aantal : 0;
    prijs = prijs - aantal > 0 ? prijs-aantal : 0;
}

if (product === 'shellfishMedley') {
    shellfishmedley = shellfishmedley - 1 > 0 ? shellfishmedley-1 : 0;
    totaalShellfishmedley = totaalShellfishmedley - aantal > 0 ? totaalShellfishmedley-aantal : 0;
    prijs = prijs - aantal > 0 ? prijs-aantal : 0;
}

if (product === 'tasmanianSeaTrout') {
    tasmanianseatrout = tasmanianseatrout - 1 > 0 ? tasmanianseatrout-1 : 0;
    totaalTasmanianseatrout = totaalTasmanianseatrout - aantal > 0 ? totaalTasmanianseatrout-aantal : 0;
    prijs = prijs - aantal > 0 ? prijs-aantal : 0;
}

if (product === 'tuna') {
    tuna = tuna - 1 > 0 ? tuna-1 : 0;
    totaalTuna = totaalTuna - aantal > 0 ? totaalTuna-aantal : 0;
    prijs = prijs - aantal > 0 ? prijs-aantal : 0;
}

if (product === 'tunaUrchin') {
    tunaurchin = tunaurchin - 1 > 0 ? tunaurchin-1 : 0;
    totaalTunaurchin = totaalTunaurchin - aantal > 0 ? totaalTunaurchin-aantal : 0;
    prijs = prijs - aantal > 0 ? prijs-aantal : 0;
}

if (product === 'tapas') {
    tapas = tapas - 1 > 0 ? tapas-1 : 0;
    totaalTapas = totaalTapas - aantal > 0 ? totaalTapas-aantal : 0;
    prijs = prijs - aantal > 0 ? prijs-aantal : 0;

}

document.getElementById("aantalArtichoke").value = artichoke > 0 ? artichoke : 0;
document.getElementById("aantalBlackBass").value = blackbass > 0 ? blackbass : 0;
document.getElementById("aantalCaviar").value = caviar > 0 ? caviar : 0;
document.getElementById("aantalCrab").value = crab > 0 ? crab : 0;
document.getElementById("aantalFiletMignon").value = filetMignon > 0 ? filetMignon : 0;
document.getElementById("aantalKampachi").value = kampachi > 0 ? kampachi : 0;
document.getElementById("aantalLangoustine").value = langoustine > 0 ? langoustine : 0;
document.getElementById("aantalLobster").value = lobster > 0 ? lobster : 0;
document.getElementById("aantalMesclunSalad").value = mesclunsalad > 0 ? mesclunsalad : 0;
document.getElementById("aantalOctopus").value = octopus > 0 ? octopus : 0;
document.getElementById("aantalOysterUni").value = oysteruni > 0 ? oysteruni : 0;
document.getElementById("aantalOyster").value = oyster;
document.getElementById("aantalRedSnapper").value = redsnapper > 0 ? redsnapper : 0;
document.getElementById("aantalSalmon").value = salmon > 0 ? salmon : 0;
document.getElementById("aantalScallopCaviar").value = scallopcaviar > 0 ? scallopcaviar : 0;
document.getElementById("aantalScallop").value = scallop > 0 ? scallop : 0;
document.getElementById("aantalShellfishMedley").value = shellfishmedley > 0 ? shellfishmedley : 0;
document.getElementById("aantalTasmanianSeaTrout").value = tasmanianseatrout > 0 ? tasmanianseatrout : 0;
document.getElementById("aantalTuna").value = tuna > 0 ? tuna : 0;
document.getElementById("aantalTunaUrchin").value = tunaurchin > 0 ? tunaurchin : 0;
document.getElementById("aantalTapas").value = tapas > 0 ? tapas : 0;

document.getElementById("prijsArtichoke").value = totaalArtichoke > 0 ? totaalArtichoke : 0;
document.getElementById("prijsBlackBass").value = totaalBlackbass > 0 ? totaalBlackbass : 0;
document.getElementById("prijsCaviar").value = totaalCaviar > 0 ? totaalCaviar : 0;
document.getElementById("prijsCrab").value = totaalCrab > 0 ? totaalCrab : 0;
document.getElementById("prijsFiletMignon").value = totaalFiletmignon > 0 ? totaalFiletmignon : 0;
document.getElementById("prijsKampachi").value = totaalKampachi > 0 ? totaalKampachi : 0;
document.getElementById("prijsLangoustine").value = totaalLangoustine > 0 ? totaalLangoustine : 0;
document.getElementById("prijsLobster").value = totaalLobster > 0 ? totaalLobster : 0;
document.getElementById("prijsMeslunSalad").value = totaalMesclunsalad > 0 ? totaalMesclunsalad : 0;
document.getElementById("prijsOctopus").value = totaalOctopus > 0 ? totaalOctopus : 0;
document.getElementById("prijsOysterUni").value = totaalOysteruni > 0 ? totaalOysteruni : 0;
document.getElementById("prijsOyster").value = totaalOyster > 0 ? totaalOyster : 0;
document.getElementById("prijsRedSnapper").value = totaalRedsnapper > 0 ? totaalRedsnapper : 0;
document.getElementById("prijsSalmon").value = totaalSalmon > 0 ? totaalSalmon : 0;
document.getElementById("prijsScallopCaviar").value = totaalScallopcaviar > 0 ? totaalScallopcaviar : 0;
document.getElementById("prijsScallop").value = totaalScallop > 0 ? totaalScallop : 0;
document.getElementById("prijsShellfishMedley").value = totaalShellfishmedley > 0 ? totaalShellfishmedley : 0;
document.getElementById("prijsTasmanianSeaTrout").value = totaalTasmanianseatrout > 0 ? totaalTasmanianseatrout : 0;
document.getElementById("prijsTuna").value = totaalTuna > 0 ? totaalTuna : 0;
document.getElementById("prijsTunaUrchin").value = totaalTunaurchin > 0 ? totaalTunaurchin : 0;
document.getElementById("prijsTapas").value = totaalTapas;
document.getElementById("totaal").value = prijs > 0 ? prijs : 0;
}

function bestel() {
    if (prijs == 0) {
        window.alert("U heeft geen producten geselecteerd.");
    } else if (prijs > 0){
        window.alert("Uw bestelling is geplaatst. Uw totaal bedraagt: " + prijs + " euro. Uw bestelling wordt zo snel mogelijk bezorgd.");
    }
}