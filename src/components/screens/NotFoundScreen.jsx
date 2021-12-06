import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundScreen = () => {
    return (
        <div className= 'Screen'>
            <Link to= 'Main'>
            <img src="https://www.inzonedesign.com/wp-content/uploads/2021/02/blog-cleverly-funny-creative-404-error-pages-hoppermagic.jpg" alt="error 504"/>
            </Link>
        </div>
    )
}
