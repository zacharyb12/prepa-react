import { Link } from "react-router-dom"

function Homepage(){
    return (
        <>
        <h1 className="text-center">Bienvenue sur la demo react</h1>

        <div className="card text-center">
            <p>Les concepts de base seront présentés dans la première partie comme : </p>
            <ul className="list-none">
                <li><Link className="Link" to="/new-project">Nouveau Projet</Link></li>
                <li><Link className="Link" to="/tsx">TSX</Link></li>
                <li><Link className="Link" to="/structure-project">structure du projet</Link></li>
                <li><Link className="Link" to="/composants">Les composants</Link></li>
                <li><Link className="Link" to="/styles">Le style</Link></li>
                <li><Link className="Link" to="/rendu-conditionnel">Le Rendu conditionnel</Link></li>
                <li><Link className="Link" to="/collections">Les collections</Link></li>
                <li><Link className="Link" to="/navigation">La navigation</Link></li>
            </ul>
        </div>

        <div className="card text-center">
            <p>Les concepts avancés seront présentés dans la deuxième partie comme : </p>
            <ul className="list-none">
                <li><Link className="Link" to="/">Gestion des états & hooks</Link></li>
                <li><Link className="Link" to="/">Use State</Link></li>
                <li><Link className="Link" to="/">Les formulaires</Link></li>
                <li><Link className="Link" to="/">Les interactions entre composants</Link></li>
                <li><Link className="Link" to="/">Use effect</Link></li>
                <li><Link className="Link" to="/">Use Context</Link></li>
                <li><Link className="Link" to="/">Use Reducer</Link></li>
            </ul>
        </div>

        <div className="card text-center">
            <p>Les démonstrations seront présentées dans la troisième partie : </p>
            <ul className="list-none">
                <li><Link className="Link" to="/counter">Compteur</Link></li>
            </ul>
        </div>
        </>
    )
}

export default Homepage