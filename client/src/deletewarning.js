import React from "react"
import {Button} from "react-bootstrap"

function DeleteWarning({handleToggle, handleDelete}) {

    function handleYes() {
        handleDelete()
        handleToggle()
    }

    function handleNo() {
        handleToggle()
    }

    return(
        <div>
            <h4 className="li">Delete Playlist?</h4>
            <Button type="button" className="btn btn-danger" onClick={handleYes}>Yes</Button>
            <Button type="button" className="btn btn-dark"onClick={handleNo}>No</Button>
        </div>
    )
}

export default DeleteWarning