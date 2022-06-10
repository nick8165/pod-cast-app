import React, {useState, useEffect} from "react"
import {Button} from "react-bootstrap"

function Episodes({selectedPodCast, user}) {
    const [currentPodCast, setCurrentPodCast] = useState(false)
    const [isClick, setClick] = useState(false)
    
    if (currentPodCast !== true) {
        user.pod_casts.map((pod) => {
            if (pod.title === selectedPodCast.title) {
                setCurrentPodCast(true)
            } else {
                console.log(false)
            }
        })
    }
    
    function handleOnClick() {
        const userPod = {
            user_id: user.id,
            pod_cast_id: selectedPodCast.id
        }
        fetch('/userPod', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(userPod)
        }) 
    }

    function displayEpisodes() {
        return (
            <ul>
                <h1 className='li'>{selectedPodCast.title}</h1>
                <img src={selectedPodCast.thumb_nail} alt="error" />
                {(currentPodCast === true ? <Button>Added</Button> : <Button onClick={handleOnClick} value={isClick}>+</Button>)}
            {selectedPodCast.episodes.map((ep) => {
            return ( 
                <div key={ep.title}>
                    <li className='li'>{ep.title}</li>
                    <Button>Play</Button>
                    <h6 className='li'>{ep.length} minutes</h6>
                </div>)
            })}
            <h3 className='li'>Developed by {selectedPodCast.creator.name}</h3>
            <h6 className='li'>Genre: {selectedPodCast.genres[0].category}</h6>
            </ul>
        )
    }

    return (
        <div>
            {displayEpisodes()}
        </div>
    )

}

export default Episodes