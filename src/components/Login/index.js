import './index.css'

const Login = () => (
  <>
    <div className="progress-container">
      <div className="progress" />
    </div>
    <div className="main-tropical-container">
      <div className="tropical-container">
        <p className="para">Discover the Beauty odf the tropics</p>
        <h1 className="heading">
          <span>
            Tropical <br /> Destinations
          </span>
          <br className="break" /> For Student
        </h1>

        <p className="description1">
          Lorem Lpsum dolor sit amet consectetur.
          <br />
          sit matts donec mi some bibendum interger ruturm nisl.
          <br />A nec nisl vitae.
        </p>
        <button type="button" className="button">
          SING UP
        </button>
      </div>
      <div className="image-logo">
        <img
          src="https://res.cloudinary.com/duwvk9yrh/image/upload/v1693633366/Group_171_j8x3hk.png"
          className="image"
          alt="logo"
        />
      </div>
    </div>
  </>
)

export default Login
