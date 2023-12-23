// PatternDisplay.js
import React from 'react';
import { Link } from 'react-router-dom';
import './css/card.css';

const PatternDisplay = ({ pattern }) => {
    
    return (
        <div key={pattern.id} className='card'>
            <Link to={`/Loopifyx/pattern/${pattern.id}`} className="pattern-link">
                <h3>{pattern.title}</h3>
                <img src={pattern.img_link} alt={pattern.title} />
            </Link>
        </div>
    );
};

export default PatternDisplay;
