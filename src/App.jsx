import HomePage from './pages/homePage'
import WisataPage from './pages/wisataPage'
import Wisata2Page from './pages/wisata2Page'
import MapPage from './pages/mapPage'
import ProfilPage from './pages/profilPage'
import BeritaPage from './pages/beritaPages'
import ArtikelPage from './pages/artikelPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Foot from './components/Foot'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {    

    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/wisata' element={<WisataPage />} />
                <Route path='/wisata2' element={<Wisata2Page />} />
                <Route path='/peta' element={<MapPage />} />
                <Route path='/profil' element={<ProfilPage />} />
                <Route path='/berita' element={<BeritaPage />} /> 
                <Route path='/berita/artikel/:id'element={<ArtikelPage />} />                               
            </Routes>
            <Footer />
            <Foot />
        </Router>
    )
}
export default App