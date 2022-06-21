import React, {useState, useEffect} from "react"
import {Button} from "react-bootstrap"
import AddToPlaylist from "./addtoplaylist"

function CurrentPlaylist({reset, user, selectedPlaylist}) {
  const [podList, setPodList] = useState("")
  const [toggleAdd, setToggleAdd] = useState(false)
    
  useEffect(() => {
    fetch(`/playlistPod/${user.playlists.id}`)
    .then(res => {
      if(res.ok) {
        res.json().then(pod => setPodList(pod))
      }
    })
  },[])

  function handleAddReset() {
    setToggleAdd(false)
  }

  function handleAdd() {
    setToggleAdd(true)
  }

  function displayPods() {
    if (podList.length !== 0) {
      return (
        <div>
          <h1 className="li">Currently In Playlist</h1>
        </div>
      )
    } else {
      return (
        <div>
          <h1 className="li">Playlist Currently Empty</h1>
        </div>
      )
    }
  }

  function displayCurrentPlaylist() {
    return (
      <div>
        <Button type="button" onClick={reset}>back</Button>
        <h1 className="li">{selectedPlaylist[0].title}</h1>
        <div>
          <Button type="button" className="btn btn-dark" onClick={handleAdd}>+ Add To Playlist</Button>
        </div>
      </div>
    )
  }

  if(toggleAdd === true) {
    return (
      <AddToPlaylist user={user} selectedPlaylist={selectedPlaylist} handleAddReset={handleAddReset}/>
    )
  } else {
    return (
      <div>
        {displayCurrentPlaylist()}
        {displayPods()}
      </div>
    )
  }
}

export default CurrentPlaylist