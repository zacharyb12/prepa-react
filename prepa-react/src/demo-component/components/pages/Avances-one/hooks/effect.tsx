
function EffectTheoryPage() {
    return (
        <div>
            <h1>useEffect - Hook d'Effet</h1>

            <section>
                <h2>Définition</h2>
                <p>
                    useEffect est un hook qui permet d'exécuter des effets de bord dans les composants 
                    fonctionnels. Un effet de bord est toute opération qui affecte quelque chose en 
                    dehors du composant : requêtes HTTP, manipulation du DOM, timers, abonnements, etc.
                </p>
                <p>
                    Il remplace les méthodes de cycle de vie des classes : componentDidMount, 
                    componentDidUpdate et componentWillUnmount.
                </p>
            </section>

            <section>
                <h2>Syntaxe de Base</h2>
                <pre>
{`useEffect(() => {
    // Code de l'effet
    
    return () => {
        // Code de nettoyage (optionnel)
    };
}, [dependencies]);`}
                </pre>
                <ul>
                    <li><strong>Fonction d'effet</strong> : Code exécuté après le rendu</li>
                    <li><strong>Fonction de nettoyage</strong> : Code exécuté avant le prochain effet ou le démontage</li>
                    <li><strong>Tableau de dépendances</strong> : Contrôle quand l'effet doit s'exécuter</li>
                </ul>
            </section>

            <section>
                <h2>Tableau de Dépendances</h2>
                <p>
                    Le tableau de dépendances détermine quand l'effet doit être réexécuté. C'est le 
                    mécanisme de contrôle le plus important de useEffect.
                </p>

                <h3>Sans Tableau de Dépendances</h3>
                <pre>
{`useEffect(() => {
    console.log('Exécuté après chaque rendu');
});`}
                </pre>
                <p>L'effet s'exécute après chaque rendu du composant. À éviter généralement.</p>

                <h3>Tableau Vide</h3>
                <pre>
{`useEffect(() => {
    console.log('Exécuté une seule fois au montage');
}, []);`}
                </pre>
                <p>
                    L'effet s'exécute uniquement au montage du composant. Équivalent à componentDidMount. 
                    Utilisé pour l'initialisation unique.
                </p>

                <h3>Avec Dépendances</h3>
                <pre>
{`useEffect(() => {
    console.log('Exécuté quand count change');
}, [count]);`}
                </pre>
                <p>
                    L'effet s'exécute au montage et chaque fois qu'une des dépendances change. 
                    React compare les valeurs avec Object.is().
                </p>
            </section>

            <section>
                <h2>Fonction de Nettoyage</h2>
                <p>
                    La fonction de nettoyage est cruciale pour éviter les fuites mémoire et les bugs. 
                    Elle est exécutée avant chaque nouvelle exécution de l'effet et lors du démontage 
                    du composant.
                </p>
                <pre>
{`useEffect(() => {
    const timer = setInterval(() => {
        console.log('Tick');
    }, 1000);
    
    // Nettoyage : arrêter le timer
    return () => {
        clearInterval(timer);
    };
}, []);`}
                </pre>
                <h3>Cas nécessitant un nettoyage</h3>
                <ul>
                    <li>Timers (setTimeout, setInterval)</li>
                    <li>Abonnements (WebSocket, EventSource)</li>
                    <li>Écouteurs d'événements (addEventListener)</li>
                    <li>Requêtes annulables</li>
                    <li>Animations</li>
                </ul>
            </section>

            <section>
                <h2>Ordre d'Exécution</h2>
                <p>Comprendre l'ordre d'exécution est essentiel pour éviter les bugs :</p>
                <ol>
                    <li>Le composant se monte et s'affiche</li>
                    <li>useEffect s'exécute après le rendu</li>
                    <li>Le composant se met à jour (état ou props changent)</li>
                    <li>Le composant se re-rend</li>
                    <li>La fonction de nettoyage du useEffect précédent s'exécute</li>
                    <li>Le nouveau useEffect s'exécute</li>
                    <li>Le composant se démonte</li>
                    <li>La dernière fonction de nettoyage s'exécute</li>
                </ol>
            </section>

            <section>
                <h2>Cas d'Usage Courants</h2>

                <h3>Chargement de Données</h3>
                <pre>
{`useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
    };
    
    fetchData();
}, []);`}
                </pre>

                <h3>Abonnement à des Événements</h3>
                <pre>
{`useEffect(() => {
    const handleResize = () => {
        setWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);`}
                </pre>

                <h3>Synchronisation avec le Stockage Local</h3>
                <pre>
{`useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
}, [user]);`}
                </pre>

                <h3>Timer et Intervalles</h3>
                <pre>
{`useEffect(() => {
    const timer = setTimeout(() => {
        setMessage('Temps écoulé !');
    }, 3000);
    
    return () => clearTimeout(timer);
}, []);`}
                </pre>

                <h3>Titre de la Page</h3>
                <pre>
{`useEffect(() => {
    document.title = \`Notifications (\${count})\`;
}, [count]);`}
                </pre>
            </section>

            <section>
                <h2>Effets Multiples</h2>
                <p>
                    Il est recommandé de séparer les effets indépendants plutôt que de les regrouper. 
                    Cela améliore la lisibilité et permet un contrôle plus fin des dépendances.
                </p>
                <pre>
{`// Moins bon : tout dans un effet
useEffect(() => {
    document.title = title;
    fetchData();
    subscribeToUpdates();
}, [title, userId]);

// Meilleur : séparer les effets
useEffect(() => {
    document.title = title;
}, [title]);

useEffect(() => {
    fetchData();
}, [userId]);

useEffect(() => {
    const unsubscribe = subscribeToUpdates();
    return unsubscribe;
}, []);`}
                </pre>
            </section>

            <section>
                <h2>Pièges et Erreurs Courantes</h2>

                <h3>1. Dépendances Manquantes</h3>
                <pre>
{`// Incorrect : count n'est pas dans les dépendances
useEffect(() => {
    const interval = setInterval(() => {
        setCount(count + 1); // Utilise toujours la valeur initiale
    }, 1000);
    return () => clearInterval(interval);
}, []); // count devrait être dans les dépendances

// Correct : utiliser la forme fonctionnelle de setState
useEffect(() => {
    const interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
}, []);`}
                </pre>

                <h3>2. Boucles Infinies</h3>
                <pre>
{`// Incorrect : crée une boucle infinie
useEffect(() => {
    setData([...data, newItem]); // data change, l'effet se réexécute
}, [data]);

// Correct : ne pas mettre data dans les dépendances si on le modifie
useEffect(() => {
    setData(prevData => [...prevData, newItem]);
}, [newItem]);`}
                </pre>

                <h3>3. Objets et Tableaux comme Dépendances</h3>
                <pre>
{`// Problème : nouvel objet à chaque rendu
const config = { url: '/api/data' };
useEffect(() => {
    fetchData(config);
}, [config]); // config change à chaque rendu

// Solutions :
// 1. Déstructurer
useEffect(() => {
    fetchData({ url: '/api/data' });
}, []);

// 2. useMemo
const config = useMemo(() => ({ url: '/api/data' }), []);
useEffect(() => {
    fetchData(config);
}, [config]);`}
                </pre>

                <h3>4. Oublier le Nettoyage</h3>
                <pre>
{`// Incorrect : fuite mémoire
useEffect(() => {
    const subscription = subscribeToData();
    // Pas de nettoyage !
}, []);

// Correct
useEffect(() => {
    const subscription = subscribeToData();
    return () => subscription.unsubscribe();
}, []);`}
                </pre>
            </section>

            <section>
                <h2>Requêtes Asynchrones</h2>
                <p>
                    La fonction passée à useEffect ne peut pas être async directement. Il faut créer 
                    une fonction async à l'intérieur.
                </p>
                <pre>
{`// Incorrect
useEffect(async () => {
    const data = await fetchData();
}, []);

// Correct
useEffect(() => {
    const loadData = async () => {
        try {
            const data = await fetchData();
            setData(data);
        } catch (error) {
            setError(error);
        }
    };
    
    loadData();
}, []);`}
                </pre>

                <h3>Annulation de Requêtes</h3>
                <pre>
{`useEffect(() => {
    const controller = new AbortController();
    
    const fetchData = async () => {
        try {
            const response = await fetch('/api/data', {
                signal: controller.signal
            });
            const data = await response.json();
            setData(data);
        } catch (error) {
            if (error.name !== 'AbortError') {
                setError(error);
            }
        }
    };
    
    fetchData();
    
    return () => controller.abort();
}, []);`}
                </pre>
            </section>

            <section>
                <h2>useEffect vs useLayoutEffect</h2>
                <p>
                    useLayoutEffect fonctionne comme useEffect mais s'exécute de manière synchrone 
                    après toutes les mutations du DOM, avant que le navigateur ne peigne.
                </p>
                <h3>Utiliser useLayoutEffect quand :</h3>
                <ul>
                    <li>Vous devez mesurer le DOM</li>
                    <li>Vous devez modifier le DOM avant le paint</li>
                    <li>Vous voulez éviter un scintillement visuel</li>
                </ul>
                <p>
                    Dans 99% des cas, useEffect est le bon choix. useLayoutEffect peut bloquer 
                    l'affichage et nuire aux performances.
                </p>
            </section>

            <section>
                <h2>Optimisation des Effets</h2>
                <ul>
                    <li>
                        <strong>Minimiser les dépendances</strong> : Moins il y en a, moins l'effet se réexécute
                    </li>
                    <li>
                        <strong>Séparer les effets</strong> : Un effet par responsabilité
                    </li>
                    <li>
                        <strong>Utiliser la forme fonctionnelle de setState</strong> : Évite d'ajouter l'état 
                        aux dépendances
                    </li>
                    <li>
                        <strong>useMemo pour les objets/tableaux</strong> : Stabiliser les références
                    </li>
                    <li>
                        <strong>Débouncer les effets coûteux</strong> : Éviter trop d'exécutions
                    </li>
                </ul>
            </section>

            <section>
                <h2>Règles à Respecter</h2>
                <ul>
                    <li>Toujours inclure toutes les dépendances utilisées dans l'effet</li>
                    <li>Nettoyer les effets qui créent des ressources persistantes</li>
                    <li>Ne pas appeler useEffect conditionnellement</li>
                    <li>Utiliser des effets séparés pour des préoccupations différentes</li>
                    <li>Éviter les mutations dans les effets (préférer setState)</li>
                </ul>
            </section>

            <section>
                <h2>Debugging des Effets</h2>
                <pre>
{`useEffect(() => {
    console.log('Effect running');
    console.log('Dependencies:', { userId, filter });
    
    return () => {
        console.log('Cleanup running');
    };
}, [userId, filter]);`}
                </pre>
                <p>
                    Les React DevTools permettent aussi de voir quand les effets s'exécutent et 
                    pourquoi ils se réexécutent.
                </p>
            </section>
        </div>
    );
}

export default EffectTheoryPage;