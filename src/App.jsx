import { useState } from 'react'
import './App.css'
import CardSlider from './CardSlider'
import Head from './Head.jsx'
import Header from './Header.jsx'
import WasteCalculator from './WasteCalculator.jsx'
function App() {
  return (
    <>
      <Header />
      <Head />
      <WasteCalculator/>
      <CardSlider />
    </>
  )
}

export default App;
