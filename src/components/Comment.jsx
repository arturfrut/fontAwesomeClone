import React from 'react'

export const Comment = () => {
    return (
        <div className = 'comment__container'>
            <div className = 'comment__header'>
                <img src="https://apprecs.org/ios/images/app-icons/256/86/991693702.jpg" alt="avatar" />
                <div className = 'comments__nameMail'>
                    <h3>Elijah Moss</h3>
                    <p>@hexagon.bestagon</p>
                </div>
                <div className= 'comment__reply'>
                    Reply
                </div>
            </div>
            <div className = 'comment__comment'>
                <div> </div>
                <p>Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and apparently saves battery life.</p>
            </div>
            {(true)&&
                <div className= 'comments__textArea'>
                    <div> </div>
                    <textarea name="replying" id="replying" rows="5" maxLength='250' placeholder='Type your comment here'></textarea>
                </div>
            }
            {(true)&&
                <div className= 'comments__textArea'>
                    <div> </div>
                    <textarea name="replying" id="replying" rows="5" maxLength='250' placeholder='Type your comment here'></textarea>
                </div>
            }


        </div>
    )
}
