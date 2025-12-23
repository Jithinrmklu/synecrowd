import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import Login from './components/Login'
import ProfileForm from './components/ProfileForm'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Career from './components/Career'
import Events from './components/Events'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}

const AppRoutes = () => {
  const { user, profile } = useAuth()

  return (
    <Routes>
      <Route path="/login" element={!user ? <Login /> : <Navigate to={profile ? "/home" : "/profile"} replace />} />
      
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            {profile ? <Navigate to="/home" replace /> : <ProfileForm />}
          </PrivateRoute>
        }
      />
      
      <Route
        path="/home"
        element={
          <PrivateRoute>
            {!profile ? <Navigate to="/profile" replace /> : <Home />}
          </PrivateRoute>
        }
      />
      
      <Route
        path="/about"
        element={
          <PrivateRoute>
            {!profile ? <Navigate to="/profile" replace /> : <AboutUs />}
          </PrivateRoute>
        }
      />
      
      <Route
        path="/contact"
        element={
          <PrivateRoute>
            {!profile ? <Navigate to="/profile" replace /> : <ContactUs />}
          </PrivateRoute>
        }
      />
      
      <Route
        path="/career"
        element={
          <PrivateRoute>
            {!profile ? <Navigate to="/profile" replace /> : <Career />}
          </PrivateRoute>
        }
      />
      
      <Route
        path="/events"
        element={
          <PrivateRoute>
            {!profile ? <Navigate to="/profile" replace /> : <Events />}
          </PrivateRoute>
        }
      />
      
      <Route path="/" element={<Navigate to={user ? (profile ? "/home" : "/profile") : "/login"} replace />} />
    </Routes>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  )
}

export default App

