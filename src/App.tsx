
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SharedLayout from './components/SharedLayout/SharedLayout'
import CatalogPage from './pages/CatalogPage/CatalogPage'
import { FavoritePage } from './pages/FavoritePage/FavoritePage'
import Home from './pages/Home/Home'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home/>}></Route>
          <Route path='catalog' element={<CatalogPage/>}></Route>
          <Route path='favorite' element={<FavoritePage/>}></Route>
        </Route>  
      </Routes>
    </>
  )
}

export default App
