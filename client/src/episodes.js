import React, {useState, useEffect} from "react"
import {Button} from "react-bootstrap"

function Episodes({selectedPodCast}) {
    const [isClick, setClick] = useState(false)
    console.log(selectedPodCast)
    function handleOnClick(e) {
        console.log(e.target.value)
    }

    function displayEpisodes() {
        return (
            <ul>
                <h1 className='li'>{selectedPodCast.title}</h1>
                <img src={selectedPodCast.thumb_nail} alt="error" />
                <Button onClick={handleOnClick}>+</Button>
            {selectedPodCast.episodes.map((ep) => {
            return ( 
                <div key={ep.title}>
                    <li className='li'>{ep.title}</li>
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