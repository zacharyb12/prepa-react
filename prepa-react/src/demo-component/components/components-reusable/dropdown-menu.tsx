import { useState } from "react";
import { Link } from "react-router-dom";


function DropdownMenu(){
const [isOpen,setIsOpen] = useState(false);


function toggleDropdown(){
    setIsOpen(!isOpen);
}
    return(
        <>
        <div className="m-auto">
            {!isOpen &&
            <button onClick={toggleDropdown} className="btn btn-primary " type="button">
                Menu
            </button>
            }
            {isOpen && (
                
                <ul onMouseLeave={toggleDropdown} className="dropdown">
                    <li><Link to="/home" onClick={toggleDropdown} className="links" >Home</Link></li>
                    <li><Link to="/tsx" onClick={toggleDropdown} className="links" >TSX</Link></li>
                    <li><Link to="/new-project" onClick={toggleDropdown} className="links" >New Project</Link></li>
                    <li><Link to="/structure-project" onClick={toggleDropdown} className="links" >Structure Project</Link></li>
                    <li><Link to="/composants" onClick={toggleDropdown} className="links" >Composants</Link></li>
                    <li><Link to="/styles" onClick={toggleDropdown} className="links" >Styles</Link></li>
                    <li><Link to="/rendu-conditionnel" onClick={toggleDropdown} className="links" >Rendu Conditionnel</Link></li>
                    <li><Link to="/collections" onClick={toggleDropdown} className="links" >Collections</Link></li>
                    <li><Link to="/navigation" onClick={toggleDropdown} className="links" >Navigation</Link></li>
                </ul>
            )}
        </div>
        </>
    )
}

export default DropdownMenu;