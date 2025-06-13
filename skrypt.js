function obliczMoc() {
    let nikotyna = parseFloat(document.getElementById("nikotyna").value) || 0;
    let moc = parseFloat(document.getElementById("moc").value) || 0;
    let typ50 = document.getElementById("typ1").checked;
    let typ70 = document.getElementById("typ2").checked;

    let baza = 30;

    if (nikotyna > 0 && moc > 0) {
        let finalnaMoc = (nikotyna * moc) / (nikotyna + baza);
        let typMieszanki = typ50 ? "50/50 VG/PG" : typ70 ? "70/30 VG/PG" : "nie wybrano";

        document.getElementById("wynik").innerHTML = `nie pal ale masz moc: <b>${finalnaMoc.toFixed(2)} mg/ml</b>, takiej mieszanki: <b>${typMieszanki}</b>`;
    } else {
        document.getElementById("wynik").innerHTML = "Podaj poprawne wartości nikotyny i mocy!";
    }
}