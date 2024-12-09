import { useEffect, useState } from 'react'

const UCarousel = () => {
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude)
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    })
  }, [])

  return null
}

export default UCarousel
