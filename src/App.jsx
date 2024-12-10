import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/homepage.css'
import './assets/styles/custom-bootstrap.css'
import UFooter from './components/UFooter'
import UNavbar from './components/UNavbar'
import UWeather from './components/UWeather'

function App() {
  return (
    <>
      <UNavbar />
      <main>
        <UWeather />
      </main>
      <UFooter />
    </>
  )
}

export default App
