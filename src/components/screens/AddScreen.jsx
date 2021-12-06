import React from 'react'
import { Link } from 'react-router-dom'

export const AddScreen = () => {
    return (
        <div className = 'addScreen__main Screen' >
            <Link to= '/'>
                <p className = 'addScreen__goBack'><i class="fas fa-chevron-left "></i> Go Back</p>
            </Link>
            <div className = 'wh addScreen__plus'>+</div>
            <div className = 'addScreen__form'>
                <form className='addScreen__formFlex' action="post">
                    <h2>Create New Feedback</h2>

                    <h3>Feedback Title</h3>
                    <p>Add a short, descriptive headline</p>
                    <input type="text" name='description' maxLength='55' required/>
                    {(false) &&
                        <p className = 'addScreen__empty'>Cant be empty</p>
                    }
                    <h3>Category</h3>
                    <p>Choose a category for your feedback</p>
                    <select name="category" id="category">
                        <option value="UI">UI</option>
                        <option value="UX">UX</option>
                        <option value="Enhancement">Enhancement</option>
                        <option value="Bug">Bug</option>
                        <option value="Feature">Feature</option>
                    </select>
                    {(false) &&
                        <p className = 'addScreen__empty'>Cant be empty</p>
                    }
                    <h3>Feedback Details</h3>
                    <p>Inblude any specific comments on whay should be improved, added, etc </p>
                    <textarea name="details" id="details" rows="5" maxLength='250'></textarea>
                    {(false) &&
                        <p className = 'addScreen__empty'>Cant be empty</p>
                    }
                    <div className='addScreen_buttons'>
                        <Link to= '/'> 
                            <button className='btn-blu'>Cancel</button>
                        </Link>
                        <button className='btn-vio'>Add Feedback</button>
                    </div>

                </form>

            </div>
        </div>
    )
}
