import {useState} from 'react'
import {FaMinus} from 'react-icons/fa'
import {AiOutlinePlus} from 'react-icons/ai'
import './index.css'

const Book = () => {
  const [count, setCount] = useState(0)
  const [add, setCountRoom] = useState(0)

  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }

  const decrementOnRoom = () => {
    setCountRoom(prevCount => prevCount - 1)
  }

  const incrementOnRoom = () => {
    setCountRoom(prevCount => prevCount + 1)
  }

  return (
    <div className="book-container">
      <div className="image">
        <img
          src="https://res.cloudinary.com/duwvk9yrh/image/upload/v1693657632/Group_167_isg8np.png"
          alt="student"
          className="student-book"
        />
      </div>
      <div className="input-container">
        <h1 className="heading">Book Now</h1>
        <p className="paragraph">Lorem ipsum dolor sit amet</p>
        <label htmlFor="city" className="city">
          CITY
        </label>
        <input
          className="city-name"
          placeholder="Enter City"
          type="text"
          id="city"
        />
        <div className="details-input">
          <div>
            <label htmlFor="arrival" className="arrival">
              ARRIVAL
            </label>
            <input
              className="arrival-input"
              id="arrival"
              placeholder="10 October"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="departure" className="departure">
              DEPARTURE
            </label>
            <input
              placeholder="11 October"
              id="departure"
              type="text"
              className="departure-input"
            />
          </div>
        </div>
        <div className="main-para-container">
          <div className="para-container">
            <div>
              <p className="start">Start</p>
            </div>
            <div>
              <div className="direction-icon">
                <div className="icon-container">
                  <FaMinus className="minus" onClick={decrement} />

                  <p className="count">{count}</p>

                  <AiOutlinePlus className="plus" onClick={increment} />
                </div>
              </div>
            </div>
          </div>
          <div className="para-container">
            <div>
              <p className="start">ROOM</p>
            </div>
            <div>
              <div className="direction-icon">
                <div className="icon-container">
                  <FaMinus className="minus" onClick={decrementOnRoom} />

                  <p className="count">{add}</p>

                  <AiOutlinePlus className="plus" onClick={incrementOnRoom} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="book-button" type="button">
          BOOK NOW
        </button>
      </div>
    </div>
  )
}

export default Book
