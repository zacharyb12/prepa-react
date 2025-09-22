// Rappel Javascript Pour React 

import React from "react";

// 1. Variables et Types de Données
let nom = "Jean"; // String
const age = 30; // Number
let estEtudiant = false; // Boolean
let liste = [1, 2, 3]; // Array
let personne = { nom: "Jean", age: 30 }; // Object

// -------------------------------------------------------------

// 2. Fonctions et Fonctions Fléchées

// Exemple de fonction classique
function saluer(nom) {
    return `Bonjour, ${nom}!`;
}

// Exemple de fonction fléchée
const additionner = (a, b) => a + b;

// Fonction anonyme
var myFunction = function(x) {
    console.log("Ceci est une fonction anonyme");
}

// lambda expression
const carre = x => x * x;

// -------------------------------------------------------------

// 3. Structures de Contrôle
if (age > 18) {
    console.log("Adulte");
}

for (let i = 0; i < liste.length; i++) {
    console.log(liste[i]);
}

while (age < 35) {
    age++;
}

// -------------------------------------------------------------

// 4. Manipulation du DOM

// Exemple simple de manipulation du DOM
document.getElementById("monElement").innerText = saluer(nom);

// Création d'un élément React
const newElement = <h1>Hello le dom </h1>

// Permet de rendre un élément React dans le DOM
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(newElement);

// Le DOM virtuel de React
// React crée un DOM virtuel pour optimiser les mises à jour du DOM réel
// Lorsqu'un état ou des props changent, React met à jour le DOM virtuel
// puis compare avec l'ancien DOM virtuel pour déterminer les changements nécessaires
// et n'applique que ces changements au DOM réel, améliorant ainsi les performances

// Avantages du DOM virtuel

// 1. Performance améliorée : Réduit le nombre de manipulations du DOM réel, qui sont coûteuses en termes de performance.
// 2. Mise à jour efficace : Permet des mises à jour plus rapides et plus efficaces de l'interface utilisateur.
// 3. Abstraction : Fournit une couche d'abstraction qui simplifie le développement d'interfaces utilisateur complexes.



// -------------------------------------------------------------

// 5. Événements
document.getElementById("monBouton").addEventListener("click", () => {
    alert("Bouton cliqué!");
});

// -------------------------------------------------------------

// 6. Promesses et Async/Await
const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Données récupérées");
        }
        , 2000);
    });
};


const afficherDonnees = async () => {
    const data = await fetchData();
    console.log(data);
}
afficherDonnees();

// -------------------------------------------------------------

// 7. Modules (ES6) : principe d'export et import des fonctions

// export const maFonction = () => { ... }
// import { maFonction } from './monModule';


// -------------------------------------------------------------

// 8. Destructuring d'objets et de tableaux

const personne2 = { nom: "Alice", age: 25 };
const { nom: nomPersonne, age: agePersonne } = personne2;

const nombres = [1, 2, 3];
const [premier, deuxieme, troisieme] = nombres;

// -------------------------------------------------------------

// 9. Opérateurs de Propagation (Spread) et de Repos (Rest)

// valeur à exploiter
const arr1 = [1, 2, 3];

// Destructuring

// ES5 
const firstES5 = arr1[0];


// first = 1, rest = [2, 3]
const [first, ...rest] = arr1; 

// Rest ( )
// permet de rassembler plusieurs éléments en un seul tableau
// dans ce cas-ci, rassembler tous les arguments passés à la fonction

const somme = (...args) => args.reduce((acc, val) => acc + val, 0); 


// Spread
// permet de décomposer un tableau en éléments individuels 
// dans ce cas-ci creer un nouveau tableau 
// avec les éléments de arr1 plus 4 et 5
const arr2 = [...arr1, 4, 5]; 

const myString = "Hello";
// ['H', 'e', 'l', 'l', 'o']
const myArray = [...myString]; 

// -------------------------------------------------------------

// 10. Manipulation des Tableaux

// filter
// renvoie un nouveau tableau avec les éléments qui passent le test
const filtered = liste.filter(item => item > 1);

// Map
// renvoie un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau
const mapped = liste.map(item => item * 2);

// Reduce
// applique une fonction contre un accumulateur et chaque valeur du tableau (de gauche à droite) pour le réduire à une seule valeur
const reduced = liste.reduce((acc, val) => acc + val, 0);


// Find
// renvoie la valeur du premier élément du tableau qui satisfait la fonction de test fournie
const found = liste.find(item => item === 2);

// Sort
// trie les éléments du tableau sur place et renvoie le tableau
const sorted = [...liste].sort((a, b) => b - a); // Tri décroissant

// -------------------------------------------------------------

// Le JSX : Syntaxe de balisage pour React
// le jsx est un melange de javascript et de html
// il permet de definir des composants react de maniere declarative
// il contient certaines regles de syntaxe a respecter

// 1 - Un composant React doit retourner un seul élément parent

const MonComposant = () => {
    return (
        <div>
            <h1>Bonjour, monde!</h1>
            <p>Ceci est un composant React.</p>
        </div>
    );
}

// 2 - Les attributs HTML en JSX utilisent le camelCase
const Bouton = () => {
    return (
        <button onClick={() => alert("Bouton cliqué!")}>Cliquez-moi</button>
    );
}

// 3 - Les classes CSS utilisent "className" au lieu de "class"
const MaDiv = () => {
    return (
        <div className="ma-classe">Contenu de la div</div>
    );
}

// 4 - Les expressions JavaScript sont incluses entre accolades  {}
const Utilisateur = ({ nom }) => {
    return (
        <h2>Bonjour, {nom}!</h2>
    );
}   

// 5 - Les commentaires en JSX utilisent la syntaxe {/* commentaire */}
const Commentaire = () => {
    return (
        <div>
            <h4>hello</h4>
            {/* Ceci est un commentaire en JSX */}
            <p>Contenu de la div</p>
        </div>
    );
}


// 6 - Les éléments JSX doivent être correctement fermés

const Image = () => {
    return (
        <>
        {/* ici la balise image se termine*/}
        <img src="image.jpg" alt="Description de l'image" />
        </>
    );
}
