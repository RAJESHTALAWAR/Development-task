import './index.css'

const Profile = () => (
  <div className="tropical-adventure-container">
    <div className="tropical-adventure-card">
      <div className="card">
        <div>
          <img
            className="image-profile"
            src="https://res.cloudinary.com/duwvk9yrh/image/upload/v1691200449/Avatar_gzlujb.png"
            alt="logo"
          />
        </div>
        <div>
          <h1 className="heading1">Jenny wilson</h1>
          <p className="para">lorem ipsum dolor sit mit.constrctor</p>
        </div>
      </div>
      <div className="card">
        <div>
          <img
            className="image-profile"
            src="https://res.cloudinary.com/duwvk9yrh/image/upload/v1691200449/Avatar_gzlujb.png"
            alt="logo"
          />
        </div>
        <div>
          <h1 className="heading1">Jenny wilson</h1>
          <p className="para">lorem ipsum dolor sit mit.constrctor</p>
        </div>
      </div>
      <div className="card">
        <div>
          <img
            className="image-profile"
            src="https://res.cloudinary.com/duwvk9yrh/image/upload/v1691200449/Avatar_gzlujb.png"
            alt="logo"
          />
        </div>
        <div>
          <h1 className="heading1">Jenny wilson</h1>
          <p className="para">lorem ipsum dolor sit mit.constrctor</p>
        </div>
      </div>
    </div>
    <div className="topic">
      <p>
        {' '}
        <span className="heading"> Tropical Adventure </span>
        <br /> <p className="para1">for Student</p>
      </p>
      <p className="topic-para">student tropical vacation:Relax and Recharge</p>
      <ul className="un-order-list">
        <li className="list">lorem ipsum dolor sit mit</li>
        <li className="list">lorem ipsum dolor sit mit</li>
        <li className="list">lorem ipsum dolor sit mit</li>
        <li className="list">lorem ipsum dolor sit mit</li>
      </ul>
      <button type="button" className="button">
        Explore More
      </button>
    </div>
  </div>
)
export default Profile
