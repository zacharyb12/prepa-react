function Styles() {
    return (
        <>
            <h1 className="text-center">Le Style</h1>
            <p>
                En React, il existe plusieurs façons d'appliquer du style à vos composants :
            </p>
            <ul>
                <li>
                    <strong>CSS classique :</strong> Importez un fichier CSS et utilisez <code>className</code> pour appliquer des classes.
                </li>
                <li>
                    <strong>Style en ligne :</strong> Utilisez l'attribut <code>style</code> avec un objet JavaScript, par exemple : <br />
                    <code>{`<div style={{ color: 'red', fontSize: '20px' }}>Texte</div>`}</code>
                </li>
                <li>
                    <strong>Modules CSS :</strong> Importez des fichiers CSS en tant que modules pour un style localisé au composant.
                </li>
                <li>
                    <strong>Librairies externes :</strong> Utilisez des librairies comme <code>styled-components</code> ou <code>emotion</code> pour écrire du CSS dans le JS.
                </li>
            </ul>
            <p>
                Exemple avec <strong>className</strong> :
            </p>
            <pre>
                {`<button className="btn btn-primary">Cliquez-moi</button>`}
            </pre>
            <p>
                Exemple avec <strong>style en ligne</strong> :
            </p>
            <pre>
                {`<button style={{ backgroundColor: 'blue', color: 'white' }}>Cliquez-moi</button>`}
            </pre>
        </>
    );
}

export default Styles;