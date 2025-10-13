import { Link } from "react-router-dom"

function Homepage(){
    return (
        <>
        <section>
        <h1>Bienvenue sur la demo react</h1>

        <div>
            <p>Les concepts de base seront présentés dans la première partie comme : </p>
            <ul>
                <li><Link to="/new-project">Nouveau Projet</Link></li>
                <li><Link to="/tsx">TSX</Link></li>
                <li><Link to="/structure-project">structure du projet</Link></li>
                <li><Link to="/composants">Les composants</Link></li>
                <li><Link to="/styles">Le style</Link></li>
                <li><Link to="/rendu-conditionnel">Le Rendu conditionnel</Link></li>
                <li><Link to="/collections">Les collections</Link></li>
                <li><Link to="/navigation">La navigation</Link></li>
            </ul>
        </div>
        </section>

        <section>
        <div>
            <p>Les concepts avancés seront présentés dans la deuxième partie comme : </p>
            <ul>
                <li><Link to="/">Gestion des états & hooks</Link></li>
                <li><Link to="/">Use State</Link></li>
                <li><Link to="/">Les formulaires</Link></li>
                <li><Link to="/">Les interactions entre composants</Link></li>
                <li><Link to="/">Use effect</Link></li>
                <li><Link to="/">Use Context</Link></li>
                <li><Link to="/">Use Reducer</Link></li>
            </ul>
        </div>
        </section>

        <section>
        <div>
            <p>Les démonstrations seront présentées dans la troisième partie : </p>
            <ul >
                <li><Link to="/counter">Compteur</Link></li>
            </ul>
        </div>
        </section>
        </>
    )
}

export default Homepage