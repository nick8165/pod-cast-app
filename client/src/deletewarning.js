import React from "react"
import {Button} from "react-bootstrap"

function DeleteWarning({handleToggle, handleDelete}) {

    function handleYes() {
        handleDelete()
    }

    function handleNo() {
        handleToggle()
    }

    return(
        <div class="btn-group">
            <h4 className="li">Delete Playlist?</h4>
            <Button type="button" className="btn btn-dark btn-outline-danger" onClick={handleYes}>Yes</Button>
            <Button type="button" className="btn btn-dark btn-outline-light"onClick={handleNo}>No</Button>
        </div>
    )
}

export default DeleteWarning