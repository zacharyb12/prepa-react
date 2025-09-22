function StructureProject() {

    return(
        <>
            <h1 className="text-center">Structure Project</h1>
            <div className="container mt-4">
                <h2>Structure d'un projet React Vite</h2>
                <p>
                    Un projet créé avec <strong>Vite</strong> et <strong>React</strong> possède généralement la structure suivante :
                </p>
                <pre>
            {`
            my-app/
            ├─ node_modules/
            ├─ public/
            │  └─ vite.svg
            ├─ src/
            │  ├─ assets/
            │  ├─ components/
            │  ├─ App.jsx
            │  ├─ main.jsx
            ├─ .gitignore
            ├─ index.html
            ├─ package.json
            ├─ vite.config.js
            `}
                </pre>
                <ul>
                    <li>
                        <strong>public/</strong> : Contient les fichiers statiques accessibles directement (images, favicon, etc.).
                    </li>
                    <li>
                        <strong>src/</strong> : Contient le code source de l'application (composants, styles, etc.).
                    </li>
                    <li>
                        <strong>App.jsx</strong> : Composant racine de l'application.
                    </li>
                    <li>
                        <strong>main.jsx</strong> : Point d'entrée qui monte l'application dans le DOM.
                    </li>
                    <li>
                        <strong>package.json</strong> : Liste les dépendances et scripts du projet.
                    </li>
                    <li>
                        <strong>vite.config.js</strong> : Configuration de Vite.
                    </li>
                    <li>
                        <strong>index.html</strong> : Fichier HTML principal.
                    </li>
                </ul>
                <p>
                    Cette structure facilite le développement rapide et modulaire avec React et Vite.
                </p>
            </div>
        </>
    )
}

export default StructureProject;