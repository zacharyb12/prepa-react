# Introduction a React : 

1. - React n'est pas un framework mais une bibliothèque javascript front-end! 

2. - React à été creer en 2011 (sorti en 2013) par meta ( facebook , instagram )

3. - Le rendu est automatiquement actualisé

4. - L'interaction avec le dom est rapide grace à un dom virtuel

5. - Integration possible dans une application existante    

6. - React n'integre pas de mecanisme de routage par défaut

7. - Mise a part la génération de vue React n'impose pas de technologie ou de pattern

8. - Il est possible d'ajouter des bibliothèques tierces ( Ce qui permet plus de liberté qu'avec un framework )

9. - React utilise du jsx (javascript) ou du tsx (typescript) ( un melange de javascript ou typescript et d'HTML )

# ################################################################################################

# React utilise un DOM virtuel (Virtual DOM) pour optimiser les mises à jour de l'interface utilisateur.
# Le DOM virtuel est une représentation en mémoire de l'interface utilisateur ( c'est une copie du DOM qui sera utilisée pour les comparaisons )
# Lorsqu'un composant React change d'état, React crée une nouvelle version du DOM virtuel.
# Ensuite, React compare la nouvelle version avec l'ancienne version du DOM virtuel pour déterminer les différences.
# Enfin, React met à jour uniquement les parties du DOM réel qui ont changé, ce qui améliore les performances.

# ################################################################################################

# Pourquoi utiliser React ?

# 1. Architecture basée sur les composants : React permet de construire des interfaces utilisateur en utilisant des composants réutilisables, ce qui facilite la maintenance et la scalabilité des applications.

# 2. Son utilisation est simple et rapide : React est relativement facile à apprendre et à utiliser, ce qui permet aux développeurs de créer rapidement des applications web interactives.

# 3. Grande communauté et écosystème riche : React bénéficie d'une grande communauté de développeurs et d'un écosystème riche en bibliothèques et outils, ce qui facilite le développement et la résolution de problèmes.

# 4. Performances optimisées : Grâce à son DOM virtuel, React minimise les manipulations du DOM réel, ce qui améliore les performances des applications.

# ################################################################################################

# il existe plusieurs techno pour creer des applications web en fonction du type d'application que l'on souhaite realiser

# Web app Client : Vite , Create React App (CRA) , Parcel
 application qui s'exécute dans le navigateur utilise HTML, CSS, JavaScript

 # Integration dans une page Web existante : CDN React
 on peut integrer react dans une page web existante en incluant les scripts react et react-dom puis en utilisant ReactDOM.render() pour rendre un composant react dans un element du DOM

# Web app Serveur : Next.js, Remix , Gasby
 application qui s'exécute sur un serveur utilise Node.js, Express.js
 React peut être utilisé avec des frameworks comme Next.js pour le rendu côté serveur (SSR)
    
# Mobile app : React Native , Expo , Ionic
 application qui s'execute sur un appareil mobile utilise React Native pour construire des applications mobiles natives React Native permet d'utiliser les memes concepts que React pour creer des interfaces utilisateur mobiles

# Desktop app : Electron
 application qui s'exécute sur un ordinateur de bureau utilise Electron.js pour construire des applications de bureau multiplateformes React peut être utilisé avec Electron pour créer des interfaces utilisateur de bureau

# Dès lors une question se pose : Mais que choisir ?

# Le choix de la technologie dépend de plusieurs facteurs :
 1. Le type d'application que vous souhaitez créer (web, mobile, desktop)
 2. Les compétences de votre équipe (JavaScript, HTML, CSS, Node.js)
 3. Les besoins spécifiques de votre projet (performance, SEO, accessibilité)
 4. La communauté et le support autour de la technologie choisie

# Il est important d'évaluer ces facteurs avant de choisir une technologie pour votre projet React.
# donc une analyse approfondie de vos besoins et de vos ressources est essentielle pour faire le bon choix.

# ################################################################################################


