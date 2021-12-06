import React, { useState } from 'react'
import comments from './data/suggestionData'


export const SuggestionCards = ({index}) => {

     const [sugCard, setSugCard] = useState(comments[index]);
    const {ups, title, detail, category} = sugCard;

    return (
        <div className = 'suggestionCards__card'>
            <div className = 'suggestionCards__card-left' >
                <div className = 'suggestionCards__comments-counter'>
                    <span><i class="fas fa-sort-up"></i></span>
                    <p className ='cont'>{ups}</p>
                </div>
            </div>
            <div className = 'suggestionCards__card-center' >
                <h2>{title}</h2>
                <p>{detail}</p>
                <button className = 'btn-tag'>{category}</button>
            </div>
            <div className = 'suggestionCards__card-right' >
                <p><i class="fas fa-comment"></i> <span>{sugCard.comments.length}</span></p>
            </div>
        </div>
    )
}
