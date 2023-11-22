import Main from './componets/main/main'
import Tienda from './componets/tienda/Tienda'
import WirelessHeadphones from './componets/sections/WirelessHeadphones'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/tienda' element={<Tienda />} />
          <Route path='/wirelessHeadphone' element={<WirelessHeadphones />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
