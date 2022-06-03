// ********* Exercice 1 *********
// Soit la phrase « Notre formation DL commence aujourd'hui ». Ecrire un algorithme permettant de compter le nombre de caractères contenus dans cette phrase (espaces inclus).
// Affichage :
// La phrase « Notre formation DL commence aujourd’hui » contient 39 caractères.
let phrase = "Notre formation DL commence aujourd'hui";
let nbCaracteres = phrase.length;
console.log("La phrase « " + phrase + " » contient " + nbCaracteres + " caractères");
console.log("La phrase « " + phrase + " » contient " + phrase.length + " caractères");

// ********* Exercice 2 *********
// A partir de la phrase de l’exercice 1, écrire l’instruction permettant de compter le nombre de mots contenus dans celle-ci.
// Affichage :
// La phrase « Notre formation DL commence aujourd’hui » contient 5 mots.
let mots = phrase.split(" ");
console.log(mots);
let nbMots = mots.length;
console.log("La phrase « " + phrase + " » contient " + nbMots + " mots");
console.log("La phrase « " + phrase + " » contient " + mots.length + " mots");
console.log("La phrase « " + phrase + " » contient " + phrase.split(" ").length + " mots");

// let chaine = "aaa-bbb-ccc";
// let tableau = chaine.split("-");
// console.log(tableau);

// ********* Exercice 3 *********
// A partir de la phrase de l’exercice 1, écrire l’instruction permettant de remplacer le mot « aujourd’hui » par le mot « demain ». Afficher l’ancienne et la nouvelle phrase.
let nouvellePhrase = phrase.replace("aujourd'hui", "demain");
console.log(phrase);
console.log(nouvellePhrase);

// ********* Exercice 4 *********
// Ecrire un algorithme qui déclare une valeur en francs et qui la convertit en euros.  Attention, la valeur générée devra être arrondie à 2 décimales. 
// Affichage : 
// Montant en francs : 100
// 100 francs = 15.24 €  
let valeurFrancs = 100;
let valeurEuros = (valeurFrancs / 6.55957).toFixed(2);
console.log("Montant en francs : " + valeurFrancs + "\n" + valeurFrancs + " francs = " + valeurEuros + " €");

// ********* Exercice 5 *********
// Ecrire un algorithme permettant de calculer un montant de facture à régler à partir de la quantité d’articles, son prix hors taxe et un taux de TVA (exprimé en décimal. Ex : 20 % -> 0.2) 
// Affichage : 
// Prix unitaire de l’article : 9.99 € Quantité : 5 Taux de TVA : 0.2 Le montant de la facture à régler est de : 59.94 € 
let prixHT = 9.99;
let qte = 5;
let tauxTVA = 0.2;  // 20%
// let totalTTC = prixHT * qte + (prixHT * qte * tauxTVA);
let totalTTC = prixHT * qte * (1 + tauxTVA);
console.log("Prix unitaire de l'article : " + prixHT + " €" + "\n" 
            + "Quantité : " + qte + "\n" 
            + "Taux TVA : " + tauxTVA * 100 + " %" + "\n" 
            + "Le montant de la facture à régler est de : " + totalTTC.toFixed(2) + " €" );

// ********* Exercice 6 *********
// Ecrire un algorithme permettant de renvoyer la catégorie d’un enfant en fonction de son âge : 
// - Poussin : entre 6 et 7 ans 
// - Pupille : entre 8 et 9 ans 
// - Minime : entre 10 et 11 ans
// - Cadet : à partir de 12 ans 
// - Si la catégorie n’est pas gérée, merci de le préciser. 
// Affichage : 
// L’enfant qui a 10 ans appartient à la catégorie « Minime » 
let age = 10;
let categorie = "";

if(typeof age == "number") {
    if(age >= 12) {
        categorie = "Cadet";
    } else if(age >= 10) {
        categorie = "Minime";
    } else if(age >= 8) {
        categorie = "Pupille";
    } else if(age >= 6) {
        categorie = "Poussin";
    } else {
        categorie = "Non gérée";
    }

    console.log("L'enfant qui a " + age + " ans appartient à la catégorie " + categorie);
} else {
    console.log("Attention, l'âge n'est pas numérique !");
}

if(typeof age == "number") {
    switch(true) {
        case age >= 12: categorie = "Cadet"; break;
        case age >= 10: categorie = "Minime"; break;
        case age >= 8: categorie = "Pupille"; break;
        case age >= 6: categorie = "Poussin"; break;
        default: categorie = "Non gérée";
    }
    
    console.log("L'enfant qui a " + age + " ans appartient à la catégorie " + categorie);
} else {
    console.log("Attention, l'âge n'est pas numérique !");
}

// ********* Exercice 7 *********
// Nous souhaitons savoir si une personne est imposable en fonction de son âge et de son sexe.
// Si la personne est une femme dont l’âge est compris entre 18 et 35 ans ou si c’est un homme de plus de 20 ans, alors celle-ci est imposable (sinon ce n’est pas le cas, « non imposable »).
// Affichage :
// Age : 32 Sexe : F La personne est imposable.

let agePersonne = 32;
let sexe = "F";
let response = "";

let condition1 = (sexe == "F" && agePersonne >= 18 && agePersonne <= 35);
let condition2 = (sexe == "H" && agePersonne > 20);

if((sexe == "F" && agePersonne >= 18 && agePersonne <= 35) || (sexe == "H" && agePersonne > 20)) {
    response = "imposable";
} else {
    response = "non imposable";
}

if(condition1 || condition2) {
    response = "imposable";
} else {
    response = "non imposable";
}

console.log("Age : " + agePersonne + "\n" 
            + "Sexe : " + sexe + "\n"
            + "La personne est " + response);

// ternaire ( ? -> ALORS  : -> SINON) 
let response2 = (condition1 || condition2) ? "imposable" : "non imposable";
console.log("Age : " + agePersonne + "\n" 
            + "Sexe : " + sexe + "\n"
            + "La personne est " + response2)