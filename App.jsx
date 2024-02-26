import React from 'react'
import './App.css'
import Headers from './components/Header'
import Search from './components/Body'
import RestCard from './components/RestData'
import restData from './components/utils/restdata'
import Body from './components/Body'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <Headers />
      <Outlet/>  
    </div>
  )
}




export default AppLayout






