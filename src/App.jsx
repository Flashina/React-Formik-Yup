// // import './App.css'
// import Githubapi from './Components/Githubapi'
// import Async from './Components/Google/Async'
// import Event from './Components/Google/Event'
// import Input from './Components/Google/Input'
// import Map from './Components/Google/Map'
// // import Google from './Components/Google/Google'
// // import Hero from './Components/Hero'
// // import Navbar from './Components/Navbar'



// function App() {
  

//   return (
//     <>
//     <Map />
//       {/* <Navbar />
//       <Hero /> */}
//       {/* <Google/> */}
//       <Event/>
//       <Input />
//       <Async />
//       <Githubapi />
//     </>
//   )
// }

// export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Todo from './Components/Todo'
import Button from './Components/Button'
import About from './Components/About'
import Feed from './Components/Feed'
import Library from './Components/Library'
import Formik from './Components/Formik'



const App = () => {

  return (
    <>

      <Navbar />
      <Routes>
        <Route path = '/' element = {<Hero/>} />
        <Route path='/Navbar' element = {<Navbar/>} />
        <Route path='/Todo' element = {<Todo/>} />
        <Route path='/Button' element = {<Button/>} />
        <Route path='/about/:id' element = {<About/>}/>
        <Route path='/feed/' element = {<Feed/>} />
        <Route path='/feed/library' element = {<Library/>} />
        <Route path='/formik' element = {<Formik />} />
        
  
      </Routes>
    </>
  )
}

export default App
