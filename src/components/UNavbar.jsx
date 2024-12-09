import { Button, Col, Form, Navbar, Row } from 'react-bootstrap'
import Logo from '../assets/images/Logo.png'

const UNavbar = () => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      className="justify-content-between px-1 px-md-3 py-3"
    >
      <Navbar.Brand href="#home" className="text-info ps-2 fs-4 fw-semibold">
        umbrellApp
      </Navbar.Brand>
      <Form className="pe-3">
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="You need me in your city?"
              className="py-2 border-info m-0"
              variant="info"
            />
          </Col>
          <Col className="p-0">
            <Button type="submit" variant="outline-info" className="p-1">
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
