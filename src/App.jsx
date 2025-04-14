import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Component/AppLayout/Layout'
import NotFound from './Pages/NotFound'
import Homepage from './Pages/Homepage'
import About from './Pages/About'
import Confectionaries from './Pages/Confectionaries'
import Merchandize from './Pages/Merchandize'
import ToastContainer from './Component/ToastContainer'
import Contact from './Pages/Contact'


function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/confectionaries' element={<Confectionaries />} />
          <Route path='/product/merchandise' element={<Merchandize />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    
    </ BrowserRouter>
  )
}

export default App
