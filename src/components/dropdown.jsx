import React, { useState } from "react";

function Dropdown() {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>
                List of Items
            <span className = "fas a-caret-down"></span></div>

            {isActive && (
                <div className="dropdown-content">
                    <div className="dropdown-item">Apple</div>
                    <div className="dropdown-item">Pear</div>
                    <div className="dropdown-item">Grape</div>
                    <div className="dropdown-item">Watermelon</div>
                    <div className="dropdown-item">Strawberry</div>
                </div>
            )}
        </div>
    )
}

export default Dropdown;