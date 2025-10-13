
function DelegationTheoryPage() {
    return (
        <div>
            <h1>Délégation d'Événements en React</h1>

            <section>
                <h2>Introduction</h2>
                <p>
                    La délégation d'événements est un pattern qui consiste à attacher un seul 
                    gestionnaire d'événements à un élément parent plutôt que d'attacher des 
                    gestionnaires individuels à chaque élément enfant. React utilise ce pattern 
                    automatiquement dans son système d'événements.
                </p>
            </section>

            <section>
                <h2>Délégation en JavaScript Natif</h2>
                <p>
                    En JavaScript pur, la délégation exploite la propagation des événements 
                    (bubbling) pour gérer les événements des enfants au niveau du parent.
                </p>
                <pre>
{`// Sans délégation (inefficace)
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});

// Avec délégation (efficace)
const container = document.querySelector('#container');
container.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        handleClick(e);
    }
});`}
                </pre>
                <h3>Avantages</h3>
                <ul>
                    <li>Moins de gestionnaires d'événements en mémoire</li>
                    <li>Fonctionne automatiquement pour les éléments ajoutés dynamiquement</li>
                    <li>Meilleure performance globale</li>
                </ul>
            </section>

            <section>
                <h2>Système d'Événements de React</h2>
                <p>
                    React implémente son propre système d'événements appelé SyntheticEvent. Tous les 
                    événements sont délégués à la racine de l'application (root) et React gère la 
                    distribution aux composants concernés.
                </p>
                <h3>Fonctionnement Interne</h3>
                <ol>
                    <li>React attache les gestionnaires au niveau de la racine</li>
                    <li>Quand un événement se produit, il bubble jusqu'à la racine</li>
                    <li>React identifie le composant cible</li>
                    <li>React appelle le bon gestionnaire avec un SyntheticEvent</li>
                </ol>
            </section>

            <section>
                <h2>SyntheticEvent</h2>
                <p>
                    SyntheticEvent est un wrapper autour de l'événement natif du navigateur. Il 
                    garantit que les événements fonctionnent de manière identique dans tous les 
                    navigateurs.
                </p>
                <pre>
{`function handleClick(event) {
    // event est un SyntheticEvent
    console.log(event.type);        // Type d'événement
    console.log(event.target);      // Élément qui a déclenché l'événement
    console.log(event.currentTarget); // Élément avec le gestionnaire
    
    // Accéder à l'événement natif
    console.log(event.nativeEvent);
}`}
                </pre>
                <h3>Propriétés Communes</h3>
                <ul>
                    <li><strong>type</strong> : Type d'événement (click, change, etc.)</li>
                    <li><strong>target</strong> : Élément qui a déclenché l'événement</li>
                    <li><strong>currentTarget</strong> : Élément avec le gestionnaire attaché</li>
                    <li><strong>preventDefault()</strong> : Empêche le comportement par défaut</li>
                    <li><strong>stopPropagation()</strong> : Arrête la propagation</li>
                    <li><strong>nativeEvent</strong> : Événement natif du navigateur</li>
                </ul>
            </section>

            <section>
                <h2>Propagation des Événements</h2>
                <p>
                    Les événements en React suivent le même modèle de propagation que le DOM natif : 
                    capture puis bubbling.
                </p>
                <h3>Phase de Bubbling (par défaut)</h3>
                <pre>
{`function Parent() {
    const handleParentClick = () => {
        console.log('Parent cliqué');
    };
    
    const handleChildClick = () => {
        console.log('Enfant cliqué');
    };
    
    return (
        <div onClick={handleParentClick}>
            <button onClick={handleChildClick}>Cliquer</button>
        </div>
    );
}
// Résultat : "Enfant cliqué" puis "Parent cliqué"`}
                </pre>

                <h3>Phase de Capture</h3>
                <p>
                    Pour utiliser la phase de capture, ajoutez "Capture" au nom de l'événement.
                </p>
                <pre>
{`function Parent() {
    return (
        <div onClickCapture={() => console.log('Parent (capture)')}>
            <button onClick={() => console.log('Enfant')}>Cliquer</button>
        </div>
    );
}
// Résultat : "Parent (capture)" puis "Enfant"`}
                </pre>
            </section>

            <section>
                <h2>Arrêter la Propagation</h2>
                <h3>stopPropagation()</h3>
                <pre>
{`function Parent() {
    return (
        <div onClick={() => console.log('Parent')}>
            <button onClick={(e) => {
                e.stopPropagation();
                console.log('Enfant');
            }}>
                Cliquer
            </button>
        </div>
    );
}
// Résultat : Seulement "Enfant", le parent n'est pas notifié`}
                </pre>

                <h3>Attention avec stopPropagation</h3>
                <p>
                    Utiliser stopPropagation peut causer des problèmes si d'autres parties de 
                    l'application comptent sur la propagation des événements. À utiliser avec 
                    précaution.
                </p>
            </section>

            <section>
                <h2>Pattern de Délégation Manuelle</h2>
                <p>
                    Même si React gère la délégation automatiquement, vous pouvez implémenter une 
                    délégation manuelle pour des cas spécifiques.
                </p>
                <h3>Liste d'Éléments</h3>
                <pre>
{`function ItemList() {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    
    const handleClick = (e) => {
        const itemId = e.target.dataset.id;
        console.log('Item cliqué:', itemId);
    };
    
    return (
        <ul onClick={handleClick}>
            {items.map((item, index) => (
                <li key={index} data-id={index}>
                    {item}
                </li>
            ))}
        </ul>
    );
}`}
                </pre>
                <p>
                    Avantage : Un seul gestionnaire pour tous les items, même ceux ajoutés 
                    dynamiquement.
                </p>

                <h3>Identification de l'Élément Cible</h3>
                <pre>
{`function ButtonGroup() {
    const handleClick = (e) => {
        // Vérifier le type d'élément
        if (e.target.tagName === 'BUTTON') {
            const action = e.target.dataset.action;
            
            switch(action) {
                case 'save':
                    console.log('Sauvegarder');
                    break;
                case 'delete':
                    console.log('Supprimer');
                    break;
                case 'cancel':
                    console.log('Annuler');
                    break;
            }
        }
    };
    
    return (
        <div onClick={handleClick}>
            <button data-action="save">Sauvegarder</button>
            <button data-action="delete">Supprimer</button>
            <button data-action="cancel">Annuler</button>
        </div>
    );
}`}
                </pre>
            </section>

            <section>
                <h2>Data Attributes</h2>
                <p>
                    Les attributs data-* sont très utiles pour la délégation d'événements. Ils 
                    permettent de stocker des informations sur les éléments.
                </p>
                <pre>
{`function UserList() {
    const users = [
        { id: 1, name: 'Jean' },
        { id: 2, name: 'Marie' }
    ];
    
    const handleUserClick = (e) => {
        const userId = e.target.dataset.userId;
        const userName = e.target.dataset.userName;
        console.log(\`User \${userName} (ID: \${userId}) cliqué\`);
    };
    
    return (
        <ul onClick={handleUserClick}>
            {users.map(user => (
                <li 
                    key={user.id}
                    data-user-id={user.id}
                    data-user-name={user.name}
                >
                    {user.name}
                </li>
            ))}
        </ul>
    );
}`}
                </pre>
                <p>
                    Note : En JSX, data-user-id devient dataset.userId en JavaScript (camelCase).
                </p>
            </section>

            <section>
                <h2>Cas d'Usage : Tableau de Données</h2>
                <pre>
{`function DataTable() {
    const data = [
        { id: 1, name: 'Produit 1', price: 10 },
        { id: 2, name: 'Produit 2', price: 20 }
    ];
    
    const handleTableClick = (e) => {
        const row = e.target.closest('tr');
        if (!row) return;
        
        const action = e.target.dataset.action;
        const itemId = row.dataset.itemId;
        
        if (action === 'edit') {
            console.log('Éditer item', itemId);
        } else if (action === 'delete') {
            console.log('Supprimer item', itemId);
        }
    };
    
    return (
        <table onClick={handleTableClick}>
            <tbody>
                {data.map(item => (
                    <tr key={item.id} data-item-id={item.id}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                            <button data-action="edit">Éditer</button>
                            <button data-action="delete">Supprimer</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}`}
                </pre>
            </section>

            <section>
                <h2>Performance et Optimisation</h2>
                <h3>Éviter les Fonctions Inline</h3>
                <pre>
{`// Moins performant : nouvelle fonction à chaque rendu
{items.map(item => (
    <button onClick={() => handleClick(item.id)}>
        {item.name}
    </button>
))}

// Plus performant : délégation
<div onClick={handleClick}>
    {items.map(item => (
        <button data-id={item.id}>
            {item.name}
        </button>
    ))}
</div>`}
                </pre>

                <h3>Utiliser useCallback</h3>
                <pre>
{`function List() {
    const handleClick = useCallback((e) => {
        const id = e.target.dataset.id;
        console.log('Item', id);
    }, []);
    
    return (
        <ul onClick={handleClick}>
            {/* items */}
        </ul>
    );
}`}
                </pre>
            </section>

            <section>
                <h2>Événements Non Bubblés</h2>
                <p>
                    Certains événements ne remontent pas (bubble) dans le DOM. La délégation ne 
                    fonctionne pas avec eux :
                </p>
                <ul>
                    <li>focus / blur (utiliser focusin / focusout à la place)</li>
                    <li>scroll</li>
                    <li>load / unload</li>
                    <li>mouseenter / mouseleave (utiliser mouseover / mouseout)</li>
                </ul>
            </section>

            <section>
                <h2>Différences React vs DOM Natif</h2>
                <h3>Noms des Événements</h3>
                <p>React utilise camelCase pour les noms d'événements :</p>
                <pre>
{`// DOM natif
<button onclick="handleClick()">

// React
<button onClick={handleClick}>`}
                </pre>

                <h3>Retourner false</h3>
                <p>
                    En React, retourner false ne prévient pas le comportement par défaut. Il faut 
                    appeler preventDefault explicitement.
                </p>
                <pre>
{`// DOM natif
<a href="#" onclick="return false;">

// React
<a href="#" onClick={(e) => e.preventDefault()}>`}
                </pre>
            </section>

            <section>
                <h2>Gestion d'Événements Personnalisés</h2>
                <p>
                    Vous pouvez créer et dispatcher des événements personnalisés pour une communication 
                    entre composants non liés.
                </p>
                <pre>
{`// Émettre un événement personnalisé
const emitCustomEvent = (data) => {
    const event = new CustomEvent('userAction', { 
        detail: data 
    });
    window.dispatchEvent(event);
};

// Écouter l'événement
useEffect(() => {
    const handleUserAction = (e) => {
        console.log('Action:', e.detail);
    };
    
    window.addEventListener('userAction', handleUserAction);
    
    return () => {
        window.removeEventListener('userAction', handleUserAction);
    };
}, []);`}
                </pre>
                <p>
                    Note : Ce pattern est rarement nécessaire en React. Privilégier les props, 
                    Context API, ou une bibliothèque de gestion d'état.
                </p>
            </section>

            <section>
                <h2>Bonnes Pratiques</h2>
                <ul>
                    <li>
                        <strong>Laisser React gérer la délégation</strong> : Ne pas réimplémenter ce 
                        que React fait déjà
                    </li>
                    <li>
                        <strong>Utiliser data-* pour les métadonnées</strong> : Plutôt que de créer 
                        des closures
                    </li>
                    <li>
                        <strong>Vérifier e.target vs e.currentTarget</strong> : S'assurer de cibler 
                        le bon élément
                    </li>
                    <li>
                        <strong>Utiliser closest()</strong> : Pour trouver l'ancêtre correspondant à 
                        un sélecteur
                    </li>
                    <li>
                        <strong>Mémoriser les gestionnaires</strong> : Avec useCallback pour éviter 
                        les re-créations
                    </li>
                    <li>
                        <strong>Documenter les data attributes</strong> : Pour que l'équipe comprenne 
                        leur usage
                    </li>
                    <li>
                        <strong>Attention à stopPropagation</strong> : Peut causer des bugs inattendus
                    </li>
                </ul>
            </section>

            <section>
                <h2>Quand Utiliser la Délégation Manuelle</h2>
                <h3>Utiliser quand :</h3>
                <ul>
                    <li>Vous avez beaucoup d'éléments similaires (liste, tableau)</li>
                    <li>Les éléments sont ajoutés/supprimés dynamiquement</li>
                    <li>Vous voulez optimiser la performance</li>
                    <li>La logique de gestion est commune à plusieurs éléments</li>
                </ul>

                <h3>Ne pas utiliser quand :</h3>
                <ul>
                    <li>Vous avez peu d'éléments</li>
                    <li>Chaque élément a une logique différente</li>
                    <li>Cela complique inutilement le code</li>
                    <li>React gère déjà efficacement vos événements</li>
                </ul>
            </section>
        </div>
    );
}

export default DelegationTheoryPage;
