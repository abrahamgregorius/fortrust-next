import React, { useState } from 'react';

const CostDropdown = ({ title, data, columns }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="cost-dropdown">
            <button
                className="cost-dropdown-header"
                onClick={toggleDropdown}
                aria-expanded={isOpen}
            >
                <span className="cost-dropdown-title">{title}</span>
                <span className="cost-dropdown-icon">
                    {isOpen ? '−' : '+'}
                </span>
            </button>

            {isOpen && (
                <div className="cost-dropdown-content">
                    {data.map((row, index) => (
                        <div key={index} className="cost-dropdown-item">
                            <div className="cost-dropdown-city">
                                {row[columns[0]]}
                            </div>
                            <div className="cost-dropdown-details">
                                {columns.slice(1).map((column, colIndex) => (
                                    <div key={colIndex} className="cost-detail">
                                        <span className="cost-label">{column}:</span>
                                        <span className="cost-value">{row[column]}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CostDropdown;