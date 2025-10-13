

function Navigation() {
    return (
        <>
        <section>
            <h1>La Navigation en React</h1>
            <div className="navigation-details">
                <h2>Fonctionnement de la navigation en React</h2>
                <p>
                    En React, la navigation entre différentes pages ou vues se fait généralement à l'aide de bibliothèques comme <strong>React Router</strong>. React Router permet de définir des routes, d'associer des composants à ces routes, et de naviguer entre elles sans recharger la page.
                </p>
                <h3>Principaux concepts :</h3>
                <ul>
                    <li>
                        <strong>Route :</strong> Définit le chemin (<code>path</code>) et le composant à afficher.
                    </li>
                    <li>
                        <strong>Link :</strong> Permet de naviguer vers une route sans recharger la page.
                    </li>
                    <li>
                        <strong>useNavigate / useHistory :</strong> Hooks pour naviguer par programmation.
                    </li>
                </ul>
                <h3>Exemple avec React Router :</h3>
                <pre>
{`

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    
  );
}
`}
                </pre>
                <p>
                    <strong>Résumé :</strong> La navigation en React est déclarative et permet de créer des applications monopage (SPA) fluides. Elle repose sur la gestion des routes et l'utilisation de composants dédiés pour le changement de vue.
                </p>
            </div> 
  </section>
            </>
    );
}
export default Navigation;