import React from 'react';
import { Link } from 'react-router-dom';
import './css/card.css';
import { useSelector } from 'react-redux';
import StyleComponent from './style';


const PatternDisplay = ({ pattern }) => {
    const theme = useSelector((state) => state.theme);



    return (
        <StyleComponent className={theme}>
            <div key={pattern.id} className='card'>
                <Link to={`/pattern/${pattern.id}`} className="pattern-link">
                    <h3>{pattern.title}</h3>
                    <img src={pattern.img_link} alt={pattern.title} />
                </Link>
            </div>
        </StyleComponent>

    );
};

export default PatternDisplay;
