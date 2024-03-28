
import './App.css'
import headerPhoto from './assets/pexels-magda-ehlers-2861751.jpg';
import logo from './assets/LogoTransparent.png';
function App() {
  return (

    <div className = "main">

    <div className = "headerPhotoContainer">


    <div className = "headerAndMenu">


      <div className = "titleContainer">

        <div className = "title1AndLogo">
          <img className = "logo" src = {logo} alt = "MMM Logo"/>
          <h1 className = "title1">iller's </h1>
        </div>

        <h1 className = "title2">Manicured</h1>
        <h1 className = "title3">Mowing &</h1>
        <h1 className = "title4">More</h1>

      </div>

      <div className = "menuButtons">
        <button>
          <a className = "link" href="./Appointments.tsx">Appointments</a>
        </button>
        
        <button>
        <a className = "link" href="./About.tsx">About</a>
        </button>

        <button>
        <a className = "link" href="./Contact.tsx">Contact</a>
        </button>

        <button>
        <a className = "lastLink" href="./TestimoniesAndImages.tsx">Testimonies and Images</a>

        </button>
        
      </div>


      </div>

      <img className = "headerPhoto" src= {headerPhoto} alt ="Background oak Tree"/>

    </div>

    </div>
  )
}

export default App
