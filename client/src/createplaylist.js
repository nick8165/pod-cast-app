import React, {useState} from "react"
import {Button} from 'react-bootstrap'

function CreatePlaylist({handleCreate, user}) {
    const [title, setTitle] = useState("")

    function handleChange(e) {
        setTitle(e.target.value)
    }

    function handleClick() {
        handleCreate()
        const playlist = {
            user_id: user.id,
            title: title
        }
        fetch('/playlists', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(playlist)
        })
    }

    return (
        <div>
            <Button className="btn btn-dark btn-outline-light btn-sm" onClick={handleCreate}>back</Button>
            <div>
                <input type="text" placeholder="Playlist Title" onChange={handleChange}></input>
                <Button type="button" onClick={handleClick}>Enter</Button>
            </div>
        </div>
    )
}

export default CreatePlaylist