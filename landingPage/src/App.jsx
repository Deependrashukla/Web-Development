import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/navbar/CustomNavbar';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import ProfileComponent from './components/profile/ProfileComponent';
import Project from './components/projects/Project';
import About from './components/about/About';
import Faqs from './components/faqs/Faqs';
import Description from './components/description/Description';
import Footer from './components/footer/Footer';
import ContactPage from './components/contactPage/ContactPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route 
          path="" 
          element={
            <> 
              <Header />
              <ProfileComponent />
              <Project />
              <About />
              <Faqs />
              <Description />
              <Footer />
            </>
          } 
        />
        <Route path="/contactPage" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
