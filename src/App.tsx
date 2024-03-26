
import './App.css'
import headerPhoto from './assets/pexels-magda-ehlers-2861751.jpg';

function App() {
  return (

    <div className = "main">

    <div className = "headerPhotoContainer">

    <div className = "headerAndMenu">

      <div className = "title">

        <h1>Miller's</h1>
        <h1>Manicures &</h1>
        <h1>More</h1>

      </div>

      <div className = "menuButtons">
        <a className = "link" href="./Appointments.tsx">Appointments</a>
        <h2>|</h2>
        <a className = "link" href="./About.tsx">About</a>
        <h2>|</h2>
        <a className = "link" href="./Contact.tsx">Contact</a>
        <h2>|</h2>
        <a className = "link" href="./TestimoniesAndImages.tsx">Testimonies and Images</a>
      </div>


      </div>

      <img className = "headerPhoto" src= {headerPhoto} alt ="Background oak Tree"/>

    </div>

    </div>
  )
}

export default App
