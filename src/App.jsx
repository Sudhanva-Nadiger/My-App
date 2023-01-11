import React from 'react'
import BucketView from './components/BucketView'
import History from './components/History'
import { Routes, Route} from 'react-router-dom'
import SharedLayout from './components/SharedLayout'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
            <Route index path="/" element={<BucketView/>} />
            <Route path="/history" element={<History />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
