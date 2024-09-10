import './App.css'
import Home from './pages/Home'
import Category from './pages/Category'
import { Link, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <h2>RTK query</h2>
      <Link to={"/"}>Home</Link>
      <Link to={"/category"}>Category</Link>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='/category' element={<Category/>}></Route>
      </Routes>
    </>
  )
}

export default App
