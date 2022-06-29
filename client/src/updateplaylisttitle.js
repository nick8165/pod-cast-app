import React, {useState} from "react"
import { FormControl, InputGroup, Button} from "react-bootstrap"

function UpdatePlaylistTitle({selectedPlaylist, handleTogglePlaylist}) {
    const [toggleText, setToggleText] = useState(false)
    const [changeTitle, setChangeTitle] = useState("")

    function handleChangeTitle() {
        console.log("toggled")
        setToggleText(!toggleText)
    }

    function handleNewTitle(e) {
        setChangeTitle(e.target.value)
    }

    function handleUpdate() {
        fetch(`/playlists/${selectedPlaylist[0].id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: changeTitle,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((res) => res.json())
        .then((json) => console.log(json))
        handleChangeTitle()
        handleTogglePlaylist()
        
    }

    if (toggleText === false) {
        return (
            <div>
                <Button type="button" className="btn btn-success" onClick={handleChangeTitle}>Change Playlist Title</Button>
            </div>
        )
    } else {
        return (
            <div className="App" onChange={handleNewTitle}>
                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center"></div>
                    <InputGroup className="col-6">
                        <FormControl placeholder="New Title" aria-label="Search" aria-describedby="basic-addon2" />
                        <Button variant="outline-secondary" id="button-addon2" onClick={handleUpdate}>Enter</Button>
                    </InputGroup>
                </div>
            </div>
        )
    }
}

export default UpdatePlaylistTitle