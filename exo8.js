// ****************** Exercice 8 ******************
// A partir de ce tableau, faites en sorte de créer une adresse mail pour chaque salarié
// employes = ["Stephane SMAIL", "Virgile GIBELLO", "Mickael MURMANN"]
// - 2 premières lettres du prénom
// - puis un "point"
// - puis le nom de famille en entier
// - enfin "@elan.fr"
// - le tout en minuscule
// Tous les mails seront stockés dans un tableau

let employes = ["Stephane SMAIL", "Virgile GIBELLO", "Mickael MURMANN", "Cindy CAHEN"];

let salarie = "Stephane SMAIL";
salarie = salarie.toLowerCase(); // stephane smail
let tableau = salarie.split(" "); // ["stephane", "smail"]
let mail = tableau[0].substring(0, 2) 
            + "."
            + tableau[1] 
            + "@elan.fr";

console.log(mail);

// let mail2 = (salarie.split(" ")[0].substring(0,2) + "." + salarie.split(" ")[1] + "@elan.fr").toLowerCase();
// console.log(mail2)

let mails = [];

employes.forEach(employe => {
    employe = employe.toLowerCase(); // stephane smail
    let tableau = employe.split(" "); // ["stephane", "smail"]
    let mail = tableau[0].substring(0, 2) 
            + "."
            + tableau[1] 
            + "@elan.fr";
    mails.push(mail);
})

console.log(mails);