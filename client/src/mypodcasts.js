import React, {useState, useEffect} from "react"
import {Button} from "react-bootstrap"
import Episodes from "./episodes"

function MyPodCasts({user}) {
    const [selectedPodCast, setSelectedPodCast] = useState("")
    const [toggle, setToggle] = useState(false)
    const [podList, setPodList] = useState("") 
    
    useEffect(() => {
        fetch(`/userPod/${user.id}`)
        .then(res => {
          if(res.ok) {
            res.json().then(pod => setPodList(pod))
          }
        })
      },[])

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

    function displayMyPodCasts() {
        if (selectedPodCast !== "") {
            return (
                <div>
                    <Button type="button" onClick={handleBack}>Back</Button>
                    <Episodes selectedPodCast={selectedPodCast} user={user} handleToggle={handleToggle}/>
                </div>
            )
        }
        if (podList !== "") {
            return podList.map((pod) => {
                return (<div key={pod.pod_cast.title}>
                            <Button type="button" value={pod.pod_cast.id} className="btn btn-dark" onClick={handleOnClick}>
                                <h4>{pod.pod_cast.title}</h4>
                                <img src={pod.pod_cast.thumb_nail} alt="error" />
                            </Button>
                        </div>)
            })
        } else {
            return (<h1>Loading...</h1>)
        }
    }

    function handleBack() {
        setSelectedPodCast("")
    }

    return(
        <div>
            {displayMyPodCasts()}
        </div>
    )
}

export default MyPodCasts