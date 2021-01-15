import React from 'react'
import Button from './Button'
import './style.css'
import Row from './Row'
import request from './request'
import Header from './Header'

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Row
        title='Topli napici / Hot Drinks'
        id='topli'
        fetchUrl={request.fetchTopliNapitci}
      />
      <Row
        title='Bezalkoholna pića / Non-alc. drinks'
        id='bezalkoholni'
        fetchUrl={request.fetchBezAlkoholniNapitci}
      />
      <Row
        title='Žestina / Liquor'
        id='zestina'
        fetchUrl={request.fetchZestina}
      />
      <Row title='Rakije' id='rakije' fetchUrl={request.fetchRakije} />
      <Row title='Vina / Wine' id='vina' fetchUrl={request.fetchVina} />
      <Row
        title='Točena piva / Beer On Tap'
        id='tocena'
        fetchUrl={request.fetchTocenaPiva}
      />
      <Row
        title='Flaširana piva / Bottles'
        id='flasirana'
        fetchUrl={request.fetchFlasiranaPiva}
      />

      <Button />
    </div>
  )
}

export default App
