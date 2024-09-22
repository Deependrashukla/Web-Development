import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/navbar/CustomNavbar'
import Header from './components/header/Header'
import Contact from './components/contact/Contact'
import ProfileComponent from './components/profile/ProfileComponent'
import Project from './components/projects/Project'
import About from './components/about/About'
import Faqs from './components/faqs/Faqs';
import Description from './components/description/Description';
import Footer from './components/footer/Footer';

function App() {
 const [count, setCount] = useState(0)

  return (
    <><div>
        <CustomNavbar />
        <Header />
        <ProfileComponent />
        <Project />
        <About />
        <Faqs />
        <Description />
        <Footer />
        <Contact />
      </div>
    </>
  )
}

export default App
