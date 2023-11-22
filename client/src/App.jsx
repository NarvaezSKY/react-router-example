import React, { useState } from "react"
import { BrowserRouter, Routes,Route, Link } from "react-router-dom"
import { Admin, Analytics, Dashboard, Home, Landing } from "./pages"
import { ProtectedRoute } from "./components/ProtectedRoute"
export function App(){

  const [user, setUser]=useState(null)

  const login=()=>{
    setUser({
      id: 1,
      name: "pepe",
      permissions: ['analize'],
      roles:['admin']
    })
  }
  
  const logout=()=>{
    setUser(null)
  }

 return (
    <BrowserRouter>
    <Navigation/>

    {
    user ?(
      <button onClick={logout}>logout</button>
    ):(
      <button onClick={login}>login</button>
    )
    }
      
      <Routes>
          <Route index element={<Landing/>}/>
          <Route path="/landing" element={<Landing/>}/>

          <Route element={<ProtectedRoute isAllowed={!!user}/>}>

            <Route path="/home" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>

          </Route>
          <Route path="/analytics" element={
            <ProtectedRoute 
              isAllowed={!!user && user.permissions.includes('analize')}
              redirectTo="/home">

              <Analytics/>
            </ProtectedRoute>
          }/>
          

          
          <Route path="/admin" element={
            <ProtectedRoute 
              isAllowed={!!user && user.roles.includes('admin')}
              redirectTo="/home">
                <Admin/>
            </ProtectedRoute>
          }/>
      </Routes>

    </BrowserRouter>
 )
 
 
}

function Navigation(){
  return <>
  <ul>
    <li><Link to="/landing">landing</Link></li>
    <li><Link to="/home">home</Link></li>
    <li><Link to="/dashboard">dashboard</Link></li>
    <li><Link to="/analytics">analytics</Link></li>
    <li><Link to="/admin">admin</Link></li>
  </ul>
  </>
}