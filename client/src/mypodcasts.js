import React, {useState, useEffect} from "react"
import {Button} from "react-bootstrap"
import Episodes from "./episodes"

function MyPodCasts({user}) {
    const [selectedPodCast, setSelectedPodCast] = useState("")
    const [toggle, setToggle] = useState(false)
    const [podList, setPodList] = useState("") 
    
    useEffect(() => {
        fetch(`/user_pod_id_show/${user.id}`)
        .then(res => {
          if(res.ok) {
            res.json().then(pod => setPodList(pod))
          }
        })
      },[selectedPodCast])

    function handleToggle() {
        setToggle(!toggle)
    }

    function handleOnClick(e) {
        fetch(`/pod_casts/${e.target.parentNode.value}`)
        .then(res => {
            if(res.ok) {
                res.json().then(ep => setSelectedPodCast(ep))
            }
        })
    }

    function handleBack() {
        setSelectedPodCast("")
    }

    function displayMyPodCasts() {
        if (selectedPodCast !== "") {
            return (
                <div>
                    <Button type="button" className="btn btn-dark btn-outline-light btn-sm" onClick={handleBack}>Back</Button>
                    <Episodes selectedPodCast={selectedPodCast} user={user} handleToggle={handleToggle}/>
                </div>
            )
        }
        if (podList !== "") {
            return podList.map((pod) => {
                return (<div key={pod.pod_cast.title}>
                            <h4>|{pod.pod_cast.title}|</h4>
                            <Button type="button" value={pod.pod_cast.id} className="btn btn-dark" onClick={handleOnClick}>
                                <img src={pod.pod_cast.thumb_nail} alt="error" class="img-thumbnail" />
                            </Button>
                        </div>)
            })
        } else {
            return (<h1>Loading...</h1>)
        }
    }

    return(
        <div>
            <h1>|-My Podcast Library-|</h1>
            {displayMyPodCasts()}
        </div>
    )
}

export default MyPodCasts