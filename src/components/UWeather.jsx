import { useEffect, useState } from 'react'
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap'

const UWeather = ({ latitude, longitude }) => {
  const [weather, setWeather] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const getWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c906786fcf8000ed9d78c6205f38333a&units=metric`
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Error in the request')
        }
      })
      .then((data) => {
        setWeather(data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
        setIsError(true)
      })
  }

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      getWeather()
      console.log(latitude, longitude)
    }
  }, [latitude, longitude])

  const today = new Date()

  return (
    <>
      {isError && (
        <Alert variant="danger">Oops! Qualcosa è andato storto!😭</Alert>
      )}

      {isLoading && (
        <Spinner animation="border" role="status" variant="success">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {weather.weather && (
        <Container fluid className="m-0 p-5">
          <Row className="d-flex flex-column flex-md-row justify-content-between">
            <Col className=" weatherCard d-flex text-center col col-12 col-md-5 border border-light border-5 rounded-4 shadow-lg p-2 ">
              <img
                id="weatherIcon"
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="weather icon"
              />

              <div>
                <p className="cityWindow text-secondary m-0 text-start ps-3">
                  {weather.name}
                </p>
                <p
                  className="cityWindow text-secondary
             m-0 text-start fs-4 mt-2 ps-3"
                >
                  {today.getDate()}/{today.getMonth() + 1}/
                  {today.getFullYear().toString().slice(-2)} -{' '}
                  {today.getHours()}:
                  {today.getMinutes().toString().padStart(2, '0')}
                </p>
              </div>
            </Col>
            <Col className="d-flex flex-column flex-md-row weatherCard col col-12 col-md-6 border border-light border-5 rounded-4 shadow-lg p-2 mt-4 mt-md-0">
              <div className=" me-5 ms-2 pe-5 my-0 ">
                <p className=" text-secondary fs-4 fw-bolder my-0 py-1">
                  hum: {weather.main.humidity} %
                </p>
                <p className=" text-secondary fs-4 fw-bolder my-0 py-1">
                  temp: {weather.main.temp} °C
                </p>
              </div>
              <div className="ms-2 my-0">
                <p className=" text-secondary fs-4 fw-bolder my-0 py-1">
                  press: {weather.main.pressure} bar
                </p>
                <p className=" text-secondary fs-4 fw-bolder my-0 py-1">
                  wind: {weather.wind.speed} m/s
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  )
}

export default UWeather
