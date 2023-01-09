import React from 'react'
import NavBar from './components/NavBar'
import BucketView from './components/BucketView'
import Footer from './components/Footer'

function App() {

  return (
    <div style={{ overflowX: 'hidden' }}>
      <NavBar />
      <BucketView />
      <Footer/>
    </div>
  )
}

export default App
