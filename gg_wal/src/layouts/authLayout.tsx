import React from 'react'
import CustomAppbar from '../components/CustomAppbar'
import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    
    <div style={{minHeight: "100vh", width: "100%"}}>
      <CustomAppbar />
      <Outlet />
    </div>
  )
}
