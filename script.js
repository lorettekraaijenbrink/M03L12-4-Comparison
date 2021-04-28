const age = 26;
const isFemale = true;
const driverStatus = 'bob';
const nameCustomer = 'Lorette';
const totalAmount = 200;

if (age >= 18) {
    console.log("Je bent oud genoeg om naar binnen te mogen");
} else {
    console.log("Je bent te jong en moet buiten blijven");
}

if (isFemale) {
    console.log("Je bent een vrouw");
} else {
    console.log("Helaas, het is ladiesnight, dus vanavond ben je niet welkom");
}

if (driverStatus == "bob") {
    console.log("Fijn, je bent de bob. Jij mag rijden");
} else {
    console.log("Geen bob, dus niet achter het stuur kruipen!");
}

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting");
} else {
    console.log("Je betaalt de volle mep");
}
if (nameCustomer == "Bram" || nameCustomer == "Sarah") {
    console.log(nameCustomer + " ,je krijgt een biertje op onze kosten");
} else {
    console.log("Jammer dat je geen Bram of Sarah heet!");
}

if (totalAmount >= 100) {
    console.log("Je krijgt een fles champagne!");
} else if (totalAmount >= 50) {
    console.log("Je krijgt een lekkere portie nachos");
} else if (totalAmount >= 25) {
    console.log("Je krijgt een lekkere portie bitterballen");
} else {
    console.log("Je moet nog iets meer bestellen");
}