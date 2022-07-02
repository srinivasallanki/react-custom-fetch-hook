import Header from './component/Header'
import UsersList from './component/users/UsersList'
import Gallery from './component/gallery/Gallery'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<UsersList />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
