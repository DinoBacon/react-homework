import React, { useState } from "react";

function Dropdown() {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>
                List of Horror Movies
            <span className = "fas a-caret-down"></span></div>

            {isActive && (
                <div className="dropdown-content">
                    <div className="dropdown-item">The Evil Dead</div>
                    <div className="dropdown-item">Scream</div>
                    <div className="dropdown-item">The Shining</div>
                    <div className="dropdown-item">Carrie</div>
                    <div className="dropdown-item">The Conjuring</div>
                </div>
            )}
        </div>
    )
}

export default Dropdown;