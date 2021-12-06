import React from 'react'

export const RoadmapGrid = () => {
    return (
        <div className= 'RoadmapGrid__columns'>
            <div className = 'RoadmapGrid__flex'>
                <h3>Planned (3)</h3>
                <p>Ideas prioritized for research</p>

                {/* refactorizar a componente */}


                <div className = 'RoadmapGrid__card'>
                    {/* <div className = 'RoadmapGrid__border-planned'>
                    </div> */}
                    <p><i class="fas fa-circle"></i> Planned</p>
                    <h3>Add tags for solutions</h3>
                    <p>Easier to search for solutions based on a specific stack.</p>
                    <button className='btn-tag'>Enhancement</button>
                    <div className= 'RoadmapGrid__card-footer'>
                        <div className= 'RoadmapGrid__card-counter'>
                            <p><i class="fas fa-chevron-up"></i></p>
                            <p className = 'cont'>112</p>
                        </div>
                        <div className= 'RoadmapGrid__card-comments'>
                            <p className = 'cont'><i class="fas fa-comment"></i>1</p>
                        </div>
                    </div>
                </div>

                {/* fin refactorizar a componente */}

            </div>
            <div className = 'RoadmapGrid__flex'>
                <h3>In-Progress (3)</h3>
                <p>Currently being developed</p>
            </div>
            <div className = 'RoadmapGrid__flex'>
                <h3>Live (1)</h3>
                <p>Released features</p>
            </div>
        </div>
    )
}
