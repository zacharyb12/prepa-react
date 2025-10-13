import { useState } from "react";

function RenduConditionnel() {
    const [isTrue , setIsTrue] = useState(true);

    function toggleValue() {
        setIsTrue(!isTrue);
    }
    return (
        <>
            <p>
                En React, le rendu conditionnel permet d'afficher ou de masquer des éléments en fonction d'une condition. 
                Cela se fait généralement avec des opérateurs JavaScript comme <code>if</code>, <code>? :</code> (ternaire) ou <code>&&</code>.
            </p>
            <h2>Exemple avec opérateur ternaire :</h2>
            {isTrue ? (
                <div style={{ color: 'green' }}>Ce texte est affiché car la condition est vraie.</div>
            ) : (
                <div style={{ color: 'red' }}>Ce texte serait affiché si la condition était fausse.</div>
            )}
            <h2>Exemple avec opérateur && :</h2>
            {isTrue && <div>Ce texte s'affiche si la condition est vraie.</div>}
            <h2>Exemple avec une variable :</h2>
            {(() => {
                const isLoggedIn = false;
                if (isLoggedIn) {
                    return <div>Bienvenue, utilisateur !</div>;
                } else {
                    return <div>Veuillez vous connecter.</div>;
                }
            })()} 
            
            <button onClick={toggleValue}>change value</button>
            </>
    )
}

export default RenduConditionnel;