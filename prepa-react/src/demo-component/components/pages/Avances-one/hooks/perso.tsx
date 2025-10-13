
function HooksPersoTheoryPage() {
    return (
        <div>
            <h1>Hooks Personnalisés (Custom Hooks)</h1>

            <section>
                <h2>Définition</h2>
                <p>
                    Un hook personnalisé est une fonction JavaScript dont le nom commence par "use" 
                    et qui peut appeler d'autres hooks. C'est un mécanisme de réutilisation de logique 
                    stateful entre composants.
                </p>
                <p>
                    Contrairement aux composants qui retournent du JSX, les hooks personnalisés 
                    retournent des valeurs (données, fonctions, etc.) que d'autres composants peuvent 
                    utiliser.
                </p>
            </section>

            <section>
                <h2>Pourquoi Créer des Hooks Personnalisés</h2>
                <ul>
                    <li>
                        <strong>Réutilisation de logique</strong> : Partager la même logique entre 
                        plusieurs composants sans duplication
                    </li>
                    <li>
                        <strong>Abstraction</strong> : Cacher la complexité d'implémentation derrière 
                        une interface simple
                    </li>
                    <li>
                        <strong>Organisation</strong> : Séparer les préoccupations et rendre le code 
                        des composants plus lisible
                    </li>
                    <li>
                        <strong>Testabilité</strong> : Tester la logique indépendamment des composants
                    </li>
                    <li>
                        <strong>Composition</strong> : Construire des comportements complexes en 
                        combinant des hooks simples
                    </li>
                </ul>
            </section>

            <section>
                <h2>Convention de Nommage</h2>
                <p>
                    Le nom d'un hook personnalisé doit toujours commencer par "use". C'est une 
                    convention importante qui permet à React et aux outils de développement de détecter 
                    automatiquement les hooks.
                </p>
                <pre>
{`// Correct
function useCounter() { }
function useFetch() { }
function useLocalStorage() { }

// Incorrect
function counter() { }
function fetchData() { }
function getLocalStorage() { }`}
                </pre>
            </section>

            <section>
                <h2>Structure d'un Hook Personnalisé</h2>
                <pre>
{`function useCustomHook(parameters) {
    // 1. Déclarer l'état local si nécessaire
    const [state, setState] = useState(initialValue);
    
    // 2. Définir les effets de bord si nécessaire
    useEffect(() => {
        // Logique de l'effet
        return () => {
            // Nettoyage
        };
    }, [dependencies]);
    
    // 3. Définir les fonctions utilitaires
    const someFunction = () => {
        // Logique
    };
    
    // 4. Retourner les valeurs et fonctions utilisables
    return { state, someFunction };
}`}
                </pre>
            </section>

            <section>
                <h2>Exemples de Hooks Personnalisés</h2>

                <h3>1. useCounter - Compteur Réutilisable</h3>
                <pre>
{`function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);
    
    const increment = () => setCount(c => c + 1);
    const decrement = () => setCount(c => c - 1);
    const reset = () => setCount(initialValue);
    
    return { count, increment, decrement, reset };
}

// Utilisation
function Counter() {
    const { count, increment, decrement, reset } = useCounter(0);
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}`}
                </pre>

                <h3>2. useToggle - Booléen Toggle</h3>
                <pre>
{`function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);
    
    const toggle = () => setValue(v => !v);
    const setTrue = () => setValue(true);
    const setFalse = () => setValue(false);
    
    return [value, { toggle, setTrue, setFalse }];
}

// Utilisation
function Modal() {
    const [isOpen, { toggle, setTrue, setFalse }] = useToggle(false);
    
    return (
        <div>
            <button onClick={setTrue}>Ouvrir</button>
            {isOpen && (
                <div>
                    <p>Contenu du modal</p>
                    <button onClick={setFalse}>Fermer</button>
                </div>
            )}
        </div>
    );
}`}
                </pre>

                <h3>3. useLocalStorage - Persistance Locale</h3>
                <pre>
{`function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });
    
    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function 
                ? value(storedValue) 
                : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(error);
        }
    };
    
    return [storedValue, setValue];
}

// Utilisation
function Settings() {
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    
    return (
        <div>
            <p>Thème: {theme}</p>
            <button onClick={() => setTheme('dark')}>Mode Sombre</button>
        </div>
    );
}`}
                </pre>

                <h3>4. useFetch - Chargement de Données</h3>
                <pre>
{`function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const controller = new AbortController();
        
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url, {
                    signal: controller.signal
                });
                
                if (!response.ok) {
                    throw new Error('Erreur de chargement');
                }
                
                const result = await response.json();
                setData(result);
                setError(null);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
        
        return () => controller.abort();
    }, [url]);
    
    return { data, loading, error };
}

// Utilisation
function UserList() {
    const { data, loading, error } = useFetch('/api/users');
    
    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur: {error}</div>;
    return <ul>{data.map(user => <li key={user.id}>{user.name}</li>)}</ul>;
}`}
                </pre>

                <h3>5. useDebounce - Retarder les Mises à Jour</h3>
                <pre>
{`function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        
        return () => clearTimeout(timer);
    }, [value, delay]);
    
    return debouncedValue;
}

// Utilisation
function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    
    useEffect(() => {
        if (debouncedSearchTerm) {
            // Effectuer la recherche
            console.log('Recherche:', debouncedSearchTerm);
        }
    }, [debouncedSearchTerm]);
    
    return (
        <input 
            value={searchTerm} 
            onChange={e => setSearchTerm(e.target.value)} 
        />
    );
}`}
                </pre>

                <h3>6. useWindowSize - Taille de la Fenêtre</h3>
                <pre>
{`function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return windowSize;
}

// Utilisation
function ResponsiveComponent() {
    const { width } = useWindowSize();
    
    return (
        <div>
            {width < 768 ? <MobileView /> : <DesktopView />}
        </div>
    );
}`}
                </pre>

                <h3>7. usePrevious - Valeur Précédente</h3>
                <pre>
{`function usePrevious(value) {
    const ref = useRef();
    
    useEffect(() => {
        ref.current = value;
    }, [value]);
    
    return ref.current;
}

// Utilisation
function Counter() {
    const [count, setCount] = useState(0);
    const previousCount = usePrevious(count);
    
    return (
        <div>
            <p>Actuel: {count}</p>
            <p>Précédent: {previousCount}</p>
            <button onClick={() => setCount(count + 1)}>Incrémenter</button>
        </div>
    );
}`}
                </pre>
            </section>

            <section>
                <h2>Composition de Hooks</h2>
                <p>
                    Les hooks personnalisés peuvent utiliser d'autres hooks personnalisés, permettant 
                    de construire des abstractions de plus haut niveau.
                </p>
                <pre>
{`function useAuth() {
    const [user, setUser] = useLocalStorage('user', null);
    const [loading, setLoading] = useState(false);
    
    const login = async (credentials) => {
        setLoading(true);
        const userData = await api.login(credentials);
        setUser(userData);
        setLoading(false);
    };
    
    const logout = () => {
        setUser(null);
    };
    
    return { user, loading, login, logout };
}

// Ce hook utilise useAuth et ajoute de la logique
function useProtectedRoute() {
    const { user } = useAuth();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);
    
    return user;
}`}
                </pre>
            </section>

            <section>
                <h2>Règles des Hooks Personnalisés</h2>
                <p>
                    Les hooks personnalisés suivent les mêmes règles que les hooks React intégrés :
                </p>
                <ul>
                    <li>
                        <strong>Appel au niveau supérieur</strong> : Jamais dans des conditions, 
                        boucles ou fonctions imbriquées
                    </li>
                    <li>
                        <strong>Appel depuis des composants React ou d'autres hooks</strong> : Pas 
                        depuis des fonctions JavaScript normales
                    </li>
                    <li>
                        <strong>Ordre constant</strong> : Les hooks doivent être appelés dans le 
                        même ordre à chaque rendu
                    </li>
                    <li>
                        <strong>Convention de nommage</strong> : Toujours commencer par "use"
                    </li>
                </ul>
            </section>

            <section>
                <h2>Paramètres et Valeurs de Retour</h2>
                <h3>Paramètres</h3>
                <p>
                    Les hooks personnalisés peuvent accepter n'importe quels paramètres nécessaires 
                    à leur logique.
                </p>
                <pre>
{`function useApi(endpoint, options = {}) {
    // Logique utilisant endpoint et options
}`}
                </pre>

                <h3>Valeurs de Retour</h3>
                <p>Plusieurs patterns sont possibles :</p>
                <pre>
{`// Tableau (comme useState)
return [value, setValue];

// Objet (plus explicite)
return { value, setValue, loading, error };

// Valeur unique
return value;

// Fonction
return handleSubmit;`}
                </pre>
                <p>
                    Le choix dépend du nombre de valeurs retournées et de la clarté souhaitée. 
                    Les tableaux permettent le renommage facile, les objets sont plus explicites.
                </p>
            </section>

            <section>
                <h2>Tests des Hooks Personnalisés</h2>
                <p>
                    Les hooks personnalisés peuvent être testés avec la bibliothèque 
                    @testing-library/react-hooks.
                </p>
                <pre>
{`import { renderHook, act } from '@testing-library/react-hooks';

test('useCounter increments', () => {
    const { result } = renderHook(() => useCounter(0));
    
    act(() => {
        result.current.increment();
    });
    
    expect(result.current.count).toBe(1);
});`}
                </pre>
            </section>

            <section>
                <h2>Quand Créer un Hook Personnalisé</h2>
                <h3>Créer un hook quand :</h3>
                <ul>
                    <li>Vous répétez la même logique dans plusieurs composants</li>
                    <li>La logique est complexe et mérite d'être isolée</li>
                    <li>Vous voulez tester la logique indépendamment</li>
                    <li>Vous voulez partager la logique avec d'autres développeurs</li>
                </ul>

                <h3>Ne pas créer de hook quand :</h3>
                <ul>
                    <li>La logique est utilisée une seule fois</li>
                    <li>La logique est trop simple (ex: un simple useState)</li>
                    <li>La logique est très spécifique à un composant</li>
                </ul>
            </section>

            <section>
                <h2>Organisation des Hooks Personnalisés</h2>
                <p>Structure de dossiers recommandée :</p>
                <pre>
{`src/
  hooks/
    useAuth.js
    useApi.js
    useFetch.js
    useLocalStorage.js
    index.js  // Exporte tous les hooks`}
                </pre>
                <p>Cela permet d'importer facilement :</p>
                <pre>
{`import { useAuth, useFetch } from './hooks';`}
                </pre>
            </section>

            <section>
                <h2>Documentation des Hooks</h2>
                <p>
                    Il est important de documenter les hooks personnalisés, surtout s'ils sont 
                    partagés dans une équipe.
                </p>
                <pre>
{`/**
 * Hook pour gérer un compteur avec incrémentation/décrémentation
 * @param {number} initialValue - Valeur initiale du compteur
 * @returns {Object} Objet contenant count, increment, decrement, reset
 */
function useCounter(initialValue = 0) {
    // Implémentation
}`}
                </pre>
            </section>

            <section>
                <h2>Bonnes Pratiques</h2>
                <ul>
                    <li>
                        <strong>Nommer clairement</strong> : Le nom doit décrire ce que fait le hook
                    </li>
                    <li>
                        <strong>Un seul objectif</strong> : Chaque hook doit avoir une responsabilité unique
                    </li>
                    <li>
                        <strong>Documenter</strong> : Expliquer les paramètres et ce qui est retourné
                    </li>
                    <li>
                        <strong>Gérer les cas d'erreur</strong> : Prévoir les situations exceptionnelles
                    </li>
                    <li>
                        <strong>Nettoyer les ressources</strong> : Utiliser les fonctions de nettoyage 
                        dans useEffect
                    </li>
                    <li>
                        <strong>Tester</strong> : Écrire des tests pour les hooks complexes
                    </li>
                    <li>
                        <strong>Optimiser</strong> : Utiliser useMemo et useCallback si nécessaire
                    </li>
                </ul>
            </section>

            <section>
                <h2>Bibliothèques de Hooks</h2>
                <p>
                    Il existe des bibliothèques de hooks prêts à l'emploi pour éviter de réinventer 
                    la roue :
                </p>
                <ul>
                    <li>
                        <strong>react-use</strong> : Collection de hooks utilitaires essentiels
                    </li>
                    <li>
                        <strong>ahooks</strong> : Bibliothèque complète de hooks React
                    </li>
                    <li>
                        <strong>usehooks-ts</strong> : Hooks TypeScript avec typage fort
                    </li>
                    <li>
                        <strong>react-hook-form</strong> : Hooks spécialisés pour les formulaires
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default HooksPersoTheoryPage;
