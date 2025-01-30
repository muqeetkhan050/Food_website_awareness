import { useState } from 'react'
import './App.css'
import CardSlider from './CardSlider'
import Head from './Head.jsx'
import Header from './Header.jsx'
import WasteCalculator from './WasteCalculator.jsx'
import Question from './Question.jsx'
import Footer from './Footer.jsx'
function App() {
  return (
    <>
      <Header />
      <Head />
      <WasteCalculator/>
      <CardSlider />
      <Question/>
      <Question/>
      <Footer/>
     
    </>
  )
}

export default App;
