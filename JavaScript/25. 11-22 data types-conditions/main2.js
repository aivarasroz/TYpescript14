console.group('1. Sukurti 5 kintamuosius, kurie apibūdintu jus. Kintamuosius atspausdinkite įvardindami kintamųjų pavadinimus.');

  let vardas = "Aivaras";
  let pavarde = "Rozukas";
  let profesija = "Biotechnologas";
  let ugis = 194;
  let hobis = "krepsinis";

  console.log("vardas:", vardas);
  console.log("pavarde:", pavarde);
  console.log("profesija:", profesija);
  console.log("ugis:", ugis);
  console.log("hobis:", hobis);


console.groupEnd();


console.group('2. Parašykite salyginį sakinį, kuris pagal jūsų 5 kintamuosius (kuriuos pakeitinėsite) atspausdintų skirtingą tekstą');

console.log("Pateikite varda ir pavarde krepsinio atrankai.")
if(vardas === "Aivaras" && pavarde === "Rozukas"){
    console.log("Aivaras Rozukas");
} else {
    console.log("Tomas Babausis");
}

console.log("Ar gali zaisti krepsini?");
if(ugis >= 194){
    console.log("Tinkamas");
} else {
    console.log("wrong");
}

console.log("Ar tavo hobis yra krepsinis?")
if(hobis === "krepsinis"){
    console.log("Taip");
} else {
    console.log("ne");
}


    

console.groupEnd();


console.group('3. Parašykite switch salyginį sakinį patikrinti jūsų būseną ("atsikėlęs" | "miegantis" | "pavargęs") ir pagal tai priskirkite 6 kintamojo (planas) reikšmę');
const state="atsikeles";
let plan;
 switch(state){
    case "atsikeles": plan = "eit issimaudyt"; break;
    case "miegantis": plan = "toliau ilsetis"; break;
    case "pavarges": plan = "ziureti filma"; break;
    default: console.error ("tokia neegzistuoja");
 }

 console.log({state, plan});

console.groupEnd();