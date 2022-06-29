import React, {useState, useEffect} from "react"
import {Button, Container} from 'react-bootstrap'
import CreatePlaylist from './createplaylist'
import CurrentPlaylist from "./currentplaylist"


function Playlist({user}) {
    const [createToggle, setCreateToggle] = useState(false)
    const [selectedPlaylist, setSelectedPlaylist] = useState("")
    const [playlists, setPlaylists] = useState("")
    const [togglePlaylist, setTogglePlaylist] = useState(true)

    useEffect(() => {
        fetch(`/userPlaylists/${user.id}`)
        .then(res => {
          if(res.ok) {
            res.json().then(list => setPlaylists(list))
          }
        })
    },[togglePlaylist])
    
    function handleCreate() {
        setCreateToggle(!createToggle)
        setTogglePlaylist(!togglePlaylist)
    }

    function resetSelectedPlaylist() {
        setSelectedPlaylist("")
    }

    function handleTogglePlaylist() {
        console.log("playlist toggle")
        setTogglePlaylist(!togglePlaylist)
    }

    function handleSelectedPlaylist(e) {
        const select = playlists.filter(element => element.id.toString() === e.target.id)
        setSelectedPlaylist(select)
    }

    function displayPlaylist() {
        if (createToggle === true) {
            return(
                <CreatePlaylist user={user} handleCreate={handleCreate} />
            )
        }
        if (selectedPlaylist !== "") {
            return (
                <CurrentPlaylist selectedPlaylist={selectedPlaylist} user={user} reset={resetSelectedPlaylist} handleTogglePlaylist={handleTogglePlaylist}/>
            )
        }
        if (createToggle === false && playlists !== "") {
            return (
                <div>
                    <div>
                        <h4 className="li">Create Playlist</h4>
                        <Button type="button" onClick={handleCreate}>+</Button>
                    </div>
                    <h1>Your Playlists</h1>
                    <div>
                        {playlists.map((playlist) => {
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
        <Container>
            {displayPlaylist()}
        </Container>
    )
}

export default Playlist