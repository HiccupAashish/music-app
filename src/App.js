
import React, { useState } from 'react';
import "./styles/app.scss";
import Player from './components/Player';
import Song from './components/Song';
import data from './util';
import Nav from './components/Nav';
import Library from './components/Library';

function App() {
  const [songs, setSongs]=useState(data())
  const [currentSong, setCurrentSong]=useState(songs[0])
  const [isPlaying, setIsPlaying]=useState(false)
  const [libraryStatus, setLibraryStatus]=useState(false)
  return (
    <div className={`App ${libraryStatus? "library-active": ""}`}  style={{
      background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`
    }}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
     <Song currentSong={currentSong}/>
     <Player setCurrentSong={setCurrentSong} songs={songs} isPlaying={isPlaying} currentSong={currentSong} setIsPlaying={setIsPlaying}/>
     <Library libraryStatus={libraryStatus} songs={songs} setCurrentSong={setCurrentSong} currentSong={currentSong} />
    </div>
  );
}

export default App;
