function Collections() {
    return (
        <>
            <h1 className="text-center">Collections en React</h1>
            <section>
            <h2>Qu'est-ce qu'une collection ?</h2>
            <p>
                En React, une <strong>collection</strong> fait généralement référence à un tableau d'éléments (objets, chaînes, etc.) que l'on souhaite afficher ou manipuler dans une interface utilisateur.
            </p>
            </section>
            <section>
            <h2>Affichage d'une collection</h2>
            <p>
                Pour afficher une liste d'éléments, on utilise souvent la méthode <code>map()</code> pour parcourir le tableau et générer des composants React pour chaque élément.
            </p>
            <pre>
    {`const fruits = ['Pomme', 'Banane', 'Orange'];
    return (
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    );`}
            </pre>
            </section>
            <section>
            <h2>La propriété <code>key</code></h2>
            <p>
                Lors du rendu de collections, il est important d'ajouter une propriété <code>key</code> unique à chaque élément pour aider React à optimiser les mises à jour du DOM.
            </p>
            </section>
            <section>
            <h2>Manipulation des collections</h2>
            <p>
                On peut filtrer, trier ou transformer les collections avant de les afficher :
            </p>
            <pre>
    {`const users = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ];
    const filteredUsers = users.filter(u => u.name.startsWith('A'));
    return (
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );`}
            </pre>
            </section>
            <section>
            <h2>Collections et état</h2>
            <p>
                On utilise souvent <code>useState</code> pour gérer une collection dynamique (ajout, suppression, modification) :
            </p>
            <pre>
    {`const [items, setItems] = useState<string[]>([]);
    const addItem = (item: string) => setItems([...items, item]);`}
            </pre>
            </section>
            <section>
            <h2>Résumé</h2>
            <ul>
                <li>Les collections sont des tableaux d'éléments à afficher ou manipuler.</li>
                <li>Utilisez <code>map()</code> pour le rendu.</li>
                <li>Ajoutez toujours une <code>key</code> unique.</li>
                <li>Gérez les collections avec <code>useState</code> pour les rendre dynamiques.</li>
            </ul>
            </section>
        </>
    );
}

export default Collections;
