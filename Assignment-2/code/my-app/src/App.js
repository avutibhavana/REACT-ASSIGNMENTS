import logo from "./logo.svg";
import "./App.css";
function App(props) {
  const { employee } = props;
  const { name, location, age, bloodGroup, profileImg } = employee;
  return (
    <div className="container">
      {
        /* Start your React code here */
        <div className="box">
          <div>
            <img src={profileImg} alt="profile-image"></img>
          </div>
          <div className="content">
            <h1>{name}</h1>
            <p>location</p>
            <h3>{location}</h3>
            <p>bloodGroup</p>
            <h3>{bloodGroup}</h3>
            <p>age</p>
            <h3>{age}</h3>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
