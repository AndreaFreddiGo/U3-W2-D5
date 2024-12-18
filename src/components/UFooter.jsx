import Logo from '../assets/images/Logo.png'

const UFooter = () => (
  <footer className="change footer d-flex  py-2 shadow-lg ">
    <span className="text-info m-auto p-2 fs-6">
      <p className="mb-0">
        {' '}
        <img src={Logo} alt="Logo" style={{ width: '30px' }} className="pe-2" />
        umbreallApp - Copyright {new Date().getFullYear()}
      </p>
    </span>
  </footer>
)

export default UFooter
