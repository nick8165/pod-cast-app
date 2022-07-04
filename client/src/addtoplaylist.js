import React from "react"
import {Button} from "react-bootstrap"

function AddToPlaylist({user, podList, selectedPlaylist, handleAddReset, updatePodList}) {
    
    const array = []
    podList.map((pod) => {
        array.push(pod.pod_cast.id)
    })
    
    function handleAddRequest(e) {
        const addPod = {
            playlist_id: selectedPlaylist[0].id,
            pod_cast_id: e.target.id
        }
        fetch('/playlistPod', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(addPod)
        })
        updatePodList()
    }

    function handleUnAddRequest(e) {
        fetch(`/playlistPodDelete/${selectedPlaylist[0].id}/${e.target.id}`, {
            method: 'DELETE',
        })
        .then((res) => {
            if(res.ok){
                console.log(res)
            } else {
                res.json().then(console.log)
            }
        })
        updatePodList()
    }

    function displayPods() {
        return (
            user.pod_casts.map((pod) => {
                if(array.includes(pod.id)) {
                    return (
                        <div key={pod.title}>
                            <img src={pod.thumb_nail} alt="error" />
                            <Button id={pod.id} type="button" className="btn btn-dark btn-outline-success" onClick={handleUnAddRequest}>Added</Button>
                        </div>
                    )
                } else {
                    return (
                        <div key={pod.title}>
                            <img src={pod.thumb_nail} alt="error" />
                            <Button id={pod.id} type="button" className="btn btn-dark btn-outline-light" onClick={handleAddRequest}>+ Add To Playlist</Button>
                        </div>
                    )
                }
            }))
    }

    return (
        <div>
            <Button type="button" className="btn btn-dark btn-outline-light" onClick={handleAddReset}>back</Button>
            {displayPods()}
        </div>
    )

}

export default AddToPlaylist