import React from 'react'
import '../styles/nav.scss'
import { FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

export default function Nav({libraryStatus, setLibraryStatus}) {
  return (
    <nav>
        <h1> Hiccup Music</h1>
         <button onClick={()=> setLibraryStatus(!libraryStatus)}>
            Library
            <FontAwesomeIcon icon={faMusic} />
         </button>
    </nav>
  )
}
