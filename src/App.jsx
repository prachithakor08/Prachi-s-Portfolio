import './App.css'
import {useState} from "react";
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero'
import Stats from './Components/Stats/Stats';
import About from './Components/About/About'
import Projects from './Components/Projects/Projects';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';
import Achievements from './Components/Achievements/Achievements';
import Footer from './Components/Footer/Footer';

function App() {
  const [darkMode,setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "app dark" :"app"}>
      <Navbar 
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      />
      <Hero/>
      <Stats/>
      <About/>
      <Projects/>
      <Experience/>
         <Achievements/>
      <Contact/>
   
      <Footer/>
    </div>
  );
}

export default App
