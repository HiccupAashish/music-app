import React from 'react'

export default function LibrarySong({song,songs,setCurrentSong,currentSong}) {

  function songSelectHandler(){
    setCurrentSong(song)
   
  }

  return (
    <div onClick={songSelectHandler} className={`library-song ${currentSong.id===song.id && `selected`}`}>
        <img alt={song.name} src={song.cover}/> 
        <div className="song-description">
        <h3> {song.name}</h3>
        <h4> {song.artist} </h4>
        </div>
    </div>
  )
}
