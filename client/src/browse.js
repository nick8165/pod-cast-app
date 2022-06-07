import React, {useState} from "react"
import {Button} from "react-bootstrap"
import Episodes from "./episodes"

function Browse({podCastList}) {
    const [selectedPodCast, setSelectedPodCast] = useState("") 
    
    function handleOnClick(e) {
        fetch(`/pod_casts/${e.target.parentNode.value}`)
        .then(res => {
            if(res.ok) {
                res.json().then(ep => setSelectedPodCast(ep))
            }
        })
    }
    
    function displayPodCast() {
        if (selectedPodCast !== "") {
            return (
                <Episodes selectedPodCast={selectedPodCast} />
            )
        }
        if (podCastList !== "") {
            return podCastList.map((pod) => {
                return (<div key={pod.title}>
                            <Button type="button" value={pod.id} className="btn btn-dark" onClick={handleOnClick}>
                                <h4>{pod.title}</h4>
                                <img src={pod.thumb_nail} alt="error" />
                            </Button>
                        </div>)
            })
        } else {
            return (<h1>Loading...</h1>)
        }
    }

    return (
        <div>
            {displayPodCast()}
        </div>
    )
}

export default Browse