import React, { useRef, useState } from 'react'
import "../styles/player.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlay, faAngleRight, faAngleLeft, faPause} from "@fortawesome/free-solid-svg-icons"

export default function Player({currentSong,isPlaying,songs, setIsPlaying,setCurrentSong}) {
  const audioRef=useRef(null);
  const [songInfo, setSongInfo]=useState({
                                  currentTime:0, 
                                  duration:0
                                })
  const animationPercentage = (songInfo.currentTime / songInfo.duration) * 100;

  function playSongHandler(){
    if (isPlaying){
      audioRef.current.pause()
      setIsPlaying(false)
    }else{
      audioRef.current.play()
      setIsPlaying(true)
    }
  }
  function autoplay(){
    if(isPlaying){
      audioRef.current.play()
      // setIsPlaying(true)
    }
  }

  function songEndHandler(){
    let currentSongIndex = songs.findIndex(song => song.id === currentSong.id);
    console.log({currentSongIndex});
      if (currentSongIndex === songs.length-1){
        setCurrentSong(songs[0]); 
      }
      else{
        setCurrentSong(songs[ currentSongIndex+1]);
      }
  }
  
  async function timeupdateHandler(e){
   const current=e.target.currentTime;
    const duration= e.target.duration||0;
    await setSongInfo({...songInfo,currentTime:current,duration})
  }

  function getTIme(time){
    return(
      Math.floor(time/60) + ":" +("0"+Math.floor(time % 60)).slice(-2)
    )
  }

  function dragHandler(e){
    audioRef.current.currentTime= e.target.value
    setSongInfo({...songInfo, current:e.target.value})
  }

 async function skipTrackHandler(direction){
    let currentSongIndex = songs.findIndex(song => song.id === currentSong.id);
    console.log({currentSongIndex});
    if(direction === 'skip-forward'){
       await setCurrentSong(songs[currentSongIndex+1 === songs.length ? 0 : currentSongIndex+1]);
    }
    if(direction === 'skip-back'){
       await setCurrentSong(songs[currentSongIndex-1 < 0 ? songs.length-1 : currentSongIndex-1]);
    }
  }

  return (
    <div className='player'>
        <div className='time-control'>
            <p> {getTIme(songInfo.currentTime)} </p>
            {/* <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
          }}
          className="track"
        > */}
            <input 
             onChange={dragHandler}
             min={0} max={songInfo.duration} 
             value={songInfo.currentTime} type='range'
             />

           
            <p> {getTIme(songInfo.duration)} </p>

        </div>
        <div className='play-control'>
            <FontAwesomeIcon
             className='back' size= "2x" icon={faAngleLeft}
             onClick={()=>skipTrackHandler('skip-back')}
             />        
            <FontAwesomeIcon 
            onClick={playSongHandler} className='play' size= "2x" icon={isPlaying? faPause:faPlay}
            />
            <FontAwesomeIcon
            onClick={()=>skipTrackHandler('skip-forward')}
            className='forward' size= "2x"  icon={faAngleRight}
            />
        </div>
        <audio
         onLoadedData={autoplay}
         onLoadedMetadata={timeupdateHandler}
         onTimeUpdate={timeupdateHandler}
         ref={audioRef} 
         onEnded={songEndHandler}
         src={currentSong.audio}>
        </audio>
    </div>
  )
}
