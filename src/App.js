import './App.css'
import Login from './Auth/Login'
import Portal from './admin/Portal'
import Home from './pages/home/Home'
import Table from './pages/table/Table'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bookadd from './pages/add/Bookadd'
import Update from './pages/update/Update'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />}>
          <Route path="home" element={<Home />} />
          <Route path="table" element={<Table />} />
          <Route path="bookadd" element={<Bookadd />} />
          <Route path="update" element={<Update />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
