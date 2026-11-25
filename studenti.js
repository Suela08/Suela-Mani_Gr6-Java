const studenti = {
  emri: "Arta",
  mbiemri: "Krasniqi",
  notat: [9, 8, 10],
  mesatarja() {
    const shuma = this.notat.reduce((acc, n) => acc + n, 0);
    return shuma / this.notat.length;
  }
};

console.log("Studenti:", `${studenti.emri} ${studenti.mbiemri}`);
console.log("Mesatarja:", studenti.mesatarja().toFixed(2));