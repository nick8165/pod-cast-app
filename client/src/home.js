import React, { useEffect, useState } from "react"
import Browse from "./browse"
import PodCastSearch from "./podcastsearch"
import {Container} from "react-bootstrap"

function Home() {
    const [podCastList, setPodCastList] = useState("")

    useEffect(() => [
        fetch('/podcast')
        .then(res => {
            if(res.ok) {
                res.json().then(podcast => setPodCastList(podcast))
            }
        })
    ],[])

    return (
        <Container>
            <PodCastSearch />
            <Browse podCastList={podCastList}/>
        </Container>
    )
}

export default Home