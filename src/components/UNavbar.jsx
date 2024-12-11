import { Button, Col, Form, Navbar, Row } from 'react-bootstrap'
import Logo from '../assets/images/Logo.png'
import { useState } from 'react'

const UNavbar = ({ setCoordinates }) => {
  const [city, setCity] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c906786fcf8000ed9d78c6205f38333a`
      )
      const data = await response.json()
      const { lon, lat } = data.coord
      setCoordinates({ lon, lat })
      setCity('')
      console.log(lon, lat)
    } catch (error) {
      console.error('Error fetching the coordinates:', error)
    }
  }

  return (
    <Navbar className="justify-content-between px-1 px-md-3 py-3 bg-secondary-subtle shadow-lg">
      <Navbar.Brand href="#home" className="text-info ps-2 fs-4 fw-semibold">
        umbrellApp
      </Navbar.Brand>
      <Form className="pe-3" onSubmit={handleSubmit}>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="You need me in your city?"
              className="py-2 border-info border-2 m-0 bg-transparent"
              variant="info"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Col>
          <Col className="p-0">
            <Button
              type="submit"
              variant="outline-info"
              className="p-1 border-2"
            >
              <img
                alt="umbrellApp Logo"
                src={Logo}
                width="32"
                height="32"
                className="d-inline-block align-center p-1"
              />
            </Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  )
}

export default UNavbar
