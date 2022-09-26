import React, {useState, useEffect} from "react"
import {Button} from "react-bootstrap"
import AddToPlaylist from "./addtoplaylist"
import RemovePlaylist from "./removeplaylist"
import UpdatePlaylistTitle from "./updateplaylisttitle"

function CurrentPlaylist({reset, user, selectedPlaylist, handleTogglePlaylist}) {
  const [podList, setPodList] = useState("")
  const [toggleAdd, setToggleAdd] = useState(false)
  
  useEffect(() => {
    fetch(`/playlist_pod_casts_show/${selectedPlaylist[0].id}`)
    .then(res => {
      if(res.ok) {
        res.json().then(pod => setPodList(pod))
      }
    })
  },[toggleAdd])
  
  function updatePodList() {
    fetch(`/playlist_pod_casts_show/${selectedPlaylist[0].id}`)
    .then(res => {
      if(res.ok) {
        res.json().then(pod => setPodList(pod))
      }
    })
  }

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
          <h1 className="li">{selectedPlaylist[0].title}</h1>
          <h2 className="li">Currently In Playlist</h2>
          {podList.map((pod) => {
            return (
              <div key={pod.pod_cast.title}>
                <img src={pod.pod_cast.thumb_nail} alt="error" />
              </div>
            )
          })}
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
      <div class="btn-group">
        <Button type="button" className="btn btn-dark btn-outline-light btn-sm" onClick={reset}>back</Button>
        <UpdatePlaylistTitle selectedPlaylist={selectedPlaylist} handleTogglePlaylist={handleTogglePlaylist}/>
        <Button type="button" className="btn btn-dark btn-outline-light" onClick={handleAdd}>Add/Remove From Playlist</Button>
        <RemovePlaylist selectedPlaylist={selectedPlaylist} user={user}/>
      </div>
    )
  }

  if(toggleAdd === true) {
    return (
      <AddToPlaylist user={user} podList={podList} selectedPlaylist={selectedPlaylist} handleAddReset={handleAddReset} updatePodList={updatePodList}/>
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