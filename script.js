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