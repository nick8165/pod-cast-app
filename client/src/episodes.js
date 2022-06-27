import React, {useState, useEffect} from "react"
import {Button} from "react-bootstrap"

function Episodes({selectedPodCast, user}) {
    const [currentPodCast, setCurrentPodCast] = useState(false)
    const [isClick, setClick] = useState(false)
    const [selectedPod, setSelectedPod] = useState("") 
    
    useEffect(() => {
        fetch(`/userPod/${user.id}`)
        .then(res => {
          if(res.ok) {
            res.json().then(pod => setSelectedPod(pod))
          }
        })
      },[])
    
    if (selectedPod !== "" && currentPodCast !== true) {
        selectedPod.map((pod) => {
            if (pod.pod_cast.title === selectedPodCast.title) {
                setCurrentPodCast(true)
                setClick(true)
            } else {
                console.log(false)
            }
        })
    }
    
    function handleAdd() {
        const userPod = {
            user_id: user.id,
            pod_cast_id: selectedPodCast.id
        }
        fetch('/userPod', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(userPod)
        })
        setClick(true)
    }

    function handleUnAdd() {
        setClick(false)
        fetch(`/userPodDelete/${user.id}/${selectedPodCast.id}`, {
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

    function displayEpisodes() {
        return (
            <ul>
                <h1 className='li'>{selectedPodCast.title}</h1>
                <img src={selectedPodCast.thumb_nail} alt="error" />
                {(isClick === true ? <Button className="btn btn-danger" onClick={handleUnAdd}>- Remove From Library</Button> : <Button className="btn btn-dark" onClick={handleAdd} value={isClick}>+ Add To Library</Button>)}
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