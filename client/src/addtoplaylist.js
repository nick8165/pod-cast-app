import React, { useState, useEffect } from "react"
import {Button} from "react-bootstrap"

function AddToPlaylist({user, podList, selectedPlaylist, handleAddReset, updatePodList}) {
    const [libraryPods, setLibraryPods] = useState("")

    useEffect(() => {
        fetch(`/user_pod_id_show/${user.id}`)
        .then(res => {
          if(res.ok) {
            res.json().then(pod => setLibraryPods(pod))
          }
        })
      },[])
   
    let array = []
    podList.map((pod) => {
        array.push(pod.pod_cast.id)
    })
    
    function handleAddRequest(e) {
        console.log(e.target)
        const addPod = {
            playlist_id: selectedPlaylist[0].id,
            pod_cast_id: e.target.id
        }
        fetch('/playlist_pod_casts', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(addPod)
        })
        .then((res) => {
            if(res.ok){
                console.log(res)
                updatePodList()
            } else {
                res.json().then(console.log)
            }
        })
    }

    function handleUnAddRequest(e) {
        fetch(`/playlist_pod_casts_delete/${selectedPlaylist[0].id}/${e.target.id}`, {
            method: 'DELETE',
        })
        .then((res) => {
            if(res.ok){
                console.log(res)
                updatePodList()
            } else {
                res.json().then(console.log)
            }
        })
    }

    function displayPods() {
        if (libraryPods !== "") {
            return (
                libraryPods.map((pod) => {
                    if(array.includes(pod.pod_cast_id)) {
                        return (
                            <div key={pod.pod_cast.title}>
                                <img src={pod.pod_cast.thumb_nail} alt="error" />
                                <Button id={pod.pod_cast.id} type="button" className="btn btn-dark btn-outline-success" onClick={handleUnAddRequest}>Added</Button>
                            </div>
                        )
                    } else {
                        return (
                            <div key={pod.pod_cast.title}>
                                <img src={pod.pod_cast.thumb_nail} alt="error" />
                                <Button id={pod.pod_cast.id} type="button" className="btn btn-dark btn-outline-light" onClick={handleAddRequest}>+ Add To Playlist</Button>
                            </div>
                        )
                    }
                }))
        } else {
            console.log("false")
        }
    }

    return (
        <div>
            <Button type="button" className="btn btn-dark btn-outline-light" onClick={handleAddReset}>back</Button>
            {displayPods()}
        </div>
    )

}

export default AddToPlaylist