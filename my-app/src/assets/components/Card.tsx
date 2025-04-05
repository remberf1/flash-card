import { useState } from "react";
import '../styles/Card.css';
import cards from '../../data/cards.json';
import ProgressBar from "./ProgressBar.jsx";
function Card(){

 const[currentCard,setCurrentCard]=useState(0);
const[showAnswer,setShowAnswer]=useState(false);
const totalQuestions= cards.length;

const handlePrevious=()=>{
    setCurrentCard(prevCard => Math.max(0, prevCard - 1));
    setShowAnswer(false);
}
const handleNext=()=>{
    setCurrentCard(prevCard => Math.min(cards.length - 1, prevCard + 1));
    setShowAnswer(false);
}
const handleShowAnswer=()=>{
    setShowAnswer(!showAnswer)
}

    return(
        <>
        <div className="container">
        <ProgressBar currentCard={currentCard} totalQuestions={totalQuestions} />
            <div className="dialog-container"><div className="dialog"><h1>{showAnswer ? cards[currentCard].answer : cards[currentCard].question}</h1></div></div>
            <div className='button-container'>
            <button onClick={handlePrevious} disabled={currentCard===0}>Previous</button>
            <button onClick={handleShowAnswer}>{showAnswer ? "Hide Answer" : "Show Answer"}</button>
            <button onClick={handleNext}disabled={currentCard===cards.length-1}>Next</button>
            </div>
            </div>
        </>
    )

}
export default Card;