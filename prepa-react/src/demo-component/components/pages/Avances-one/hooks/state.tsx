function HooksState() {
    return (
        <div>
            <h1>useState - Hook d'État</h1>

            <section>
                <h2>Définition</h2>
                <p>
                    useState est un hook qui permet d'ajouter un état local à un composant fonctionnel. 
                    Il retourne un tableau contenant deux éléments : la valeur actuelle de l'état et une 
                    fonction pour la mettre à jour.
                </p>
            </section>

            <section>
                <h2>Syntaxe de Base</h2>
                <pre>
{`const [state, setState] = useState(valeurInitiale);`}
                </pre>
                <ul>
                    <li><strong>state</strong> : La valeur actuelle de l'état</li>
                    <li><strong>setState</strong> : La fonction pour modifier l'état</li>
                    <li><strong>valeurInitiale</strong> : La valeur de départ de l'état</li>
                </ul>
            </section>

            <section>
                <h2>Principes Fondamentaux</h2>
                <h3>1. Immutabilité</h3>
                <p>
                    React utilise l'immutabilité pour détecter les changements. Lorsque vous modifiez 
                    l'état, vous devez toujours créer une nouvelle valeur plutôt que de modifier 
                    l'ancienne directement.
                </p>
                <pre>
{`// Incorrect - Mutation directe
const [user, setUser] = useState({ name: 'Jean' });
user.name = 'Marie'; // Ne déclenche pas de re-rendu

// Correct - Création d'un nouvel objet
setUser({ ...user, name: 'Marie' }); // Déclenche un re-rendu`}
                </pre>

                <h3>2. Mise à Jour Asynchrone</h3>
                <p>
                    Les mises à jour d'état sont asynchrones. React peut regrouper plusieurs appels 
                    setState pour des raisons de performance. Si vous avez besoin de la valeur 
                    précédente, utilisez la forme fonctionnelle.
                </p>
                <pre>
{`// Problème potentiel
setCount(count + 1);
setCount(count + 1); // Peut ne pas donner count + 2

// Solution : forme fonctionnelle
setCount(prevCount => prevCount + 1);
setCount(prevCount => prevCount + 1); // Garantit count + 2`}
                </pre>

                <h3>3. Initialisation Paresseuse</h3>
                <p>
                    Si la valeur initiale nécessite un calcul coûteux, vous pouvez passer une fonction 
                    d'initialisation. Cette fonction ne sera exécutée qu'une seule fois lors du premier rendu.
                </p>
                <pre>
{`// Calcul coûteux à chaque rendu
const [data, setData] = useState(calculComplexe());

// Calcul uniquement au premier rendu
const [data, setData] = useState(() => calculComplexe());`}
                </pre>
            </section>

            <section>
                <h2>Types de Valeurs d'État</h2>
                
                <h3>État Simple</h3>
                <pre>
{`const [count, setCount] = useState(0);
const [name, setName] = useState('');
const [isVisible, setIsVisible] = useState(false);`}
                </pre>

                <h3>État Objet</h3>
                <pre>
{`const [user, setUser] = useState({
    name: 'Jean',
    age: 30,
    email: 'jean@example.com'
});

// Mise à jour partielle
setUser(prevUser => ({
    ...prevUser,
    age: 31
}));`}
                </pre>

                <h3>État Tableau</h3>
                <pre>
{`const [items, setItems] = useState([1, 2, 3]);

// Ajouter un élément
setItems(prevItems => [...prevItems, 4]);

// Supprimer un élément
setItems(prevItems => prevItems.filter(item => item !== 2));

// Modifier un élément
setItems(prevItems => 
    prevItems.map(item => item === 2 ? 20 : item)
);`}
                </pre>
            </section>

            <section>
                <h2>Règles Importantes</h2>
                <ul>
                    <li>
                        <strong>Ne jamais modifier l'état directement</strong> : Toujours utiliser la fonction setState
                    </li>
                    <li>
                        <strong>Utiliser la forme fonctionnelle</strong> : Quand la nouvelle valeur dépend de l'ancienne
                    </li>
                    <li>
                        <strong>Respecter l'immutabilité</strong> : Créer de nouvelles copies pour les objets et tableaux
                    </li>
                    <li>
                        <strong>Un état, une responsabilité</strong> : Découper l'état en plusieurs useState plutôt qu'un seul objet complexe
                    </li>
                </ul>
            </section>

            <section>
                <h2>Déclenchement du Re-rendu</h2>
                <p>
                    React compare la nouvelle valeur avec l'ancienne en utilisant Object.is(). 
                    Si elles sont identiques, le re-rendu est évité. C'est pourquoi l'immutabilité 
                    est cruciale pour les objets et tableaux.
                </p>
                <pre>
{`// Pas de re-rendu (même référence)
const [items, setItems] = useState([1, 2, 3]);
items.push(4);
setItems(items);

// Re-rendu déclenché (nouvelle référence)
setItems([...items, 4]);`}
                </pre>
            </section>

            <section>
                <h2>États Multiples vs État Unique</h2>
                <h3>Plusieurs useState</h3>
                <pre>
{`const [name, setName] = useState('');
const [age, setAge] = useState(0);
const [email, setEmail] = useState('');`}
                </pre>
                <p>Avantages : Simple, chaque valeur est indépendante</p>

                <h3>Un seul useState avec objet</h3>
                <pre>
{`const [form, setForm] = useState({
    name: '',
    age: 0,
    email: ''
});`}
                </pre>
                <p>Avantages : Regroupement logique, moins de déclarations</p>
                <p>
                    <strong>Recommandation</strong> : Utiliser plusieurs useState si les valeurs sont indépendantes, 
                    un seul objet si elles sont liées logiquement.
                </p>
            </section>

            <section>
                <h2>Erreurs Courantes</h2>
                <h3>1. Mutation Directe</h3>
                <pre>
{`// Incorrect
const [user, setUser] = useState({ name: 'Jean' });
user.name = 'Marie'; // Ne fonctionne pas`}
                </pre>

                <h3>2. Oubli du Spread Operator</h3>
                <pre>
{`// Incorrect - Écrase tout l'objet
setUser({ name: 'Marie' });

// Correct - Conserve les autres propriétés
setUser({ ...user, name: 'Marie' });`}
                </pre>

                <h3>3. Utilisation Immédiate de la Nouvelle Valeur</h3>
                <pre>
{`// Incorrect - count n'est pas encore mis à jour
setCount(count + 1);
console.log(count); // Affiche l'ancienne valeur

// Correct - Utiliser useEffect pour les actions après mise à jour
useEffect(() => {
    console.log(count); // Affiche la nouvelle valeur
}, [count]);`}
                </pre>
            </section>

            <section>
                <h2>Performance et Optimisation</h2>
                <p>
                    Chaque appel à setState déclenche un re-rendu du composant. Pour optimiser :
                </p>
                <ul>
                    <li>Regrouper les mises à jour d'état liées dans un seul objet</li>
                    <li>Utiliser React.memo pour éviter les re-rendus inutiles des composants enfants</li>
                    <li>Éviter de créer de nouveaux objets/tableaux si la valeur n'a pas changé</li>
                    <li>Utiliser useCallback pour mémoriser les fonctions de mise à jour</li>
                </ul>
            </section>
        </div>
    );
}

export default HooksState;