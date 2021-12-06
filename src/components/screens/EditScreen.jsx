import React from 'react'
import { Link } from 'react-router-dom'

export const EditScreen = () => {
    return (
        <div className = 'editScreen__main Screen' >
            <Link>
                <p className = 'editScreen__goBack'><i class="fas fa-chevron-left "></i> Go Back</p>
            </Link>
            <div className = 'wh editScreen__plus'>+</div>
            <div className = 'editScreen__form'>
                <form className='editScreen__formFlex' action="post">
                    <h2>Editing 'NOMBRE DEL FEEDBACK'</h2>

                    <h3>Feedback Title</h3>
                    <p>Add a short, descriptive headline</p>
                    <input type="text" name='description' maxLength='55' placeholder='VALOR DEL TITLE' required/>
                    {(false) &&
                        <p className = 'editScreen__empty'>Cant be empty</p>
                    }
                    <h3>Category</h3>
                    <p>Choose a category for your feedback</p>
                    <select name="category" id="category">
                        <option value="XXX">VALOR DEL CATEGORY</option>
                        <option value="UI">UI</option>
                        <option value="UX">UX</option>
                        <option value="Enhancement">Enhancement</option>
                        <option value="Bug">Bug</option>
                        <option value="Feature">Feature</option>
                    </select>
                    {(false) &&
                        <p className = 'editScreen__empty'>Cant be empty</p>
                    }
                    <h3>Update status</h3>
                    <p>Change feature state</p>
                    <select name="status" id="status">
                        <option value="XXX">VALOR DEL STATE</option>
                        <option value="Suggestion">Suggestion</option>
                        <option value="Planned">Planned</option>
                        <option value="In-Progress">In-progress</option>
                        <option value="Live">Live</option>
                    </select>
                    {(false) &&
                        <p className = 'editScreen__empty'>Cant be empty</p>
                    }
                    <h3>Feedback Details</h3>
                    <p>Inblude any specific comments on whay should be improved, added, etc </p>
                    <textarea name="details" id="details" rows="5" maxLength='250' placeholder='VALOR DEL DETAILS'></textarea>
                    {(false) &&
                        <p className = 'editScreen__empty'>Cant be empty</p>
                    }
                    <div className='editScreen_buttons'>
                        <button className='btn-red'>Delete</button>
                        <div>
                            <button className='btn-blu'>Cancel</button>
                            <button className='btn-vio'>Add Feedback</button>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    )
}
