import React, { useEffect, useState } from "react"
import Browse from "./browse"
import PodCastSearch from "./podcastsearch"
import {Container} from "react-bootstrap"

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
        <Container>
            <PodCastSearch handleSearchValue={handleSearchValue}/>
            <Browse podCastList={podCastList} user={user} desiredSearch={desiredSearch}/>
        </Container>
    )
}

export default Home