import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import DashSideNav from './components/DashSideNav'
import DashTopNav from './components/DashTopNav'
import Dashboard from './pages/Dashboards/Dashboard'
import AdminSignup from './pages/Auth/AdminSignup'
import AdminSignin from './pages/Auth/AdminSignin'
import ForgetPassword from './pages/Auth/ForgetPassword'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Events from './pages/Events'
import News from './pages/News'
import WorkersForm from './pages/WorkersForm'
import Settings from './pages/Dashboards/Settings'
import NewsUpload from './pages/Dashboards/NewsUpload'
import ProgramUpload from './pages/Dashboards/ProgramUpload'

function App() {
  const [loading, setLoading] = useState(true)
  const [isExpanded, setIsExpanded] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const isAdminRoute = location.pathname.startsWith('/admin')

  useEffect(() => {
    if (isAdminRoute) {
      setLoading(false)
      return
    }
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [location.pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  if (loading && !isAdminRoute) return <Loader />

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/news" element={<News />} />
        <Route path="/join.work.force" element={<WorkersForm />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/signin" element={<AdminSignin />} />
        <Route path="/admin/forget-password" element={<ForgetPassword />} />

        <Route
          path="/admin/*"
          element={
            <div className="layout">
              <DashSideNav
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
              />

              <div
                className={`main-content ${isExpanded ? '' : 'collapsed'} ${mobileOpen ? 'shifted' : ''}`}
                style={{ transition: 'margin-left 300ms ease' }}
              >
                <DashTopNav
                  isExpanded={isExpanded}
                  setIsExpanded={setIsExpanded}
                  mobileOpen={mobileOpen}
                  setMobileOpen={setMobileOpen}
                />

                <div className="admin-content">
                  <Routes>
                    <Route path="" element={<Dashboard />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="profile" element={<Settings />} />
                    <Route path="upload/news" element={<NewsUpload />} />
                    <Route path="upload/program" element={<ProgramUpload />} />

                    <Route path='*' element={<PageNotFound/>}/>
                  </Routes>
                </div>
              </div>

              <div
                className={`mobile-overlay ${mobileOpen ? 'visible' : ''}`}
                onClick={() => setMobileOpen(false)}
                aria-hidden={!mobileOpen}
              />
            </div>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  )
}

export default App
