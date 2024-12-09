import 'bootstrap/dist/css/bootstrap.min.css'

import UNavbar from './components/UNavbar'
import UCarousel from './components/UCarousel'
import './assets/styles/homepage.css'
import './assets/styles/custom-bootstrap.css'
import UFooter from './components/UFooter'

function App() {
  return (
    <>
      <UNavbar />
      <main className="bg-dark vh-100 wh-100">
        <UCarousel />
      </main>
      <UFooter />
    </>
  )
}

export default App
