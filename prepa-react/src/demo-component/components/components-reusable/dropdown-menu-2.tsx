import { useState } from "react";
import { Link } from "react-router-dom";


function DropdownMenu2(){
const [isOpen,setIsOpen] = useState(false);


function toggleDropdown(){
    setIsOpen(!isOpen);
}
    return(
        <>
        <div className="m-auto">
            {!isOpen &&
            <button onClick={toggleDropdown} className="btn btn-primary " type="button">
                Avancés
            </button>
            }
            {isOpen && (
                
                <ul onMouseLeave={toggleDropdown} className="dropdown">
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >Hooks</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >State</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >Formulaires</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >Communications composants</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >Effect</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >AJAX</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >Fragments</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >Hooks Personnalisé</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >Délégation de contenu</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >L'objet " ref "</Link></li>
                </ul>
            )}
        </div>
        </>
    )
}

export default DropdownMenu2;