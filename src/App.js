import ItemListContainer from 'pages/ItemListContainer'
import NavBar from 'components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from 'pages/NotFound'
import Cart from 'pages/Cart'
import ItemDetailContainer from 'pages/ItemDetailContainer'

// useState

function App () {
  return (
    <BrowserRouter>
      <NavBar />
      <section className='max-w-5xl mx-auto pt-[100px]'>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='category/:categoryId' element={<ItemListContainer />} />
          <Route path='item/:id' element={<ItemDetailContainer />} />
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </section>
    </BrowserRouter>
  )
}

export default App
