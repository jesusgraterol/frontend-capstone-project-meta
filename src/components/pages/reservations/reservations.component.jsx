import './reservations.css';
import { useState } from 'react';
import SubHeader from "../../shared/sub-header/sub-header.component.jsx";

function Reservations() {
  const [ formSubmitted, setFormSubmitted ] = useState(false);
  const [ formData, setFormData ] = useState({
    reservationDate: undefined,
    reservationTime: undefined,
    numberOfGuests: undefined,
    occasion: undefined
  });



  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }



  const handleOnSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  }

  
  return (
    <section id="reservationsSection">

      <SubHeader name="Reservations" />

      <article>

        <span className="reservation-flex-separator"></span>

        <div>

          {formSubmitted ? (
            <div className="confirmation">
              <span className="md-icon md-72">check_circle</span>
              <h2>Your reservation has been confirmed</h2>
              <p>You will receive an email with the details briefly</p>
            </div>
          ) :(
            <form onSubmit={handleOnSubmit}>

              <div className="form-row"> 
                <label htmlFor="reservationDate">Choose date</label>
                <input type="date" id="reservationDate" name="reservationDate" onChange={handleOnChange} required></input>
              </div>

              <div className="form-row"> 
                <label htmlFor="reservationTime">Choose time</label>
                <select id="reservationTime" name="reservationTime" onChange={handleOnChange} required>
                  <option></option>
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                  <option>21:00</option>
                  <option>22:00</option>
                </select>
              </div>

              <div className="form-row"> 
                <label htmlFor="numberOfGuests">Number of guests</label>
                <input type="number" id="numberOfGuests" name="numberOfGuests" onChange={handleOnChange} min="1" max="10" required></input>
              </div>

              <div className="form-row"> 
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" name="occasion" onChange={handleOnChange} required>
                  <option></option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                </select>
              </div>

              <div className="form-row"> 
                <button type="submit" className="btn accent raised">Make reservation</button>
              </div>

            </form>
          )}

        </div>


        <span className="reservation-flex-separator"></span>

      </article>

      
    </section>
  )
}

export default Reservations;
