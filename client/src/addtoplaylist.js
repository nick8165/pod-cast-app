import React, {useState} from "react"
import {Button} from "react-bootstrap"

function AddToPlaylist({user, selectedPlaylist, handleAddReset}) {
    console.log(user)
    function handleAddRequest() {
        console.log("")
    }
    function displayPods() {
        return (
            user.pod_casts.map((pod) => {
                return (
                <div key={pod.title}>
                    <img src={pod.thumb_nail} alt="error" />
                    <Button type="button" className="btn btn-dark" onClick={handleAddRequest}>+ Add To Playlist</Button>
                </div>
            )})
        )
    }
    return (
        <div>
            {displayPods()}
        </div>
    )
}

export default AddToPlaylist