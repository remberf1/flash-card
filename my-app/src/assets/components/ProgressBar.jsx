import '../styles/ProgessBar.css';
import data from '../../data/cards.json';
import { useState } from 'react';
const ProgressBar = ({ currentCard, totalQuestions }) => {
    const progress = ((((currentCard+1) / totalQuestions) * 100)).toFixed(0);
    console.log(progress);

    return (
        <div className="progress-container">
            <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: `${progress}%` }}>
                    {progress}%
                </div>
            </div>
            <div className="progress-text">{currentCard + 1} of {totalQuestions}</div>

         </div>
    );
}

export default ProgressBar;