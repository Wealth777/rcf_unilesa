import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Events from './pages/Events'
// import Sermons from './pages/Sermons'
// import Testimonies from './pages/Testimonies'
import News from './pages/News'
// import JoinUs from './pages/JoinUs'
import PageNotFound from './pages/PageNotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import WorkerFrom from './pages/WorkerFrom'
import Loader from './components/Loader'
import AdminSignup from './pages/Auth/AdminSignup'
import AdminSignin from './pages/Auth/AdminSignin'
import ForgetPassword from './pages/Auth/ForgetPassword'
import WorkersForm from './pages/WorkersForm'

function App() {

  const [loading, setLoading] = useState(true);
  const location = useLocation();


  useEffect(() => {
    // simulate loading time
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) return <Loader />;

  return (
    // <>

    //   <Navbar />
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/rcf_unilesa' element={<Home />} />
    //     <Route path='/home' element={<Home />} />
    //     <Route path='/aboutus' element={<About />} />
    //     <Route path='/gallery' element={<Gallery />} />
    //     <Route path='/events' element={<Events />} />
    //     {/* <Route path='/sermon' element={<Sermons />} /> */}
    //     {/* <Route path='/testimonies&prayers' element={<Testimonies />} /> */}
    //     <Route path='/news' element={<News />} />
    //     {/* <Route path='/joinus' element={<JoinUs />} /> */}
    //     <Route path='/join.work.force' element={<WorkerFrom />} />
    //     <Route path='*' element={<PageNotFound />} />
    //     {/* <Route path='/l' element={<Loader/>} /> */}
    //   </Routes>
    //   <Footer />

    //   <Route>
    //     <Route path='/AdminSignup' element={<AdminSignup/>} />
    //     <Route path='/AdminSignin' element={<AdminSignin/>} />
    //     <Route path='/AdminFP' element={<ForgetPassword/>} />
    //   </Route>
    // </>

    <>
{location.pathname.startsWith("/admin") ? null : <Navbar />}

<Routes> 
  <Route path="/" element={<Home />} /> 
  <Route path="/rcf_unilesa" element={<Home />} /> 
  <Route path="/home" element={<Home />} /> 
  <Route path="/aboutus" element={<About />} /> 
  <Route path="/gallery" element={<Gallery />} /> 
  <Route path="/events" element={<Events />} /> 
  <Route path="/news" element={<News />} /> 
  <Route path="/join.work.force" element={<WorkersForm />} />
  <Route path="/admin/signup" element={<AdminSignup />} />
  <Route path="/admin/signin" element={<AdminSignin />} />
  <Route path="/admin/forget-password" element={<ForgetPassword />} />

  <Route path="*" element={<PageNotFound />} />

</Routes>

{location.pathname.startsWith("/admin") ? null : <Footer />}
</>
  )
}

export default App
