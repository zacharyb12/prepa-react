
function CommunicationsTheoryPage() {
    return (
        <div>
            <h1>Communications entre Composants</h1>

            <section>
                <h2>Introduction</h2>
                <p>
                    Dans une application React, les composants doivent souvent communiquer entre eux 
                    pour partager des données et coordonner leurs comportements. Il existe plusieurs 
                    patterns de communication selon la relation entre les composants.
                </p>
            </section>

            <section>
                <h2>Communication Parent vers Enfant</h2>
                <p>
                    C'est la forme de communication la plus simple. Le parent transmet des données 
                    à l'enfant via les props.
                </p>
                <pre>
{`// Composant Parent
function Parent() {
    const message = "Bonjour depuis le parent";
    return <Enfant message={message} />;
}

// Composant Enfant
function Enfant({ message }) {
    return <div>{message}</div>;
}`}
                </pre>
                <p>
                    Les props sont en lecture seule. L'enfant ne peut pas les modifier directement. 
                    Cette unidirectionnalité garantit un flux de données prévisible.
                </p>
            </section>

            <section>
                <h2>Communication Enfant vers Parent</h2>
                <p>
                    Un enfant ne peut pas directement modifier l'état de son parent. Pour communiquer 
                    vers le haut, le parent passe une fonction callback que l'enfant peut appeler.
                </p>
                <pre>
{`// Composant Parent
function Parent() {
    const [message, setMessage] = useState('');
    
    const handleMessageFromChild = (msg) => {
        setMessage(msg);
    };
    
    return (
        <div>
            <p>Message reçu : {message}</p>
            <Enfant onSendMessage={handleMessageFromChild} />
        </div>
    );
}

// Composant Enfant
function Enfant({ onSendMessage }) {
    const sendMessage = () => {
        onSendMessage("Message depuis l'enfant");
    };
    
    return <button onClick={sendMessage}>Envoyer</button>;
}`}
                </pre>
            </section>

            <section>
                <h2>Communication entre Composants Frères</h2>
                <p>
                    Deux composants frères ne peuvent pas communiquer directement. La communication 
                    doit passer par leur parent commun en combinant les deux patterns précédents.
                </p>
                <pre>
{`// Composant Parent (médiateur)
function Parent() {
    const [sharedData, setSharedData] = useState('');
    
    return (
        <div>
            <Frere1 data={sharedData} />
            <Frere2 onUpdate={setSharedData} />
        </div>
    );
}

// Premier frère (reçoit les données)
function Frere1({ data }) {
    return <div>Données : {data}</div>;
}

// Second frère (envoie les données)
function Frere2({ onUpdate }) {
    return (
        <button onClick={() => onUpdate('Nouvelles données')}>
            Mettre à jour
        </button>
    );
}`}
                </pre>
                <p>
                    Principe : Remonter l'état au plus proche ancêtre commun (lifting state up).
                </p>
            </section>

            <section>
                <h2>Lifting State Up</h2>
                <p>
                    Lorsque plusieurs composants ont besoin de partager un état, on remonte cet état 
                    dans leur ancêtre commun le plus proche. Cet ancêtre devient la source unique de 
                    vérité pour ces données.
                </p>
                <h3>Principes</h3>
                <ul>
                    <li>L'état est géré par le composant parent</li>
                    <li>Les enfants reçoivent les données via props</li>
                    <li>Les enfants notifient le parent via des callbacks</li>
                    <li>Le parent met à jour l'état et redistribue aux enfants</li>
                </ul>
                <h3>Avantages</h3>
                <ul>
                    <li>Source unique de vérité</li>
                    <li>Synchronisation automatique entre composants</li>
                    <li>Flux de données prévisible</li>
                </ul>
                <h3>Inconvénients</h3>
                <ul>
                    <li>Props drilling si la hiérarchie est profonde</li>
                    <li>Le parent peut devenir complexe</li>
                    <li>Re-rendus potentiellement fréquents</li>
                </ul>
            </section>

            <section>
                <h2>Props Drilling</h2>
                <p>
                    Le props drilling désigne le passage de props à travers plusieurs niveaux de 
                    composants intermédiaires qui n'utilisent pas ces props, uniquement pour les 
                    transmettre plus bas dans l'arbre.
                </p>
                <pre>
{`// Props drilling sur 3 niveaux
function GrandParent() {
    const [user, setUser] = useState({ name: 'Jean' });
    return <Parent user={user} setUser={setUser} />;
}

function Parent({ user, setUser }) {
    // Ce composant ne fait que transmettre
    return <Enfant user={user} setUser={setUser} />;
}

function Enfant({ user, setUser }) {
    // Seul ce composant utilise vraiment les props
    return <div>{user.name}</div>;
}`}
                </pre>
                <h3>Problèmes</h3>
                <ul>
                    <li>Code verbeux et répétitif</li>
                    <li>Difficile à maintenir</li>
                    <li>Couplage fort entre composants</li>
                    <li>Refactorisation complexe</li>
                </ul>
                <h3>Solutions</h3>
                <ul>
                    <li>Context API pour les données globales</li>
                    <li>Composition de composants</li>
                    <li>Hooks personnalisés</li>
                    <li>État local plus proche du besoin</li>
                </ul>
            </section>

            <section>
                <h2>Context API</h2>
                <p>
                    Le Context API permet de partager des données entre composants sans les passer 
                    explicitement à chaque niveau. Idéal pour les données globales comme le thème, 
                    la langue, l'utilisateur connecté.
                </p>
                <pre>
{`// Création du contexte
const UserContext = createContext();

// Composant Provider
function App() {
    const [user, setUser] = useState({ name: 'Jean' });
    
    return (
        <UserContext.Provider value={{ user, setUser }}>
            <ComponentA />
        </UserContext.Provider>
    );
}

// Consommation du contexte (n'importe où dans l'arbre)
function ComponentC() {
    const { user, setUser } = useContext(UserContext);
    return <div>{user.name}</div>;
}`}
                </pre>
                <h3>Quand utiliser Context</h3>
                <ul>
                    <li>Données vraiment globales (thème, langue, auth)</li>
                    <li>Props drilling sur plus de 2-3 niveaux</li>
                    <li>Données utilisées par de nombreux composants</li>
                </ul>
                <h3>Quand ne pas utiliser Context</h3>
                <ul>
                    <li>État local à un composant</li>
                    <li>Données changeant très fréquemment</li>
                    <li>Communication simple parent-enfant</li>
                </ul>
            </section>

            <section>
                <h2>Composition de Composants</h2>
                <p>
                    La composition permet d'éviter le props drilling en passant des composants 
                    directement plutôt que des données.
                </p>
                <pre>
{`// Au lieu de props drilling
function Page() {
    const user = { name: 'Jean' };
    return (
        <Layout>
            <Sidebar user={user} />
            <Content user={user} />
        </Layout>
    );
}

// Utiliser la composition
function Page() {
    const user = { name: 'Jean' };
    return (
        <Layout
            sidebar={<Sidebar />}
            content={<UserProfile user={user} />}
        />
    );
}`}
                </pre>
                <p>
                    Avantage : Layout n'a pas besoin de connaître user. Seul UserProfile le reçoit directement.
                </p>
            </section>

            <section>
                <h2>Communication via État Global</h2>
                <p>
                    Pour des applications complexes, des bibliothèques de gestion d'état permettent 
                    une communication plus sophistiquée.
                </p>
                <h3>Redux</h3>
                <p>
                    Store centralisé, actions, reducers. Idéal pour les grandes applications avec 
                    beaucoup d'état partagé.
                </p>
                <h3>Zustand</h3>
                <p>
                    Alternative plus simple à Redux, moins de boilerplate.
                </p>
                <h3>Recoil / Jotai</h3>
                <p>
                    Gestion d'état atomique, plus flexible que Context.
                </p>
            </section>

            <section>
                <h2>Événements Personnalisés</h2>
                <p>
                    Pour des cas particuliers, on peut utiliser un event bus ou un système de 
                    pub/sub, mais c'est rarement nécessaire en React et peut rendre le code moins 
                    prévisible.
                </p>
            </section>

            <section>
                <h2>Patterns de Communication Avancés</h2>
                
                <h3>Render Props</h3>
                <p>
                    Passer une fonction comme prop qui retourne un élément React. Permet de partager 
                    de la logique entre composants.
                </p>
                <pre>
{`function DataProvider({ render }) {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        // Charger les données
    }, []);
    
    return render(data);
}

// Utilisation
<DataProvider render={(data) => <List items={data} />} />`}
                </pre>

                <h3>Higher-Order Components (HOC)</h3>
                <p>
                    Fonction qui prend un composant et retourne un nouveau composant enrichi. 
                    Moins utilisé depuis l'arrivée des hooks.
                </p>
                <pre>
{`function withUser(Component) {
    return function WrappedComponent(props) {
        const user = useUser();
        return <Component {...props} user={user} />;
    };
}

const UserProfile = withUser(Profile);`}
                </pre>
            </section>

            <section>
                <h2>Bonnes Pratiques</h2>
                <ul>
                    <li>
                        <strong>Garder l'état au plus proche</strong> : Ne pas remonter l'état si ce n'est 
                        pas nécessaire
                    </li>
                    <li>
                        <strong>Props explicites</strong> : Nommer clairement les props et les callbacks
                    </li>
                    <li>
                        <strong>Éviter le props drilling excessif</strong> : Utiliser Context au-delà de 2-3 niveaux
                    </li>
                    <li>
                        <strong>Unidirectionnalité</strong> : Toujours faire circuler les données du haut vers 
                        le bas (props) et les événements du bas vers le haut (callbacks)
                    </li>
                    <li>
                        <strong>Composition over Context</strong> : Privilégier la composition quand c'est possible
                    </li>
                    <li>
                        <strong>Documentation</strong> : Documenter les props et callbacks attendus
                    </li>
                </ul>
            </section>

            <section>
                <h2>Choix du Pattern de Communication</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Situation</th>
                            <th>Solution Recommandée</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Parent vers enfant direct</td>
                            <td>Props</td>
                        </tr>
                        <tr>
                            <td>Enfant vers parent</td>
                            <td>Callback props</td>
                        </tr>
                        <tr>
                            <td>Entre frères</td>
                            <td>Lifting state up</td>
                        </tr>
                        <tr>
                            <td>Props drilling 3+ niveaux</td>
                            <td>Context API ou Composition</td>
                        </tr>
                        <tr>
                            <td>État vraiment global</td>
                            <td>Context API ou Redux</td>
                        </tr>
                        <tr>
                            <td>Application complexe</td>
                            <td>Redux / Zustand / Recoil</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default CommunicationsTheoryPage;