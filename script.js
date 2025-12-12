document.getElementById("genera").addEventListener("click", function() {

    const nome = document.getElementById("nome").value;
    const km = Number(document.getElementById("km").value);
    const eta = document.getElementById("eta").value;

    if (!nome || !km) {
        alert("Inserisci tutti i dati!");
        return;
    }

    let prezzo = km * 0.21;
    let offerta = "Biglietto Standard";

    if (eta === "minore") {
        prezzo *= 0.8;
        offerta = "Sconto Minorenni";
    } else if (eta === "senior") {
        prezzo *= 0.6;
        offerta = "Sconto Over 65";
    }

    const carrozza = Math.floor(Math.random() * 10) + 1;
    const codiceCP = Math.floor(Math.random() * 90000) + 10000;

    document.getElementById("outNome").innerText = nome;
    document.getElementById("outOfferta").innerText = offerta;
    document.getElementById("outCarrozza").innerText = carrozza;
    document.getElementById("outCodice").innerText = codiceCP;
    document.getElementById("outPrezzo").innerText = prezzo.toFixed(2) + "€";

    document.getElementById("ticket").style.display = "block";
});

document.getElementById("annulla").addEventListener("click", function(){
    document.getElementById("nome").value = "";
    document.getElementById("km").value = "";
    document.getElementById("eta").value = "adulto";
    document.getElementById("ticket").style.display = "none";
});
