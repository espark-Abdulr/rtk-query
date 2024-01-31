import './App.css'
import { useGetSingleProductQuery } from './store/productApi'
import { Route, Routes, useLocation } from 'react-router-dom'
import ID from './ID'
import All from './All'
import Search from './Search'

function App() {
  const location = useLocation()
  const { data: singleProduct, isLoading: singleProductLoading } = useGetSingleProductQuery(location.search.split("=")[1])


  return (
    <>
      <Routes>
        <Route path='/' element={<All />} />
        <Route path='/products/:id' element={<ID />} />
        <Route path={`/products/search?q=${name}`} component={<Search />} />
      </Routes>
    </>
  )
}

export default App
