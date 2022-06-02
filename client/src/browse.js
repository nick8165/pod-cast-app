import React from "react"
import {Button} from "react-bootstrap"

function Browse({podCastList}) {
    
    function displayPodCast() {
        if (podCastList !== "") {
            return podCastList.map((pod) => {
                return (<div key={pod.title}><img src={pod.thumb_nail} alt="error" /><Button>{pod.title}</Button></div>)
            })
        }
    }

    return (
        <div>
            {displayPodCast()}
        </div>
    )
}

export default Browse