import React from 'react'
import "../styles/song.scss"
export default function Song({currentSong}) {
  return (
    <div className='song-container'>
        <img alt={currentSong.name} src={currentSong.cover}/> 
        <h2> {currentSong.name}</h2>
        <h3> {currentSong.artist} </h3>
    </div>
  )
}
