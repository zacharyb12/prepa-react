function NewProject() {
  return (
    <>
        <h1 className="text-center p-2">Creation d'un nouveau projet</h1>
        <div className="">

          <section className="card p-3">
            <h2>Bienvenue dans la création d'un projet React avec Vite !</h2>
            <p>
              Cette page vous guide à travers les étapes essentielles pour démarrer un nouveau projet React avec TypeScript en utilisant Vite.
            </p>
          </section>

          <section className="card p-3">
            <h3>Étapes principales :</h3>
            <ol>
              <li>
          <strong>Initialisation du projet :</strong>
          <ul>
            <li>Ouvrez votre terminal.</li>
            <li>
              Exécutez la commande : <code>npm create vite@latest nom-du-projet -- --template react-ts</code>
            </li>
            <li>Accédez au dossier du projet : <code>cd nom-du-projet</code></li>
            <li>Installez les dépendances : <code>npm install</code></li>
          </ul>
              </li>
              <br />
              <li>
          <strong>Structure du projet :</strong>
          <ul>
            <li>Le dossier <code>src</code> contient vos composants, pages et styles.</li>
            <li>Le fichier <code>App.tsx</code> est le point d'entrée principal.</li>
            <li>Le fichier <code>main.tsx</code> initialise l'application.</li>
          </ul>
              </li>
              <br />
              <li>
          <strong>Création de composants :</strong>
          <ul>
            <li>Utilisez la syntaxe <code>tsx</code> pour bénéficier de la vérification de types.</li>
            <li>Organisez vos composants dans des dossiers dédiés.</li>
          </ul>
              <br />
              </li>
              <li>
          <strong>Gestion des dépendances :</strong>
          <ul>
            <li>Ajoutez des librairies avec <code>npm install nom-de-la-librairie</code>.</li>
            <li>Exemples : <code>react-router-dom</code> pour la navigation, <code>axios</code> pour les requêtes HTTP.</li>
          </ul>
              </li>
              <br />
              <li>
          <strong>Lancement du projet :</strong>
          <ul>
            <li>Utilisez <code>npm run dev</code> pour lancer le serveur de développement Vite.</li>
          </ul>
              </li>
            </ol>
          </section>
          <section className="mt-3">
            <h3>Bonnes pratiques :</h3>
            <ul>
              <li>Utilisez des noms de fichiers explicites.</li>
              <li>Commentez votre code pour faciliter la maintenance.</li>
              <li>Testez vos composants avec des outils comme <code>Jest</code> ou <code>React Testing Library</code>.</li>
              <li>Versionnez votre projet avec <code>git</code>.</li>
            </ul>
          </section>
              <br />
          <section className="mt-3">
            <h3>Ressources utiles :</h3>
            <ul>
              <li>
          <a href="https://vitejs.dev/guide/" target="_blank" rel="noopener noreferrer">Documentation officielle Vite</a>
              </li>
              <li>
          <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">Documentation officielle React</a>
              </li>
              <li>
          <a href="https://www.typescriptlang.org/docs/handbook/react.html" target="_blank" rel="noopener noreferrer">React & TypeScript Handbook</a>
              </li>
              <li>
          <a href="https://github.com/vitejs/vite" target="_blank" rel="noopener noreferrer">Vite sur GitHub</a>
              </li>
            </ul>
          </section>
        </div>
    </>
  );
}

export default NewProject;