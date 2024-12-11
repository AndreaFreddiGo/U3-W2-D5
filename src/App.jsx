import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/homepage.css'
import './assets/styles/custom-bootstrap.css'
import React, { useEffect, useState } from 'react'
import UFooter from './components/UFooter'
import UNavbar from './components/UNavbar'
import UWeather from './components/UWeather'

function App() {
  const [coordinates, setCoordinates] = useState({ lon: null, lat: null })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoordinates({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      })
    })
  }, [])

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <UNavbar setCoordinates={setCoordinates} />
      <main style={{ flex: 1 }}>
        <UWeather latitude={coordinates.lat} longitude={coordinates.lon} />
      </main>
      <UFooter />
    </div>
  )
}

export default App
