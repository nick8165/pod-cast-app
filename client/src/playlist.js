import React, {useState} from "react"
import {Button} from 'react-bootstrap'
import CreatePlaylist from './createplaylist'

function Playlist() {
    const [createToggle, setCreateToggle] = useState(false)
    const [removeToggle, setRemoveToggle] = useState(false)

    function handleCreate() {
        setCreateToggle(!createToggle)
    }

    function handleRemove() {
        setRemoveToggle(true)
    }

    function displayPlaylist() {
        if (createToggle === true) {
            return(
                <CreatePlaylist handleCreate={handleCreate}/>
            )
        } if (createToggle === false) {
            return (
                <div>
                    <div>
                        <h4 className="li">Create Playlist</h4>
                        <Button type="button" onClick={handleCreate}>+</Button>
                    </div>
                    <div>
                        <h4 className="li">Remove Playlist</h4>
                        <Button type="button" onClick={handleRemove}>-</Button>
                    </div>
                </div>
            )
        }
    }

    return(
        <div>
            {displayPlaylist()}
        </div>
    )
}

export default Playlist