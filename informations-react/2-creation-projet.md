# Configuration et creation du projet : 



# Creation d'un projet React  avec Vite

# Commande pour créer un projet React avec Vite :
 npm create vite@latest

# Choisir un nom de projet
# Choisir le framework : React
# Choisir le variant : TypeScript

# Ou en une seule ligne :
# ici la partie avant " -- " est pour npm create vite@latest
# la partie apres " -- " est pour les options de vite
 npm create vite@latest nom-du-projet -- --template react-ts


# 2. Pour lancer le projet :
npm install
npm run dev

# Ensuite il suffit de tester le projet en le lancant

 cd nom-du-projet
 # Installation des dépendances ( si ce n'est pas déjà fait  verifier la présence du dossier node_modules )
 npm install 
 npm run dev

# Le projet sera accessible à l'adresse http://localhost:5173 qui est indiquée dans le terminal 
# le port peut etre changé en fournissant l'option --port a la commande npm run dev
# Exemple : npm run dev -- --port 3000


# ##############################################################################################


# node_modules :
  Contient les dépendances du projet ( ce dossier est généré automatiquement à l'installation des dépendances et peut etre supprimé)

# public : 
 Contient les fichiers statiques comme les images 

# src :
  Contient les fichiers sources de l'application (composants, styles, etc.)

# index.html :
   Point d'entrée de l'application

# package-lock.json :
  Contient les versions exactes des dépendances installées ( ce fichier est généré automatiquement à l'installation des dépendances et peut etre supprimé)


# package.json :
  Contient les commandes du projet et les dépendances ( ce fichier ne doit pas etre supprimé )

# Readme.md :
  Contient des informations sur le projet

# tsconfig.app.json :
  Contient les paramètres de configuration spécifiques à l'application

# tsconfig.json :
  Contient les paramètres de configuration TypeScript

 # tsconfig.node.json :
  Contient les paramètres de configuration TypeScript pour Node.js

# vite.config.js :
  Contient les paramètres de configuration de Vite

# ##############################################################################################

# Les composants React sont des fonctions ou des classes JavaScript qui retournent du JSX (un mélange de JavaScript et de HTML)
# Ils permettent de diviser l'interface utilisateur en morceaux réutilisables et indépendants
# Les composants peuvent recevoir des "props" (propriétés) pour personnaliser leur comportement et leur apparence

# Par exemple un composant titre peut recevoir une prop "text" pour définir le texte à afficher
# un composant bouton peut recevoir une prop "onClick" pour définir la fonction à appeler lorsqu'il est cliqué
# un composant liste peut recevoir une prop "items" pour définir les éléments à afficher dans la liste
# etc...

# Les composants peuvent etre imbriqués les uns dans les autres pour créer des interfaces utilisateur complexes
# Par exemple un composant page peut contenir un composant titre, un composant liste et un composant bouton etc...

# il faudra trouver l'equiliber entre composants reutilisables et composants specifiques a un besoin precis null besoin de faire un composant pour chaque petit element a moins que ce soit justifie par une reutilisation frequente ou une complexite importante

# Dès lors on comprend qu'il faudra utiliser le concept d'import et d'export pour organiser les composants dans des fichiers séparés
# Un composant peut etre exporté depuis un fichier et importé dans un autre fichier pour etre utilisé


# Si un element est exporté il sera accessible depuis un autre fichier
# Si un element n'est pas exporté il ne sera pas accessible depuis un autre fichier mais seulement dans le fichier ou il est défini

# ################################################################################################

# Pour le style on peut utiliser du CSS classique en important des fichiers .css dans les composants
import './style.css';

# ou utiliser des bibliotheques de composants UI comme Material-UI, Ant Design, Bootstrap
ex: npm install @mui/material @emotion/react @emotion/styled
<div>
  <Button variant="contained">Hello World</Button>
</div>

# ou utiliser des solutions de CSS-in-JS comme styled-components, Emotion
import styled from 'styled-components';

# ou utiliser des frameworks CSS comme Tailwind CSS, Bulma
import 'tailwindcss/tailwind.css';
<div className="bg-blue-500 text-white p-4">Hello World</div>


# ################################################################################################

# => Direction index.html