import React, { useEffect, useState } from "react"
import Browse from "./browse"
import PodCastSearch from "./podcastsearch"
import {Container} from "react-bootstrap"

function Home() {
    const [podCastList, setPodCastList] = useState({id: 1, title: "Hey Riddle Riddle", thumbnail: "", length: 360, creator_id: 1})

    return (
        <Container>
            <PodCastSearch />
            <Browse podCastList={podCastList}/>
        </Container>
    )
}

export default Home