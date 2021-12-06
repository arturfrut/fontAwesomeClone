import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FeedbackCounter from './helpers/counters'

export const SuggestionBar = () => {
    let initialSuggestionAmount = FeedbackCounter('Suggestion');
    const [suggestionAmount, setSuggestionAmount] = useState(initialSuggestionAmount)

    


    return (
        <div className = 'suggestionBar__bar'>
            <div className = 'suggestionBar__bar-inside'>
            {/* Cantidad de sugerencias viene de estado */}
            <h2 className = 'wh'><i class="fas fa-lightbulb"></i> {suggestionAmount} Suggestions</h2> 
            <p className = 'wh suggestionBar__p'>Sort By : <span>Most Upvotes <i class="fas fa-sort-down"></i></span></p>
            </div>

            <Link to="/Add">
            <button className = 'btn-vio'>+ Add Feedback</button>
            </Link>
        </div>
    )
}
