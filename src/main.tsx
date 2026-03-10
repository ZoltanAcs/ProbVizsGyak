import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllPizza from './pages/AllPizza'
import Cart from './pages/Cart'
import EditPizza from './pages/EditPizza'
import OnePizza from './pages/OnePizza'
import Login from './pages/Login'
import NotFound from './pages/error/NotFound'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<BrowserRouter>
<Routes>
  <Route path='/' element={<AllPizza/>}/>
  <Route path='/one-pizza' element={<OnePizza/>}/>
  <Route path='/edit-pizza' element={<EditPizza/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/kosar' element={<Cart/>}/>
  <Route path='*' element={<NotFound/>}/>
</Routes>
</BrowserRouter>
  </StrictMode>,
)
