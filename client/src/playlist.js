import React, {useState} from "react"
import {Button} from 'react-bootstrap'
import CreatePlaylist from './createplaylist'
import CurrentPlaylist from "./currentplaylist"

function Playlist({user}) {
    const [createToggle, setCreateToggle] = useState(false)
    const [removeToggle, setRemoveToggle] = useState(false)
    const [selectedPlaylist, setSelectedPlaylist] = useState("")
    
    function handleCreate() {
        setCreateToggle(!createToggle)
    }

    function handleRemove() {
        setRemoveToggle(true)
    }

    function resetSelectedPlaylist() {
        setSelectedPlaylist("")
    }

    function handleSelectedPlaylist(e) {
        const playlist = user.playlists.filter(element => element.id.toString() === e.target.id)
        setSelectedPlaylist(playlist)
    }

    function displayPlaylist() {
        if (createToggle === true) {
            return(
                <CreatePlaylist user={user} handleCreate={handleCreate}/>
            )
        }
        if (selectedPlaylist !== "") {
            return (
                <CurrentPlaylist selectedPlaylist={selectedPlaylist} user={user} reset={resetSelectedPlaylist}/>
            )
        }
        if (createToggle === false) {
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
                    <h1>Your Playlists</h1>
                    <div>
                        {user.playlists.map((playlist) => {
                            return (
                                <Button  key={playlist.title} type="button" className="btn btn-dark" onClick={handleSelectedPlaylist}>
                                    <h4 id={playlist.id} className="li">{playlist.title}</h4>
                                </Button>
                            )
                        })}
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