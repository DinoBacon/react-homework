import React, { useState } from "react";
import './dropdown2.css'

function Dropdown2() {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className="dropdown2">
            <div className="dropdown-btn2" onClick={e => setIsActive(!isActive)}>
                List of Crime Movies
            <span className = "fas a-caret-down2"></span></div>

            {isActive && (
                <div className="dropdown-content2">
                    <div className="dropdown-item2">Pulp Fiction</div>
                    <div className="dropdown-item2">The Godfather</div>
                    <div className="dropdown-item2">Scarface</div>
                    <div className="dropdown-item2">Goodfellas</div>
                    <div className="dropdown-item2">Se7en</div>
                </div>
            )}
        </div>
    )
}

export default Dropdown2;