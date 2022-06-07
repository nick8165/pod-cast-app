import React, {useState, useEffect} from "react"
import {Button} from "react-bootstrap"

function Episodes({selectedPodCast}) {
    const [isClick, setClick] = useState(false)

    function handleOnClick(e) {
        console.log(e.target.value)
    }

    function displayEpisodes() {
        return (
            <ul>
            {selectedPodCast.episodes.map((ep) => {
            return ( 
                <div>
                    <li key={ep.title} className='li'>{ep.title}</li>
                    <h6 className='li'>{ep.length} minutes</h6>
                    <Button value={ep.id} onClick={handleOnClick}>+</Button>
                </div>)
            })}
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