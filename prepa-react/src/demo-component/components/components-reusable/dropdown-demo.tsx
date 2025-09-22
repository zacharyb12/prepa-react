import { useState } from "react";
import { Link } from "react-router-dom";


function DropdownDemo(){
const [isOpen,setIsOpen] = useState(false);


function toggleDropdown(){
    setIsOpen(!isOpen);
}
    return(
        <>
        <div className="m-auto">
            {!isOpen &&
            <button onClick={()=>setIsOpen(!isOpen)} className="btn btn-primary dropdown-toggle" type="button">
                Demo
            </button>
            }
            {isOpen && (

                    <ul onMouseLeave={toggleDropdown} className="dropdown">
                        <li>
                            <Link onClick={toggleDropdown} className="links" to="/counter">
                                Demo Counter
                            </Link>
                        </li>
                        <li>
                            <Link onClick={toggleDropdown} className="links" to="/navbar">
                                Demo Navbar
                            </Link>
                        </li>
                        <li>
                            <Link onClick={toggleDropdown} className="links" to="/demo3">
                                Demo 3
                            </Link>
                        </li>
                    </ul>
            )}
        </div>
        </>
    )
}

export default DropdownDemo;