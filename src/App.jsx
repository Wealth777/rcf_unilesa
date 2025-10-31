import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Events from './pages/Events'
import Sermons from './pages/Sermons'
import Testimonies from './pages/Testimonies'
import News from './pages/News'
import JoinUs from './pages/JoinUs'
import PageNotFound from './pages/PageNotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WorkerFrom from './pages/WorkerFrom'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/aboutus' element={<About/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/sermon' element={<Sermons/>} />
        <Route path='/testimonies&prayers' element={<Testimonies/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/joinus' element={<JoinUs/>} />
        <Route path='/join.work.force' element={<WorkerFrom/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
