import React from 'react'
import comments from "../data/suggestionData";


export const SuggestionCards = ({index}) => {

    return (
        <div className = 'suggestionCards__card'>
            <div className = 'suggestionCards__card-left' >
                <div className = 'suggestionCards__comments-counter'>
                    <span><i class="fas fa-sort-up"></i></span>
                    <p className ='cont'>{comments[index].ups}</p>
                </div>
            </div>
            <div className = 'suggestionCards__card-center' >
                <h2>{comments[index].title}</h2>
                <p>{comments[index].detail}</p>
                <button className = 'btn-tag'>{comments[index].category}</button>
            </div>
            <div className = 'suggestionCards__card-right' >
                <p><i class="fas fa-comment"></i> <span>{comments[index].comments.length}</span></p>
            </div>
        </div>
    )
}
