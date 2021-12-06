import React, { useState } from 'react'
import { Comment } from '../Comment'
import { SuggestionCards } from '../SuggestionCards'
import { Link } from 'react-router-dom'

export const FeedbackScreen = () => {
    const [charCounter, setCharCounter] = useState(0);

    const handleTextAreaChange = (e) => {
        setCharCounter(e.target.value.lenght)
    }

    return (
    <div className = 'feedbackScreen__main Screen'>
            <header>
                <Link to= '/Main'>                
                <p className = 'editScreen__goBack'><i class="fas fa-chevron-left "></i> Go Back</p>
                </Link>
                <button className = 'btn-blu-ligh'>Edit Feedback</button>
            </header>
            <SuggestionCards />
            <div className= 'feedbackScreen__comments'>
                <h2>N Comments</h2>
                <Comment />
            </div>
            <div className = 'feedbackScreen__addComment'>
                <h2>Add Comment</h2>
                <textarea name="comment" id="comment" rows="5" maxLength='250' placeholder='Type your comment here' onChange={handleTextAreaChange}></textarea>
                <div className = 'feedbackScreen__addComment-footer'>
                    <p>{charCounter}/250</p>
                    <button className = 'btn-vio'>Post comment</button>
                </div>
            </div>
        </div>
    )
}
