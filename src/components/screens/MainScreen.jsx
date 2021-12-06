import React from 'react'
import { BlocksHeader } from '../BlocksHeader/BlocksHeader'
import { SuggestionBar } from '../SuggestionBar'
import { SuggestionCards } from '../SuggestionCards'

export const MainScreen = () => {
    return (
        <div className = 'Screen'>
            <BlocksHeader />
            <SuggestionBar />
            <SuggestionCards index='0' />
        </div>
    )
}
