const cmimiLibra = 12.50;
const sasiaLibra = 3;

const cmimiFletore = 1.80;
const sasiaFletore = 4;

let kostoLibra = cmimiLibra * sasiaLibra;
let kostoFletore = cmimiFletore * sasiaFletore;

let shumaTotale = kostoLibra + kostoFletore;
shumaTotale += 2.50; 

console.log("Kosto e librave:", kostoLibra);
console.log("Kosto e fletoreve:", kostoFletore);
console.log("Fatura totale (përfshirë transportin):", shumaTotale);





let aktiviteti = 18;
let projekti = 24;
let provimi = 43;

let totaliPikeve = aktiviteti + projekti + provimi;
let perqindja = (totaliPikeve / 100) * 100; 

console.log("Totali fillestar:", totaliPikeve);
console.log("Përqindja e arritur:", perqindja + "%");


provimi = 48;
let totaliRij = aktiviteti + projekti + provimi;
let perqindjaRe = totaliRij;

console.log("--- Pas korrigjimit të provimit ---");
console.log("Totali i ri:", totaliRij);
console.log("Përqindja e re:", perqindjaRe + "%");



let akomodimi = 42;
let transporti = 42; 
let ushqimi = 57;
let nrPersonave = 3;

let kostoTotale = akomodimi + transporti + ushqimi;
let pjesaPerPerson = kostoTotale / nrPersonave;

let buxhetiFillestar = 80;
let mbetjaSecilit = buxhetiFillestar - pjesaPerPerson;

console.log("Kosto totale e udhëtimit është " + kostoTotale + " euro.");
console.log("Pjesa që i takon secilit person është " + pjesaPerPerson + " euro.");
console.log("Nëse secili ka buxhet prej 80 eurosh, secilit i mbeten " + mbetjaSecilit + " euro.");




let sasiaProdukti1 = 2;
let cmimiProdukti1 = 35;

let sasiaProdukti2 = 1;
let cmimiProdukti2 = 24;

let cmimiParaZbritjes = (sasiaProdukti1 * cmimiProdukti1) + (sasiaProdukti2 * cmimiProdukti2);
console.log("Hapi 1 - Çmimi para zbritjes:", cmimiParaZbritjes);

let shumaZbritjes = cmimiParaZbritjes * 0.15;
console.log("Hapi 2 - Shuma e zbritjes prej 15%:", shumaZbritjes);

let cmimiPasZbritjes = cmimiParaZbritjes - shumaZbritjes;
console.log("Hapi 3 - Çmimi pas zbritjes:", cmimiPasZbritjes);

let vleraPerrfundimtare = cmimiPasZbritjes + 4; // Shtohet 4 € transport
console.log("Hapi 4 - Vlera përfundimtare (me 4 € transport):", vleraPerrfundimtare);




let v1 = "25";
let v2 = "17";
let v3 = "8";

// Mbledhja pa konvertim (shkakton bashkim stringjesh)
let rezultatiPaKonvertim = v1 + v2 + v3;
console.log("Rezultati pa konvertim:", rezultatiPaKonvertim);
// Shpjegim: Dejton si stringje, prandaj "+" i bashkon tekstualisht ("25" + "17" + "8" -> "25178").

// Konvertimi në numra me Number()
let numri1 = Number(v1);
let numri2 = Number(v2);
let numri3 = Number(v3);

let shuma = numri1 + numri2 + numri3;
let mesatarja = shuma / 3;

console.log("Shuma:", shuma);
console.log("Mesatarja:", mesatarja);
console.log("Tipi i shumës:", typeof shuma);
console.log("Tipi i mesatares:", typeof mesatarja);


let hënën = 95;
let martën = 80;
let mërkurën = 115;

let gjithsejMinuta = hënën + martën + mërkurën;
let kohaNeOre = gjithsejMinuta / 60;

let minutaMbetura = gjithsejMinuta % 60;

console.log("Gjithsej minuta:", gjithsejMinuta);
console.log("Koha në orë (numër dhjetor):", kohaNeOre.toFixed(2));
console.log("Minuta që mbeten pas ndarjes me 60 (%):", minutaMbetura);


let stoku = 120;
console.log("Stoku fillestar në depo:", stoku);

stoku -= 18; // Shiten 18
console.log("Pas shitjes së parë (-18):", stoku);

stoku -= 27; // Shiten edhe 27
console.log("Pas shitjes së dytë (-27):", stoku);

stoku += 35; // Shtohen 35 njësi të reja
console.log("Pas shtimit të njësive të reja (+35):", stoku);

let cmimiPerNjesi = 6.75;
let vleraStokutPeryndimtar = stoku * cmimiPerNjesi;

console.log("Stoku përfundimtar (sasia):", stoku);
console.log("Vlera e stokut përfundimtar në euro:", vleraStokutPeryndimtar);