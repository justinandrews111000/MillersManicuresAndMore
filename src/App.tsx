
import './App.css'
import headerPhoto from './assets/pexels-magda-ehlers-2861751.jpg';
function App() {
  return (

    <div className = "main">

    <div className = "headerPhotoContainer">


    <div className = "headerAndMenu">


      <div className = "titleContainer">

        
        <h1 className = "title1">Miller's Manicured Mowing & More</h1>

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
        <a className = "link" href="./TestimoniesAndImages.tsx">Testimonies and Images</a>

        </button>
        
      </div>


      </div>

      <img className = "headerPhoto" src= {headerPhoto} alt ="Background oak Tree"/>

    </div>

    </div>
  )
}

export default App
