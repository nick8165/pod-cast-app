import React, {useState, useEffect} from "react"
import {Button} from "react-bootstrap"
import AddToPlaylist from "./addtoplaylist"

function CurrentPlaylist({reset, user, selectedPlaylist}) {
  const [podList, setPodList] = useState("")
  const [toggleAdd, setToggleAdd] = useState(false)
  console.log(podList)
  useEffect(() => {
    fetch(`/playlistPod/${selectedPlaylist[0].id}`)
    .then(res => {
      if(res.ok) {
        res.json().then(pod => setPodList(pod))
      }
    })
  },[toggleAdd])

  function updatePodList() {
    fetch(`/playlistPod/${selectedPlaylist[0].id}`)
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
          <h1 className="li">Currently In Playlist</h1>
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
      <div>
        <Button type="button" onClick={reset}>back</Button>
        <h1 className="li">{selectedPlaylist[0].title}</h1>
        <div>
          <Button type="button" className="btn btn-dark" onClick={handleAdd}>Add/Remove From Playlist</Button>
        </div>
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