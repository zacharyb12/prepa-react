function FormulairesTheoryPage() {
    return (
        <div>
            <h1>Les Formulaires en React</h1>

            <section>
                <h2>Introduction</h2>
                <p>
                    Les formulaires en React fonctionnent différemment du HTML classique. Au lieu de 
                    laisser le DOM gérer l'état des champs, React utilise son propre système d'état 
                    pour contrôler les valeurs des formulaires. On parle de composants contrôlés.
                </p>
            </section>

            <section>
                <h2>Composants Contrôlés vs Non Contrôlés</h2>
                
                <h3>Composants Contrôlés</h3>
                <p>
                    Un composant contrôlé est un élément de formulaire dont la valeur est gérée par 
                    l'état React. React devient la source unique de vérité pour la valeur du champ.
                </p>
                <pre>
{`const [name, setName] = useState('');

<input 
    type="text" 
    value={name} 
    onChange={(e) => setName(e.target.value)} 
/>`}
                </pre>
                <p>
                    Avantages : Validation en temps réel, contrôle total, transformation des données, 
                    synchronisation avec d'autres composants.
                </p>

                <h3>Composants Non Contrôlés</h3>
                <p>
                    Un composant non contrôlé conserve son propre état interne dans le DOM. On utilise 
                    une référence pour accéder à sa valeur quand nécessaire.
                </p>
                <pre>
{`const inputRef = useRef();

<input type="text" ref={inputRef} />

// Accès à la valeur
const value = inputRef.current.value;`}
                </pre>
                <p>
                    Avantages : Simplicité pour des formulaires simples, moins de code, intégration 
                    avec du code non-React.
                </p>
            </section>

            <section>
                <h2>Gestion des Différents Types de Champs</h2>

                <h3>Input Text</h3>
                <pre>
{`const [text, setText] = useState('');

<input 
    type="text" 
    value={text} 
    onChange={(e) => setText(e.target.value)} 
/>`}
                </pre>

                <h3>Textarea</h3>
                <pre>
{`const [message, setMessage] = useState('');

<textarea 
    value={message} 
    onChange={(e) => setMessage(e.target.value)} 
/>`}
                </pre>
                <p>
                    Note : En HTML, textarea utilise des enfants pour son contenu. En React, 
                    on utilise l'attribut value comme pour input.
                </p>

                <h3>Select</h3>
                <pre>
{`const [country, setCountry] = useState('france');

<select value={country} onChange={(e) => setCountry(e.target.value)}>
    <option value="france">France</option>
    <option value="belgique">Belgique</option>
    <option value="suisse">Suisse</option>
</select>`}
                </pre>

                <h3>Checkbox</h3>
                <pre>
{`const [isAccepted, setIsAccepted] = useState(false);

<input 
    type="checkbox" 
    checked={isAccepted} 
    onChange={(e) => setIsAccepted(e.target.checked)} 
/>`}
                </pre>
                <p>Note : Pour les checkbox, on utilise checked au lieu de value</p>

                <h3>Radio Buttons</h3>
                <pre>
{`const [gender, setGender] = useState('');

<input 
    type="radio" 
    value="male" 
    checked={gender === 'male'} 
    onChange={(e) => setGender(e.target.value)} 
/>
<input 
    type="radio" 
    value="female" 
    checked={gender === 'female'} 
    onChange={(e) => setGender(e.target.value)} 
/>`}
                </pre>
            </section>

            <section>
                <h2>Gestion de Formulaires Complexes</h2>

                <h3>Un État pour Plusieurs Champs</h3>
                <p>
                    Pour gérer plusieurs champs, on peut utiliser un objet d'état et une fonction 
                    générique de gestion des changements.
                </p>
                <pre>
{`const [form, setForm] = useState({
    name: '',
    email: '',
    age: 0
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
        ...prevForm,
        [name]: value
    }));
};

<input name="name" value={form.name} onChange={handleChange} />
<input name="email" value={form.email} onChange={handleChange} />
<input name="age" value={form.age} onChange={handleChange} />`}
                </pre>

                <h3>Gestion des Types de Champs</h3>
                <pre>
{`const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prevForm => ({
        ...prevForm,
        [name]: type === 'checkbox' ? checked : value
    }));
};`}
                </pre>
            </section>

            <section>
                <h2>Soumission de Formulaire</h2>
                <pre>
{`const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    
    // Traitement des données
    console.log(form);
    
    // Envoi au serveur, etc.
};

<form onSubmit={handleSubmit}>
    {/* Champs du formulaire */}
    <button type="submit">Envoyer</button>
</form>`}
                </pre>
                <p>
                    Important : Toujours appeler e.preventDefault() pour empêcher le comportement 
                    par défaut du navigateur qui rechargerait la page.
                </p>
            </section>

            <section>
                <h2>Validation de Formulaire</h2>

                <h3>Validation en Temps Réel</h3>
                <pre>
{`const [email, setEmail] = useState('');
const [emailError, setEmailError] = useState('');

const validateEmail = (value) => {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(value)) {
        setEmailError('Email invalide');
    } else {
        setEmailError('');
    }
};

const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
};`}
                </pre>

                <h3>Validation à la Soumission</h3>
                <pre>
{`const validateForm = () => {
    const errors = {};
    
    if (!form.name.trim()) {
        errors.name = 'Le nom est requis';
    }
    
    if (!form.email.includes('@')) {
        errors.email = 'Email invalide';
    }
    
    if (form.age < 18) {
        errors.age = 'Vous devez avoir au moins 18 ans';
    }
    
    return errors;
};

const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
        // Formulaire valide
        console.log('Envoi des données', form);
    } else {
        // Afficher les erreurs
        setFormErrors(errors);
    }
};`}
                </pre>
            </section>

            <section>
                <h2>Gestion des Erreurs</h2>
                <p>
                    Il est important d'afficher les erreurs de validation de manière claire pour 
                    guider l'utilisateur.
                </p>
                <pre>
{`const [errors, setErrors] = useState({});

<input 
    name="email" 
    value={form.email} 
    onChange={handleChange} 
/>
{errors.email && <span>{errors.email}</span>}`}
                </pre>
            </section>

            <section>
                <h2>Réinitialisation du Formulaire</h2>
                <pre>
{`const initialFormState = {
    name: '',
    email: '',
    age: 0
};

const [form, setForm] = useState(initialFormState);

const resetForm = () => {
    setForm(initialFormState);
    setErrors({});
};

<button type="button" onClick={resetForm}>Réinitialiser</button>`}
                </pre>
            </section>

            <section>
                <h2>Formulaires et Performance</h2>
                <p>
                    Pour les formulaires très volumineux, chaque changement de champ déclenche un 
                    re-rendu. Voici des techniques d'optimisation :
                </p>
                <ul>
                    <li>Débouncer les validations coûteuses</li>
                    <li>Découper le formulaire en sous-composants</li>
                    <li>Utiliser React.memo pour les champs indépendants</li>
                    <li>Valider uniquement au blur ou à la soumission</li>
                </ul>
            </section>

            <section>
                <h2>Bonnes Pratiques</h2>
                <ul>
                    <li>
                        <strong>Toujours prévenir le comportement par défaut</strong> : Utiliser e.preventDefault() dans onSubmit
                    </li>
                    <li>
                        <strong>Valider les données côté client et serveur</strong> : La validation client est pour l'UX, 
                        la validation serveur pour la sécurité
                    </li>
                    <li>
                        <strong>Donner du feedback immédiat</strong> : Afficher les erreurs au moment opportun
                    </li>
                    <li>
                        <strong>Désactiver le bouton pendant l'envoi</strong> : Éviter les soumissions multiples
                    </li>
                    <li>
                        <strong>Utiliser des labels</strong> : Toujours associer un label à chaque input pour l'accessibilité
                    </li>
                    <li>
                        <strong>Nommer les champs</strong> : L'attribut name facilite la gestion de formulaires complexes
                    </li>
                </ul>
            </section>

            <section>
                <h2>Bibliothèques de Gestion de Formulaires</h2>
                <p>
                    Pour des formulaires complexes, des bibliothèques spécialisées peuvent simplifier 
                    la gestion :
                </p>
                <ul>
                    <li><strong>Formik</strong> : Gestion complète des formulaires avec validation</li>
                    <li><strong>React Hook Form</strong> : Performance optimale avec moins de re-rendus</li>
                    <li><strong>Yup</strong> : Schéma de validation souvent utilisé avec Formik</li>
                    <li><strong>Zod</strong> : Validation TypeScript-first</li>
                </ul>
                <p>
                    Ces bibliothèques gèrent automatiquement l'état, la validation, les erreurs, 
                    et la soumission des formulaires.
                </p>
            </section>
        </div>
    );
}

export default FormulairesTheoryPage;