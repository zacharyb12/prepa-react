# Rappel Javascript Pour React 

import React from "react";

# 1. Variables et Types de Données

# let permet de déclarer une variable dont la valeur peut changer
# var permet de déclarer une variable dont la valeur peut changer ( mais a une portée différente )
# const permet de déclarer une constante dont la valeur ne peut pas changer

# String
let nom = "Jean"; 

# Number
let age = 30; 

# Boolean
let estEtudiant = false; 

# Array
let liste = [1, 2, 3]; 

# Object
let personne = { nom: "Jean", age: 30 }; 


# constante (valeur qui ne change pas )
const PI = 3.14;

# ################################################################################################

# 2. Fonctions et Fonctions Fléchées

# Exemple de fonction classique

function saluer(nom) {
    return `Bonjour, ${nom}!`;
}
saluer("Alice"); => "Bonjour, Alice!"

# Exemple de fonction fléchée
const additionner = (a, b) => a + b;
additionner(2, 3); => 5

# Fonction anonyme
var myFunction = function(x) {
    console.log("Ceci est une fonction anonyme avec x = " + x);
}
myFunction(3); => Ceci est une fonction anonyme avec x = 3

# lambda expression
const carre = x => x * x;
carre(4); => 16

# ################################################################################################

# 3. Structures de Contrôle

# Conditionnelles

# if
if (age > 18) {
    console.log("Adulte");
}

if (age > 18 && age < 65) {
    console.log("Adulte");
}

if (age > 18) {
    console.log("Adulte");
}
else if (age >= 65) {
    console.log("Senior");
}
else {
    console.log("Mineur");
}

# switch
switch (age) {
    case 18:
        console.log("Juste devenu adulte");
        break;
    case 30:
        console.log("Trentenaire");
        break;
    case 65:
        console.log("Senior");
        break;
    default:
        console.log("Âge non spécifié");
}


# while
while (age < 36) {
    age++;
}

while (age < 36 && age >= 18) {
    console.log("une année de plus");
    age++;
}


# itérations

for (let i = 0; i < liste.length; i++) {
    console.log(liste[i]);
}

# ################################################################################################

# 4. Manipulation du DOM

# Exemple simple de manipulation du DOM

const monElement = document.getElementById("monElement");
monElement.style.color = "blue";
monElement.innerHTML = "Nouveau contenu";

monElement.addEventListener("click", () => {
    alert("Élément cliqué!");
});


# Création d'un élément React

const newElement = <h1>Hello le dom </h1>

# Permet de rendre un élément React dans le DOM

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(newElement);

# ################################################################################################

# Le DOM virtuel de React
 React crée un DOM virtuel pour optimiser les mises à jour du DOM réel  Lorsqu'un état ou des props changent, React met à jour le DOM virtuel  puis compare avec l'ancien DOM virtuel pour déterminer les changements nécessaires
 et n'applique que ces changements au DOM réel, améliorant ainsi les performances

# Avantages du DOM virtuel

 1. Performance améliorée : Réduit le nombre de manipulations du DOM réel, qui sont coûteuses en termes de performance.
 2. Mise à jour efficace : Permet des mises à jour plus rapides et plus efficaces de l'interface utilisateur.
 3. Abstraction : Fournit une couche d'abstraction qui simplifie le développement d'interfaces utilisateur complexes.


# ################################################################################################

# 5. Événements

document.getElementById("monBouton").addEventListener("click", () => {
    alert("Bouton cliqué!");
});

# ################################################################################################

# 6. Promesses et Async/Await
    
const fetchData = () => {
    
    return new Promise((resolve) => {

        setTimeout(() => { resolve("Données récupérées"); }, 2000);
    
    });
};


const afficherDonnees = async () => {

    const data = await fetchData();
    console.log(data);
}

afficherDonnees();

# ################################################################################################

# 7. Modules (ES6) : principe d'export et import des fonctions

# Exporter une fonction depuis un module
 export const maFonction = () => { ... }

# Importer une fonction depuis un module
 import { maFonction } from './monModule';


# ################################################################################################

# 8. Destructuring d'objets et de tableaux

# Destructuring d'objet ( extraction des valeurs dans des variables )
const personne2 = { nom: "Alice", age: 25 };
const { nom: nomPersonne, age: agePersonne } = personne2;


# Destructuring de tableau ( extraction des valeurs dans des variables )
const nombres = [1, 2, 3];
const [premier, deuxieme, troisieme] = nombres;

# ################################################################################################

# 9. Opérateurs (Rest)
# ... REST regroupe plusieurs valeurs en un seul tableau

# Opérateur de propagation (Spread) pour les objets
# Valeurs individuelles dans un tableau
const nombres = [10, 20, 30, 40];

# On prend le premier élément dans 'premier' et on met le reste dans 'autres'
const [premier, ...autres] = nombres;

# exemple avec une fontion 

function addition(...nombres) {
  console.log(nombres);
  # ici nombres est un tableau contenant tous les arguments passés à la fonction 
  # le reduce permet de faire la somme des éléments du tableau
  # ici on initialise total à 0 et on ajoute chaque élément n au total
  return nombres.reduce((total, n) => total + n, 0);
}




# Opérateur (Spread)
# ... SPREAD Permet de décomposer un tableau ou un objet en éléments individuels
const tableau1 = [1, 2, 3];
const tableau2 = [4, 5];

const tableau3 = [...tableau1, ...tableau2]; 
# tableau3 est maintenant [1, 2, 3, 4, 5]


# Exemple avec une fonction 

function showMessage(a, b, c) {
  console.log(a, b, c);
}

const mots = ["Bonjour", "tout", "le monde"];
showMessage(...mots); 
# Equivalent à showMessage("Bonjour", "tout", "le monde");
# affiche "Bonjour tout le monde"

# Exemple avec un string

const mot = "Hey!";
const lettres = [...mot];

console.log(lettres); 
# affiche ['H', 'e', 'y', '!']


# ################################################################################################

# 10. Manipulation des Tableaux

# filter
# renvoie un nouveau tableau avec les éléments qui passent le test
# ici on garde les éléments supérieurs à 1
const filtered = liste.filter(item => item > 1);

# Map
# renvoie un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau
# ici on multiplie chaque élément par 2
const mapped = liste.map(item => item * 2);

# Reduce
# applique une fonction contre un accumulateur et chaque valeur du tableau (de gauche à droite) pour le réduire à une seule valeur
# ici on fait la somme de tous les éléments du tableau ( 0 est la valeur initiale de l'accumulateur )
const reduced = liste.reduce((acc, val) => acc + val, 0);


# Find
# renvoie la valeur du premier élément du tableau qui satisfait la fonction de test fournie
# ici on cherche l'élément avec l'id égal à 2
const found = liste.find(item => item.id === 2);

# Sort
# trie les éléments du tableau sur place et renvoie le tableau ici on crée une copie avec le spread operator [...array]
# puis on trie cette copie en ordre décroissant

const array = [3, 1, 4, 1, 5, 9];

# copie du tableau puis tri décroissant
# ici la fonction de comparaison (a, b) => b - a trie les nombres en ordre décroissant
# Si le résultat est négatif, a est placé avant b
# Si le résultat est positif, b est placé avant a
const sorted = [...array].sort((a, b) => b - a);

console.log(sorted); 
# [9, 5, 4, 3, 1, 1]
console.log(array);
# [3, 1, 4, 1, 5, 9]

# ################################################################################################

# Le JSX : Syntaxe de balisage pour React
# le jsx est un melange de javascript et de html il permet de definir des composants react de maniere declarative
# il contient certaines regles de syntaxe a respecter


# 1 - Un composant React doit retourner un seul élément parent
const MonComposant = () => {
    return (
# ici on retourne une div qui englobe tous les autres éléments
        <div>
            <h1>Bonjour, monde!</h1>
            <p>Ceci est un composant React.</p>
        </div>
    );
}


# 2 - Les attributs HTML en JSX utilisent le camelCase
const Bouton = () => {
    return (
# ici on utilise onClick au lieu de onclick
        <button onClick={() => alert("Bouton cliqué!")}>Cliquez-moi</button>
    );
}


# 3 - Les classes CSS utilisent "className" au lieu de "class"
const MaDiv = () => {
    return (
# ici on utilise className au lieu de class
        <div className="ma-classe">Contenu de la div</div>
    );
}


# 4 - Les expressions JavaScript sont incluses entre accolades  {}
const Utilisateur = ({ nom }) => {
    return (
# ici on utilise des accolades pour inclure la variable nom
        <h2>Bonjour, {nom}!</h2>
    );
}   

# 5 - Les commentaires en JSX utilisent la syntaxe {/* commentaire */}
const Commentaire = () => {
    return (
        <div>
            <h4>hello</h4>
# ici un commentaire en JSX
            {/* Ceci est un commentaire en JSX */}
            <p>Contenu de la div</p>
        </div>
    );
}


# 6 - Les éléments JSX doivent être correctement fermés

const Image = () => {
    return (
        <div>
# ici l'élément img est correctement fermé avec " /> " on parle aussi de balise auto-fermante
        <img src="image.jpg" alt="Description de l'image" />
        </div>
    );
}


# Les fragments React permettent de retourner plusieurs éléments sans ajouter de nœud supplémentaire au DOM
const Liste = () => {
    return (
# ici on utilise <> </> pour englober les éléments sans ajouter de div supplémentaire
        <>
            <li>Élément 1</li>
            <li>Élément 2</li>
            <li>Élément 3</li>
        </>
    );
}

# On utilisera souvent des methodes de tableau comme map pour générer des listes d'éléments en JSX

# ici on utilise map pour créer un élément li pour chaque nombre dans le tableau
# on utilise aussi une key unique pour chaque élément de la liste qui aide react à identifier chaque élément
const Nombres = () => {
    const nombres = [1, 2, 3, 4, 5];
    return (
        <ul>
            {nombres.map((nombre) => (
                <li key={nombre}>{nombre}</li>
            ))}
        </ul>
    );
}

# ici on utilise map pour créer un élément li pour chaque objet dans le tableau
# on utilise aussi une key unique pour chaque élément de la liste qui aide react à identifier chaque élément

const Personnes = () => {
  const classe = [
    { id: 1, nom: "Alice" },
    { id: 2, nom: "Bob" },
    { id: 3, nom: "Charlie" }
  ];

  return (
    <ul>
      {classe.map((p) => (
        <li key={p.id}>
          {p.nom}
          <button onClick={() => alert(p.nom)}>Cliquez-moi</button>
        </li>
      ))}
    </ul>
  );
};


# Dans le cas ou il est impossible d'utiliser une clé unique on peut utiliser un index avec la fonction map
# Cependant l'utilisation d'un index comme clé est déconseillée si l'ordre des éléments peut changer


const Personnes = () => {
  const classe = [
    { id: 1, nom: "Alice" },
    { id: 2, nom: "Bob" },
    { id: 3, nom: "Charlie" }
  ];

  return (
    <ul>
      {classe.map((p, index) => (
        <li key={index}> 
          <p>{p.nom}</p>
          <button onClick={() => alert(p.nom)}>Cliquez-moi</button>
        </li>
      ))}
    </ul>
  );
};



# ################################################################################################


