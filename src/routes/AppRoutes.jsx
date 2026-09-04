import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layouts/Layout'
import Home from '../pages/Home'
import Properties from '../pages/Properties'
import Buy from '../pages/Buy'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import Rent from '../pages/Rent'
import PropertyDetails from '../pages/PropertyDetails'
import ListProperty from '../pages/ListProperty'
import Agents from '../pages/Agents'
import AgentDetails from '../pages/AgentDetails'
import AgentProfile from '../pages/AgentProfile'



const AppRoutes = () => {
  return (
    <Routes>

      <Route element={<Layout />}>

      <Route path='/' element={<Home />} />
      <Route path='/properties' element={<Properties />} />
      <Route path='/properties/:id' element={<PropertyDetails />} />
      <Route path='/buy' element={<Buy />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/list-property' element={<ListProperty />} />
     
      <Route path='/register' element={<Register />}/>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/rent' element={<Rent />} />
      <Route path='/agents' element={<Agents />} />
      <Route path='/agents/:id' element={<AgentDetails />} />
      <Route path='/agents/:id' element={<AgentProfile />} />
      

      </Route>

       <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default AppRoutes