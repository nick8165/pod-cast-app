import React, {useState} from "react"
import {Button} from 'react-bootstrap'

function CreatePlaylist({handleCreate}) {
    const [title, setTitle] = useState("")

    function handleChange(e) {
        setTitle(e.target.value)
    }

    function handleClick() {
        handleCreate()
    }

    return (
        <div>
            <Button onClick={handleCreate}>back</Button>
            <div>
                <input type="text" placeholder="Playlist Title" onChange={handleChange}></input>
                <Button type="button" onClick={handleClick}>Enter</Button>
            </div>
        </div>
    )
}

export default CreatePlaylist