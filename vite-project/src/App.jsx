import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greeting from './Greeting'
import Student from './components/Student'
import React, { useEffect } from "react";
import "./App.css";
function App() {
  return (
    <>
      <div className="app">
      <h1>Student Information</h1>

      <Student name="Yash Sharma" course="Computer Science and Engineering" marks={97} />
      <Student name="Anita Verma" course="Information Technology" marks={92} />
      <Student name="Rohan Gupta" course="Electronics" marks={78} />
      
    </div>
    </>
  )
}

export default App