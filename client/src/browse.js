import React from "react"
import {Button} from "react-bootstrap"

function Browse({podCastList}) {
    
    return (
        <div>
            <Button>{podCastList.title}</Button>
        </div>
    )
}

export default Browse