import React from 'react'
import NavBar from './components/NavBar'
import BucketView from './components/BucketView'
import Footer from './components/Footer'

function App() {

  return (
    <div style={{ height: "100vh", width: "100vw" ,display: "flex", flexDirection:"column", padding: "0" ,overflowX: 'hidden' }}>
      <NavBar />
      <BucketView />
      <Footer/>
    </div>
  )
}

export default App
