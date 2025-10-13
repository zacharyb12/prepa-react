function Composants() {
    return (
        <>
            <h1 className="text-center">Composants</h1>
            <section>
                <h2>Qu'est-ce qu'un composant ?</h2>
                <p>
                    Un composant est une fonction ou une classe qui retourne du JSX. Il permet de découper l'interface en blocs réutilisables et indépendants.
                </p>
            </section>
            <section>
                <h2>Types de composants</h2>
                <ul>
                    <li>
                        <strong>Composant fonctionnel :</strong> Définis avec une fonction. Exemple :
                        <pre>{`function Hello() { return <div>Hello</div>; }`}</pre>
                    </li>
                    <li>
                        <strong>Composant classe :</strong> Définis avec une classe (moins utilisé depuis React 16.8). Exemple :
                        <pre>{`class Hello extends React.Component { render() { return <div>Hello</div>; } }`}</pre>
                    </li>
                </ul>
            </section>
            <section>
                <h2>Props</h2>
                <p>
                    Les <strong>props</strong> sont des paramètres passés au composant pour le personnaliser. Exemple :
                </p>
                <pre>{`function Welcome(props) { return <h1>Bonjour, {props.name}</h1>; }`}</pre>
            </section>
            <section>
                <h2>Composition</h2>
                <p>
                    Les composants peuvent être imbriqués les uns dans les autres pour construire des interfaces complexes.
                </p>
                <pre>{`function App() { return <Header /><Main /><Footer />; }`}</pre>
            </section>
            <section>
                <h2>Cycle de vie</h2>
                <p>
                    Les composants fonctionnels utilisent les <strong>hooks</strong> (comme <code>useEffect</code>) pour gérer le cycle de vie. Les composants classe utilisent des méthodes comme <code>componentDidMount</code>.
                </p>
            </section>
            <section>
                <h2>Bonnes pratiques</h2>
                <ul>
                    <li>Un composant doit faire une seule chose.</li>
                    <li>Favoriser les composants fonctionnels.</li>
                    <li>Utiliser des noms explicites.</li>
                    <li>Découper l'interface en petits composants réutilisables.</li>
                </ul>
            </section>
        </>
    )
}

export default Composants;
