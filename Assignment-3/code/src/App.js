import React from "react";
import logo from "./logo.svg";
import "./App.css";

var arrow = "<";
function App(props) {
  const { employee } = props;
  const {
    name,
    id,
    Appointment,
    email,
    phone,
    status,
    Door,
    Time,
    profileImg,
    role,
    work,
  } = props.employee;
  return (
    <div className="site-container">
      {
        /* Start Your code here */

        <div className="body">
          <header className="heading">
            <div className="firstbox-content">
              <p className="arrow">{arrow}</p>
              <h4>{name}</h4>
              <p>{id}</p>
            </div>
            <button className="button">print</button>
          </header>
          <div className="customer-info">
            <div className="secondbox-content">
              <p>
                <strong>Appointment </strong>
                {Appointment}
              </p>
              <p>
                <strong>Email : </strong>
                {email}
              </p>
              <p>
                <strong>phone : </strong>
                {phone}
              </p>
            </div>
          </div>
          {/* <div className="order-info">
            <div className="third-box-1">
              <h3>status</h3>
              <li>{status}</li>
            </div>
            <div className="third-box-2">
              <h3>Door</h3>
              <p>{Door}</p>
            </div>
            <div className="third-box-3">
              <h3>Time</h3>
              <p>{Time}</p>
            </div>
          </div> */}
          <div className="order-info">
            <div>
              <h3>Status</h3>
              <li>In Progress</li>
            </div>
            <div id="order1">
              <h3>Door</h3>
              <p className="order-para">Mark</p>
            </div>
            <div className="order-time">
              <h3>Time</h3>
              <p id="time1">10:30(25-05-2016)</p>
            </div>
          </div>
          <div className="product-list">
            <img src={profileImg}></img>
            <div className="content-box4">
              <h3>{role}</h3>
              <p>{work}</p>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
