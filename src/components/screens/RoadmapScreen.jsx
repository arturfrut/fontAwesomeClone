import React from 'react'
import { RoadmapBar } from '../RoadmapBar'
import { RoadmapGrid } from '../RoadmapGrid'

export const RoadmapScreen = () => {
    return (
        <div className='Screen'>
            <RoadmapBar />
            <RoadmapGrid />
        </div>
    )
}
