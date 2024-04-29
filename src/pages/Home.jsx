import React from 'react'
import Banner from '../components/Banner'
import Row from '../components/Row'
import requests from '../Request'

function Home() {
  return (
    <div>
        <Banner></Banner>
        <Row rowID= '1' title="Up Comming" fetchURL={requests.requestUpcoming}></Row>
        <Row rowID= '2' title="Popular" fetchURL={requests.requestPopular}></Row>
        <Row rowID= '3' title="Top Rated" fetchURL={requests.requestTopRated}></Row>
        <Row rowID= '4' title="Now Playing" fetchURL={requests.requestNowPlaying}></Row>
    </div>
  )
}

export default Home