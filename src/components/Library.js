import React from 'react'
import "../styles/library.scss"
import LibrarySong from './LibrarySong'

export default function Library({songs,setCurrentSong, currentSong, libraryStatus}) {
  return (
    <div className={`library ${libraryStatus && "active-library"}`}>
        <h2>Library</h2>
        <div className="library-songs" >
            {songs.map(song => (
                <LibrarySong 
                   currentSong={currentSong}
                   key={song.id}
                   songs={songs} 
                   setCurrentSong={setCurrentSong} 
                   song={song}
                />
            ))}
   
        </div>
    </div>
  )
}
