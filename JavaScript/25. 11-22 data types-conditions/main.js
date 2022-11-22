

//reference type variables - are object type.

const student = {
    name: "Tauas",
    surname: "Bordas",
    age: 0.2,
}
let studentCopy = student;




let level = 7;
let levelCopy = level;
level = 8;

console.table({level, levelCopy});

// operators can have 1 piece or 2 piece.

const x = 16;
const y = 4;
console.log("x:", x, "y:", y);
let res = x + y; console.log("${x} + ${y}:", res); //addition
res = x - y; console.log("${x} - ${y}:", res); //substract
res = x * y; console.log("${x} * ${y}:", res); //multiply
res = x / y; console.log("${x} / ${y}:", res); //divide
res = x % y; console.log("${x} % ${y}:", res); // liekana
res = x ** y; console.log("${x} ** ${y}:", res); //laipsnis
res = x ** (1 / y); console.log("${x} ** (1 / ${y}):", res); // saknis


let a = 4;

console.log(a);
a++;
console.log(a++); //operatorius a++ ( a = a + 1 )


//Supply lemonade - operation 
const limonadoKaina = 1.20;

let imestiPinigai = 1.5

if(imestiPinigai >= limonadoKaina) {
    console.log("Limonadas pateikiamas...");;
    let graza = imestiPinigai - limonadoKaina;
    if (graza >= 0)
    { 
        console.log("pasiimkite graza.")
    } else {
        console.log("pasiimkite graza.")
    }
} else {
    console.log("Nepakanka Piinigu.");
}

// operators:

console.log("==="); //grieztas lyginimas (visada naudoti)

const salyga1 = true;
const salyga2 = true;
const salyga3 = true;
const salyga4 = false;

if(salyga1 && salyga2 && salyga3) { console.log("vykdau veiksma")}

if(salyga4) { console.log("nevykdau")}



// SALYGOS


// jeigu salyga teisinga , kodas vykdomas pagal true, jeigu neteisinga - false.
// vykdomas else kodo blokas ( jeigu toks blokas aprasytas)

if(true){
    console.log("atliekami veiksmai")

}

let arEsatNamie = true;
let arkurnorssiandienvaziuosit = true;
let arbrolisnamie = true;
let arbrolisniekoneveikia = true;


if(arEsatNamie){
    console.log("veiksmas 1");
} else if (arkurnorssiandienvaziuosit) {
    console.log("veiksmas 2");
} else if (arbrolisnamie) {
    console.log("veiksmas 3");
}

const todayDate = new Date();
const weekdaynumber = todayDate.getDay();

console.dir(todayDate);


let weekDay;
switch (weekdaynumber) {
    case 1: weekDay = "Pirmadienis"; break;
    case 2: weekDay = "Antradienis"; break;
    case 3: weekDay = "Treciadienis"; break;
    case 4: weekDay = "Ketvirtadienis"; break;
    case 5: weekDay = "Penktadienis"; break;
    case 6: weekDay = "Sestadienis"; break;
    case 7: weekDay = "Sekmadienis"; break;
    default: console.error(
        "savaites dienos gali buti tin nuo 0-6. prasau grizk"
    );

    console.log({weekdaynumber, weekDay})
}
console.groupEnd();

console.group("----Ternary operatorius-----");
