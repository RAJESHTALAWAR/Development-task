import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="header-main">
      <p className="home">Home</p>
      <p className="home">About</p>

      <p className="home">Schedule</p>

      <p className="home">Membership</p>

      <p className="home">Pricing</p>
    </div>
    <div className="offer-container">
      <p className="offer">Offer</p>
      <button type="button" className="button">
        Courses
      </button>
    </div>
  </div>
)
export default Header
