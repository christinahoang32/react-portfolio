import React from 'react';
import './app.css'; // Import your CSS file for styling

import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
// import Footer from './components/Footer';

// const App = () => (
//   <Router>
//     <div className="app">
//     <Header />
//     <Routes>
//       <Route path="/about" element={<AboutMe/>} />
//       <Route path="/portfolio"element={<Portfolio/>} />
//       <Route path="/contact" element={<Contact/>} />
//       <Route path="/resume" element={<Resume/>} />
//     </Routes>
//     </div>
//     {/* <Footer /> */}
//   </Router>
// );

function App() {
  return (
    <div className="app">
      <Header />
      <AboutMe/>
      <Portfolio/>
      <Contact/>
      <Resume/>
      <Footer/>
    </div>
  );
}


export default App;