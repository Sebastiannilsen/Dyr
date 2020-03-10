let db = firebase.firestore();
let dyr = db.collection("Dyr");
let dyrDiv = document.querySelector("#dyrDiv");

dyr.get().then((snapshot) => skrivResultat(snapshot));

function skrivResultat(snapshot){
  snapshot.forEach(element => lagHtml(element.data()));
}

function lagHtml(element){
  dyrDiv.innerHTML += `
  <section class="Dyr">
    <div>Navn: ${element["Navn"]} </div>
    <div>Alder: ${element["Alder"]} </div>
    <div>Dyr: ${element["Dyr"]} </div>
    <div>Rase: ${element["Rase"]} </div>
    <div>Eier: ${element["Eier"]} </div>
    <img src="${element["Bilde"]}">
  </section>
  `
}

function visBlanding(){
  const spørring = dyr.where("Rase", "==", "Blanding");
  spørring.get().then((snapshot) => skrivResultat(snapshot));
}

function visAlle(){
  dyr.get().then((snapshot) => skrivResultat(snapshot));
}

function skrivResultat(snapshot){
  dyrDiv.innerHTML = "";
  snapshot.forEach(element => lagHtml(element.data()));
}
