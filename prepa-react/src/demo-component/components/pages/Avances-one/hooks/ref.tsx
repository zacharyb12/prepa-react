

function RefTheoryPage() {
    return (
        <div>
            <h1>useRef - Hook de Référence</h1>

            <section>
                <h2>Définition</h2>
                <p>
                    useRef est un hook qui retourne un objet mutable dont la propriété .current 
                    peut contenir n'importe quelle valeur. Cette valeur persiste entre les rendus 
                    et sa modification ne déclenche pas de re-rendu.
                </p>
                <pre>
{`const ref = useRef(valeurInitiale);
// ref.current = valeurInitiale`}
                </pre>
            </section>

            <section>
                <h2>Différence avec useState</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Caractéristique</th>
                            <th>useState</th>
                            <th>useRef</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Déclenche un re-rendu</td>
                            <td>Oui</td>
                            <td>Non</td>
                        </tr>
                        <tr>
                            <td>Valeur accessible via</td>
                            <td>state</td>
                            <td>ref.current</td>
                        </tr>
                        <tr>
                            <td>Mise à jour</td>
                            <td>Asynchrone</td>
                            <td>Synchrone</td>
                        </tr>
                        <tr>
                            <td>Valeur entre rendus</td>
                            <td>Conservée</td>
                            <td>Conservée</td>
                        </tr>
                        <tr>
                            <td>Utilisation typique</td>
                            <td>Données d'interface</td>
                            <td>Références DOM, valeurs sans UI</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Cas d'Usage Principaux</h2>

                <h3>1. Accéder aux Éléments DOM</h3>
                <p>
                    C'est l'utilisation la plus courante de useRef : obtenir une référence à un 
                    élément DOM pour le manipuler directement.
                </p>
                <pre>
{`function InputFocus() {
    const inputRef = useRef(null);
    
    const handleFocus = () => {
        inputRef.current.focus();
    };
    
    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleFocus}>Focus sur l'input</button>
        </div>
    );
}`}
                </pre>

                <h3>2. Stocker des Valeurs Mutables</h3>
                <p>
                    useRef peut stocker n'importe quelle valeur qui ne doit pas provoquer de re-rendu 
                    lors de sa modification.
                </p>
                <pre>
{`function Timer() {
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef(null);
    
    const start = () => {
        intervalRef.current = setInterval(() => {
            setSeconds(s => s + 1);
        }, 1000);
    };
    
    const stop = () => {
        clearInterval(intervalRef.current);
    };
    
    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);
    
    return (
        <div>
            <p>Secondes: {seconds}</p>
            <button onClick={start}>Démarrer</button>
            <button onClick={stop}>Arrêter</button>
        </div>
    );
}`}
                </pre>

                <h3>3. Conserver la Valeur Précédente</h3>
                <pre>
{`function usePrevious(value) {
    const ref = useRef();
    
    useEffect(() => {
        ref.current = value;
    }, [value]);
    
    return ref.current;
}

function Counter() {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);
    
    return (
        <div>
            <p>Actuel: {count}</p>
            <p>Précédent: {prevCount}</p>
            <button onClick={() => setCount(count + 1)}>
                Incrémenter
            </button>
        </div>
    );
}`}
                </pre>

                <h3>4. Éviter les Fermetures Périmées</h3>
                <p>
                    useRef permet d'accéder toujours à la valeur actuelle, même dans des callbacks 
                    qui ont été créés avec d'anciennes valeurs.
                </p>
                <pre>
{`function Component() {
    const [count, setCount] = useState(0);
    const countRef = useRef(count);
    
    useEffect(() => {
        countRef.current = count;
    }, [count]);
    
    const handleAlert = () => {
        setTimeout(() => {
            // countRef.current a toujours la valeur actuelle
            alert('Count: ' + countRef.current);
        }, 3000);
    };
    
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={handleAlert}>Afficher dans 3s</button>
        </div>
    );
}`}
                </pre>
            </section>

            <section>
                <h2>Manipulation du DOM</h2>

                <h3>Focus</h3>
                <pre>
{`const inputRef = useRef(null);
inputRef.current.focus();`}
                </pre>

                <h3>Scroll</h3>
                <pre>
{`const divRef = useRef(null);
divRef.current.scrollIntoView({ behavior: 'smooth' });`}
                </pre>

                <h3>Sélection de Texte</h3>
                <pre>
{`const textRef = useRef(null);
textRef.current.select();`}
                </pre>

                <h3>Mesures</h3>
                <pre>
{`const elementRef = useRef(null);

const getSize = () => {
    const width = elementRef.current.offsetWidth;
    const height = elementRef.current.offsetHeight;
    console.log('Taille:', width, height);
};`}
                </pre>

                <h3>Animation</h3>
                <pre>
{`const boxRef = useRef(null);

const animate = () => {
    boxRef.current.style.transform = 'translateX(100px)';
    boxRef.current.style.transition = 'transform 0.3s';
};`}
                </pre>
            </section>

            <section>
                <h2>Références vers des Composants Enfants</h2>
                <p>
                    Par défaut, vous ne pouvez pas utiliser ref sur des composants fonctionnels. 
                    Il faut utiliser forwardRef.
                </p>
                <pre>
{`const FancyInput = React.forwardRef((props, ref) => {
    return <input ref={ref} {...props} />;
});

function Parent() {
    const inputRef = useRef(null);
    
    return (
        <div>
            <FancyInput ref={inputRef} />
            <button onClick={() => inputRef.current.focus()}>
                Focus
            </button>
        </div>
    );
}`}
                </pre>
            </section>

            <section>
                <h2>useImperativeHandle</h2>
                <p>
                    useImperativeHandle permet de personnaliser la valeur exposée par ref lorsqu'on 
                    utilise forwardRef. Cela permet de limiter l'accès au composant enfant.
                </p>
                <pre>
{`const CustomInput = React.forwardRef((props, ref) => {
    const inputRef = useRef();
    
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
        clear: () => {
            inputRef.current.value = '';
        }
    }));
    
    return <input ref={inputRef} {...props} />;
});

function Parent() {
    const inputRef = useRef();
    
    return (
        <div>
            <CustomInput ref={inputRef} />
            <button onClick={() => inputRef.current.focus()}>
                Focus
            </button>
            <button onClick={() => inputRef.current.clear()}>
                Effacer
            </button>
        </div>
    );
}`}
                </pre>
                <p>
                    Avantage : Le parent ne peut appeler que les méthodes exposées, pas manipuler 
                    l'input directement.
                </p>
            </section>

            <section>
                <h2>Références Multiples</h2>

                <h3>Tableau de Refs</h3>
                <pre>
{`function ItemList() {
    const itemsRef = useRef([]);
    
    const scrollToItem = (index) => {
        itemsRef.current[index]?.scrollIntoView({ behavior: 'smooth' });
    };
    
    return (
        <div>
            {items.map((item, index) => (
                <div
                    key={item.id}
                    ref={el => itemsRef.current[index] = el}
                >
                    {item.name}
                </div>
            ))}
            <button onClick={() => scrollToItem(5)}>
                Aller à l'item 5
            </button>
        </div>
    );
}`}
                </pre>

                <h3>Map de Refs</h3>
                <pre>
{`function ItemList() {
    const itemsRef = useRef(new Map());
    
    const scrollToItem = (id) => {
        const node = itemsRef.current.get(id);
        node?.scrollIntoView({ behavior: 'smooth' });
    };
    
    return (
        <div>
            {items.map(item => (
                <div
                    key={item.id}
                    ref={node => {
                        if (node) {
                            itemsRef.current.set(item.id, node);
                        } else {
                            itemsRef.current.delete(item.id);
                        }
                    }}
                >
                    {item.name}
                </div>
            ))}
        </div>
    );
}`}
                </pre>
            </section>

            <section>
                <h2>Refs avec des Composants de Classe</h2>
                <p>
                    Avec les composants de classe, ref donne accès à l'instance du composant, 
                    permettant d'appeler ses méthodes.
                </p>
                <pre>
{`class MyComponent extends React.Component {
    myMethod() {
        console.log('Méthode appelée');
    }
    
    render() {
        return <div>Contenu</div>;
    }
}

function Parent() {
    const componentRef = useRef(null);
    
    const callMethod = () => {
        componentRef.current.myMethod();
    };
    
    return (
        <div>
            <MyComponent ref={componentRef} />
            <button onClick={callMethod}>Appeler méthode</button>
        </div>
    );
}`}
                </pre>
            </section>

            <section>
                <h2>Callback Refs</h2>
                <p>
                    Au lieu de passer un objet ref, vous pouvez passer une fonction. Cette fonction 
                    est appelée avec l'élément DOM quand il est monté et avec null quand il est démonté.
                </p>
                <pre>
{`function Component() {
    const [height, setHeight] = useState(0);
    
    const measuredRef = useCallback(node => {
        if (node !== null) {
            setHeight(node.getBoundingClientRect().height);
        }
    }, []);
    
    return (
        <div>
            <div ref={measuredRef}>
                Contenu à mesurer
            </div>
            <p>Hauteur: {height}px</p>
        </div>
    );
}`}
                </pre>
                <p>
                    Avantage : Permet de réagir immédiatement au montage de l'élément.
                </p>
            </section>

            <section>
                <h2>Erreurs Courantes</h2>

                <h3>1. Accéder à ref.current dans le Rendu</h3>
                <pre>
{`// Incorrect
function Component() {
    const ref = useRef(null);
    console.log(ref.current); // Peut être null au premier rendu
    
    return <div ref={ref}>Contenu</div>;
}

// Correct
function Component() {
    const ref = useRef(null);
    
    useEffect(() => {
        console.log(ref.current); // Garanti d'être disponible
    }, []);
    
    return <div ref={ref}>Contenu</div>;
}`}
                </pre>

                <h3>2. Oublier que ref.current est Mutable</h3>
                <pre>
{`// Ne déclenche pas de re-rendu
const countRef = useRef(0);
countRef.current = countRef.current + 1;
// Le composant ne se re-rend pas

// Si vous avez besoin d'un re-rendu
const [count, setCount] = useState(0);
setCount(count + 1);`}
                </pre>

                <h3>3. Utiliser ref sur un Composant Fonctionnel sans forwardRef</h3>
                <pre>
{`// Incorrect
function MyComponent() {
    return <div>Contenu</div>;
}

function Parent() {
    const ref = useRef();
    return <MyComponent ref={ref} />; // Erreur !
}

// Correct
const MyComponent = React.forwardRef((props, ref) => {
    return <div ref={ref}>Contenu</div>;
});`}
                </pre>
            </section>

            <section>
                <h2>Quand Utiliser useRef</h2>

                <h3>Utiliser useRef pour :</h3>
                <ul>
                    <li>Accéder aux éléments DOM</li>
                    <li>Stocker des timers, intervalles, abonnements</li>
                    <li>Garder une valeur entre rendus sans déclencher de re-rendu</li>
                    <li>Stocker la valeur précédente d'une variable</li>
                    <li>Éviter les fermetures périmées</li>
                    <li>Implémenter un comportement impératif</li>
                </ul>

                <h3>Ne pas utiliser useRef pour :</h3>
                <ul>
                    <li>Stocker des données qui affectent l'interface (utiliser useState)</li>
                    <li>Remplacer la gestion d'état normale</li>
                    <li>Communiquer entre composants (utiliser props/Context)</li>
                </ul>
            </section>

            <section>
                <h2>Performance et Optimisation</h2>
                <p>
                    useRef ne déclenche pas de re-rendu, ce qui peut être utilisé pour optimiser 
                    les performances.
                </p>
                <pre>
{`function Component() {
    const renderCountRef = useRef(0);
    
    useEffect(() => {
        renderCountRef.current += 1;
    });
    
    console.log('Nombre de rendus:', renderCountRef.current);
    
    return <div>Contenu</div>;
}`}
                </pre>
            </section>

            <section>
                <h2>Refs et Effets de Bord</h2>
                <p>
                    Modifier ref.current ne déclenche pas useEffect même si ref est dans les 
                    dépendances.
                </p>
                <pre>
{`function Component() {
    const ref = useRef(0);
    
    useEffect(() => {
        console.log('Effect'); // Ne se réexécute pas quand ref.current change
    }, [ref]);
    
    const increment = () => {
        ref.current += 1; // Ne déclenche pas l'effet
    };
    
    return <button onClick={increment}>Incrémenter</button>;
}`}
                </pre>
            </section>

            <section>
                <h2>Bonnes Pratiques</h2>
                <ul>
                    <li>
                        <strong>Vérifier null</strong> : Toujours vérifier que ref.current n'est pas 
                        null avant de l'utiliser
                    </li>
                    <li>
                        <strong>Accès dans useEffect</strong> : Accéder aux refs DOM dans useEffect, 
                        pas pendant le rendu
                    </li>
                    <li>
                        <strong>Nettoyage</strong> : Nettoyer les refs contenant des ressources 
                        (timers, abonnements)
                    </li>
                    <li>
                        <strong>Préférer useState</strong> : Si le changement doit affecter l'UI, 
                        utiliser useState
                    </li>
                    <li>
                        <strong>forwardRef avec parcimonie</strong> : Exposer ref uniquement si nécessaire
                    </li>
                    <li>
                        <strong>useImperativeHandle</strong> : Limiter l'API exposée via ref
                    </li>
                    <li>
                        <strong>Documentation</strong> : Documenter pourquoi vous utilisez ref plutôt 
                        que state
                    </li>
                </ul>
            </section>

            <section>
                <h2>Alternatives à useRef</h2>
                <p>
                    Avant d'utiliser useRef pour manipuler le DOM, considérez ces alternatives :
                </p>
                <ul>
                    <li>
                        <strong>État React</strong> : Pour tout ce qui affecte l'UI
                    </li>
                    <li>
                        <strong>Styles CSS</strong> : Pour les animations et transitions
                    </li>
                    <li>
                        <strong>Attributs HTML</strong> : Pour les comportements natifs (autofocus, etc.)
                    </li>
                    <li>
                        <strong>Bibliothèques</strong> : Pour des manipulations DOM complexes
                    </li>
                </ul>
                <p>
                    Règle générale : Essayez de rester déclaratif avec React. N'utilisez useRef 
                    que quand l'approche déclarative n'est pas possible ou pratique.
                </p>
            </section>
        </div>
    );
}

export default RefTheoryPage;
