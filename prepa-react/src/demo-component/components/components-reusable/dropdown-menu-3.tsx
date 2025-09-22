import { useState } from "react";
import { Link } from "react-router-dom";


function DropdownMenu3(){
const [isOpen,setIsOpen] = useState(false);


function toggleDropdown(){
    setIsOpen(!isOpen);
}
    return(
        <>
        <div className="m-auto">
            {!isOpen &&
            <button onClick={toggleDropdown} className="btn btn-primary " type="button">
                Avancés 2ièm partie
            </button>
            }
            {isOpen && (
                
                <ul onMouseLeave={toggleDropdown} className="dropdown">
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >Router</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >Routes enfants</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >Hooks React Router</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >State Management</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >Redux</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >integration Redux</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >Bonnes pratiques Redux</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >Redux Toolkit</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >Action Creators</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >Reducers</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >Configuration Store</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >Middlewares dans un Store</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >React & Redux</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >Composant provider</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >Hooks React-Redux</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >Hoc connect</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >Action Creators complexes</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >Middlewares Redux-Thunk</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >Action Creator async</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >ThunkAPI</Link></li>
                    <li><Link to="/hooks" onClick={toggleDropdown} className="links" >Action Creator Conditionnel</Link></li>
                </ul>
            )}
        </div>
        </>
    )
}

export default DropdownMenu3;