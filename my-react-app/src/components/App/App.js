import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import MyInfo from '../MyInfo/MyInfo';

import Navbar from '../Navbar/Navbar';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';

function App() { // App is the root component in the DOM tree; treat as Table of Contents
  return (
    <div className="App">
      {/* child components */}
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

/* could also do arrow function syntax

const App = () => ({
  <div className="App">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
})

OR

const App = () => {
 return (
   <div className="App">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
 )
}

*/