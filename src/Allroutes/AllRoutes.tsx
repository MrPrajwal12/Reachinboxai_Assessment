import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../pages/Login'
import Desktop from '../pages/Desktop' 

const AllRoutes: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/desktop' element={<Desktop />} />  {/* Update this to match the corrected import */}
      </Routes>
    </div>
  )
}

export default AllRoutes
