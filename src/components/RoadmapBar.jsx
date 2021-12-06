import React from 'react'
import { Link } from 'react-router-dom'

export const RoadmapBar = () => {
    return (
        <div className = 'roadmapBar__bar'>
            <div className = 'roadmapBar__bar-left'>
                <Link to='/'>
                    <p className='roadmapBar__goBack wh'><i class="fas fa-chevron-left"></i> Go Back</p>
                </Link>
                <h2 className = 'wh'>Roadmap</h2>
            </div>
            <div className = 'roadmapBar__bar-right'>
                <Link to='/Add'>
                    <button className= 'btn-vio'>+ Add Feedback</button>
                </Link>
            </div>
        </div>
    )
}
