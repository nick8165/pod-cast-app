import React, {useState} from "react"
import {Button} from "react-bootstrap"
import DeleteWarning from "./deletewarning"

function RemovePlaylist({selectedPlaylist, user}) {
    const [toggle, setToggle] = useState(false)

    function handleToggle() {
        setToggle(!toggle)
    }

    function handleDelete() {
        fetch(`/playlists/${selectedPlaylist[0].id}`, {
            method: 'DELETE',
        })
        .then((res) => {
            if(res.ok){
                console.log(res)
            } else {
                res.json().then(console.log)
            }
        })
    }

    if(toggle === true) {
        return(
            <DeleteWarning handleToggle={handleToggle} handleDelete={handleDelete}/>
        )
    } else {
        return(
            <div>
                <Button type="button" className="btn btn-dark btn-outline-danger" onClick={handleToggle}>Delete Playlist</Button>
            </div>
        )
    }
}

export default RemovePlaylist