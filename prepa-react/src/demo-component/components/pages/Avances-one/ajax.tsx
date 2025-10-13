
function AjaxTheoryPage() {
    return (
        <div>
            <h1>AJAX et Requêtes HTTP en React</h1>

            <section>
                <h2>Introduction</h2>
                <p>
                    AJAX (Asynchronous JavaScript And XML) permet de communiquer avec un serveur de 
                    manière asynchrone sans recharger la page. En React, les requêtes HTTP sont 
                    généralement effectuées dans useEffect et les données sont stockées dans l'état.
                </p>
            </section>

            <section>
                <h2>Fetch API</h2>
                <p>
                    Fetch est l'API native du navigateur pour effectuer des requêtes HTTP. Elle 
                    retourne des Promises et est largement supportée.
                </p>

                <h3>GET Request</h3>
                <pre>
{`useEffect(() => {
    fetch('https://api.example.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => setError(error));
}, []);`}
                </pre>

                <h3>POST Request</h3>
                <pre>
{`const createUser = async (userData) => {
    const response = await fetch('https://api.example.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    });
    
    const data = await response.json();
    return data;
};`}
                </pre>

                <h3>PUT Request</h3>
                <pre>
{`const updateUser = async (id, userData) => {
    const response = await fetch(\`https://api.example.com/users/\${id}\`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    });
    
    return await response.json();
};`}
                </pre>

                <h3>DELETE Request</h3>
                <pre>
{`const deleteUser = async (id) => {
    await fetch(\`https://api.example.com/users/\${id}\`, {
        method: 'DELETE'
    });
};`}
                </pre>
            </section>

            <section>
                <h2>Gestion de l'État de la Requête</h2>
                <p>
                    Une bonne pratique consiste à gérer trois états : les données, le chargement, 
                    et les erreurs.
                </p>
                <pre>
{`function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setLoading(true);
        
        fetch('https://api.example.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur réseau');
                }
                return response.json();
            })
            .then(data => {
                setUsers(data);
                setError(null);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    
    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur : {error}</div>;
    return <div>{/* Afficher les users */}</div>;
}`}
                </pre>
            </section>

            <section>
                <h2>Async/Await</h2>
                <p>
                    La syntaxe async/await rend le code asynchrone plus lisible. Attention, la 
                    fonction passée à useEffect ne peut pas être async directement.
                </p>
                <pre>
{`useEffect(() => {
    const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://api.example.com/users');
            
            if (!response.ok) {
                throw new Error(\`HTTP error! status: \${response.status}\`);
            }
            
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
    
    fetchUsers();
}, []);`}
                </pre>
            </section>

            <section>
                <h2>Annulation de Requêtes</h2>
                <p>
                    Il est important d'annuler les requêtes si le composant se démonte avant la 
                    réponse, pour éviter les mises à jour d'état sur un composant démonté.
                </p>
                <pre>
{`useEffect(() => {
    const controller = new AbortController();
    
    const fetchData = async () => {
        try {
            const response = await fetch('https://api.example.com/data', {
                signal: controller.signal
            });
            const data = await response.json();
            setData(data);
        } catch (error) {
            if (error.name !== 'AbortError') {
                setError(error.message);
            }
        }
    };
    
    fetchData();
    
    return () => {
        controller.abort(); // Annule la requête au démontage
    };
}, []);`}
                </pre>
            </section>

            <section>
                <h2>Headers et Authentification</h2>
                <pre>
{`const fetchWithAuth = async () => {
    const token = localStorage.getItem('token');
    
    const response = await fetch('https://api.example.com/protected', {
        headers: {
            'Authorization': \`Bearer \${token}\`,
            'Content-Type': 'application/json'
        }
    });
    
    return await response.json();
};`}
                </pre>
            </section>

            <section>
                <h2>Gestion des Erreurs HTTP</h2>
                <p>
                    Fetch ne rejette la Promise que pour les erreurs réseau. Les codes d'erreur HTTP 
                    (404, 500, etc.) nécessitent une vérification manuelle.
                </p>
                <pre>
{`const fetchData = async () => {
    try {
        const response = await fetch('https://api.example.com/data');
        
        if (!response.ok) {
            // Gérer les différents codes d'erreur
            if (response.status === 404) {
                throw new Error('Ressource non trouvée');
            } else if (response.status === 401) {
                throw new Error('Non autorisé');
            } else if (response.status === 500) {
                throw new Error('Erreur serveur');
            } else {
                throw new Error(\`Erreur HTTP: \${response.status}\`);
            }
        }
        
        return await response.json();
    } catch (error) {
        console.error('Erreur:', error);
        throw error;
    }
};`}
                </pre>
            </section>

            <section>
                <h2>Axios - Alternative à Fetch</h2>
                <p>
                    Axios est une bibliothèque HTTP populaire qui offre plus de fonctionnalités que 
                    Fetch et une API plus simple.
                </p>
                <h3>Installation</h3>
                <pre>npm install axios</pre>

                <h3>Utilisation de Base</h3>
                <pre>
{`import axios from 'axios';

// GET
const response = await axios.get('https://api.example.com/users');
const users = response.data;

// POST
await axios.post('https://api.example.com/users', {
    name: 'Jean',
    email: 'jean@example.com'
});

// PUT
await axios.put('https://api.example.com/users/1', userData);

// DELETE
await axios.delete('https://api.example.com/users/1');`}
                </pre>

                <h3>Avantages d'Axios</h3>
                <ul>
                    <li>Transformation automatique JSON</li>
                    <li>Gestion automatique des erreurs HTTP</li>
                    <li>Intercepteurs de requêtes et réponses</li>
                    <li>Annulation de requêtes simplifiée</li>
                    <li>Support du timeout</li>
                    <li>Protection CSRF</li>
                </ul>

                <h3>Configuration Globale</h3>
                <pre>
{`axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = 'Bearer token';
axios.defaults.timeout = 10000;`}
                </pre>

                <h3>Intercepteurs</h3>
                <pre>
{`// Intercepteur de requête
axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = \`Bearer \${token}\`;
        }
        return config;
    },
    error => Promise.reject(error)
);

// Intercepteur de réponse
axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401) {
            // Rediriger vers login
        }
        return Promise.reject(error);
    }
);`}
                </pre>
            </section>

            <section>
                <h2>Pattern de Chargement de Données</h2>
                <h3>Hook Personnalisé pour Fetch</h3>
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
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError(error);
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
    if (error) return <div>Erreur: {error.message}</div>;
    return <div>{/* Afficher data */}</div>;
}`}
                </pre>
            </section>

            <section>
                <h2>Requêtes Dépendantes</h2>
                <p>
                    Parfois, une requête dépend du résultat d'une autre requête.
                </p>
                <pre>
{`useEffect(() => {
    const fetchUserAndPosts = async () => {
        try {
            // Première requête
            const userResponse = await fetch(\`/api/users/\${userId}\`);
            const user = await userResponse.json();
            setUser(user);
            
            // Deuxième requête qui dépend de la première
            const postsResponse = await fetch(\`/api/users/\${user.id}/posts\`);
            const posts = await postsResponse.json();
            setPosts(posts);
        } catch (error) {
            setError(error);
        }
    };
    
    if (userId) {
        fetchUserAndPosts();
    }
}, [userId]);`}
                </pre>
            </section>

            <section>
                <h2>Requêtes Parallèles</h2>
                <p>
                    Pour charger plusieurs ressources indépendantes en même temps :
                </p>
                <pre>
{`useEffect(() => {
    const fetchAllData = async () => {
        try {
            const [usersRes, postsRes, commentsRes] = await Promise.all([
                fetch('/api/users'),
                fetch('/api/posts'),
                fetch('/api/comments')
            ]);
            
            const [users, posts, comments] = await Promise.all([
                usersRes.json(),
                postsRes.json(),
                commentsRes.json()
            ]);
            
            setUsers(users);
            setPosts(posts);
            setComments(comments);
        } catch (error) {
            setError(error);
        }
    };
    
    fetchAllData();
}, []);`}
                </pre>
            </section>

            <section>
                <h2>Pagination</h2>
                <pre>
{`function UserList() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch(\`/api/users?page=\${page}&limit=10\`);
            const data = await response.json();
            
            setUsers(prevUsers => [...prevUsers, ...data.users]);
            setHasMore(data.hasMore);
        };
        
        fetchUsers();
    }, [page]);
    
    const loadMore = () => {
        setPage(prevPage => prevPage + 1);
    };
    
    return (
        <div>
            {users.map(user => <div key={user.id}>{user.name}</div>)}
            {hasMore && <button onClick={loadMore}>Charger plus</button>}
        </div>
    );
}`}
                </pre>
            </section>

            <section>
                <h2>Recherche avec Debounce</h2>
                <p>
                    Pour éviter trop de requêtes lors de la saisie, on peut utiliser un debounce.
                </p>
                <pre>
{`function SearchBar() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    
    useEffect(() => {
        if (!query) {
            setResults([]);
            return;
        }
        
        const timer = setTimeout(async () => {
            const response = await fetch(\`/api/search?q=\${query}\`);
            const data = await response.json();
            setResults(data);
        }, 300); // Attendre 300ms après la dernière frappe
        
        return () => clearTimeout(timer);
    }, [query]);
    
    return (
        <div>
            <input 
                value={query} 
                onChange={e => setQuery(e.target.value)} 
            />
            {/* Afficher results */}
        </div>
    );
}`}
                </pre>
            </section>

            <section>
                <h2>Bibliothèques de Data Fetching</h2>
                <p>
                    Pour des besoins avancés (cache, revalidation, etc.), des bibliothèques 
                    spécialisées existent :
                </p>

                <h3>React Query (TanStack Query)</h3>
                <pre>
{`import { useQuery } from '@tanstack/react-query';

function Users() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('/api/users').then(res => res.json())
    });
    
    if (isLoading) return <div>Chargement...</div>;
    if (error) return <div>Erreur: {error.message}</div>;
    return <div>{/* Afficher data */}</div>;
}`}
                </pre>
                <p>Avantages : Cache automatique, revalidation, retry, refetch au focus, etc.</p>

                <h3>SWR</h3>
                <pre>
{`import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

function Users() {
    const { data, error, isLoading } = useSWR('/api/users', fetcher);
    
    if (isLoading) return <div>Chargement...</div>;
    if (error) return <div>Erreur</div>;
    return <div>{/* Afficher data */}</div>;
}`}
                </pre>
            </section>

            <section>
                <h2>Bonnes Pratiques</h2>
                <ul>
                    <li>Toujours gérer les états de chargement et d'erreur</li>
                    <li>Annuler les requêtes lors du démontage du composant</li>
                    <li>Utiliser async/await pour plus de lisibilité</li>
                    <li>Centraliser la configuration des requêtes (baseURL, headers)</li>
                    <li>Gérer les erreurs HTTP explicitement</li>
                    <li>Débouncer les requêtes de recherche</li>
                    <li>Éviter les requêtes dans les boucles de rendu</li>
                    <li>Considérer une bibliothèque de data fetching pour les apps complexes</li>
                    <li>Implémenter un système de retry pour les erreurs réseau</li>
                    <li>Afficher des messages d'erreur clairs à l'utilisateur</li>
                </ul>
            </section>
        </div>
    );
}

export default AjaxTheoryPage;