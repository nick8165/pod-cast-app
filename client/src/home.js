import React, { useEffect, useState } from "react"
import Browse from "./browse"
import PodCastSearch from "./podcastsearch"

function Home({user}) {
    const [podCastList, setPodCastList] = useState("")
    const [desiredSearch, setDesiredSearch] = useState("")

    useEffect(() => [
        fetch('/podcast')
        .then(res => {
            if(res.ok) {
                res.json().then(podcast => setPodCastList(podcast))
            }
        })
    ],[])

    function handleSearchValue(e) {
        setDesiredSearch(e)
    }

    return (
        <div>
            <PodCastSearch handleSearchValue={handleSearchValue}/>
            <h1>Home Page Browse</h1>
            <Browse podCastList={podCastList} user={user} desiredSearch={desiredSearch}/>
        </div>
    )
}

export default Home