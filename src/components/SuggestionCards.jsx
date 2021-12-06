import React from 'react'



export const SuggestionCards = () => {

    
    return (
        <div className = 'suggestionCards__card'>
            <div className = 'suggestionCards__card-left' >
                <div className = 'suggestionCards__comments-counter'>
                    <span><i class="fas fa-sort-up"></i></span>
                    <p className ='cont'>99</p>
                </div>
            </div>
            <div className = 'suggestionCards__card-center' >
                <h2>Add a dark theme option</h2>
                <p>It would help people with light sensitivities and who prefer dark mode.</p>
                <button className = 'btn-tag'>Feature</button>
            </div>
            <div className = 'suggestionCards__card-right' >
                <p><i class="fas fa-comment"></i> <span>4</span></p>
            </div>
        </div>
    )
}
