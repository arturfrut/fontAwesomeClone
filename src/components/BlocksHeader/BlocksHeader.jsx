import React from 'react'
import { Link } from 'react-router-dom'

export const BlocksHeader = () => {
    return (
        <header className = 'BlocksHeader__container'>
            <div className = 'BlocksHeader__div BlocksHeader__colored-block'>
                <h2>Frontend Mentor</h2>
                <h5>Feedback Board</h5>
            </div>
            {/* Conviene usar un arreglo */}
            <div className = 'BlocksHeader__div BlocksHeader__div-tags'>
                <button className = 'btn-tag'>All  </button>
                <button className = 'btn-tag'>UI  </button>
                <button className = 'btn-tag'>UX  </button>
                <button className = 'btn-tag'>Enhancement  </button>
                <button className = 'btn-tag'>Bug  </button>
                <button className = 'btn-tag'>Feature  </button>
            </div>
            <div className = 'BlocksHeader__div BlocksHeader__div-roadmaps'>
                <div className = 'BlocksHeader__div-roadmaps-head'>
                    <h2>Roadmap</h2>
                    {/* Aca va un link */}
                    <Link to="/Roadmap">View</Link>
                </div>
                <div className = 'BlocksHeader__div-roadmaps-list' >
                <ul>    
                    <li><span><i class="fas fa-circle"></i></span> Planned</li>
                    <li><span><i class="fas fa-circle"></i></span> In-progress</li>
                    <li><span><i class="fas fa-circle"></i></span> Live</li>
                </ul>
                <ul>
                    <li>2</li>          
                    <li>3</li>
                    <li>1</li>
                </ul>
                </div>

            </div>

        </header>
    )
}
