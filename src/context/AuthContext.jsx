import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for stored auth data
    const storedUser = localStorage.getItem('user')
    const storedProfile = localStorage.getItem('profile')
    
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile))
    }
    setLoading(false)
  }, [])

  const login = (phoneNumber) => {
    const userData = { phoneNumber, loggedIn: true }
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    setProfile(null)
    localStorage.removeItem('user')
    localStorage.removeItem('profile')
  }

  const saveProfile = (profileData) => {
    setProfile(profileData)
    localStorage.setItem('profile', JSON.stringify(profileData))
  }

  const updateProfile = (updatedData) => {
    const newProfile = { ...profile, ...updatedData }
    setProfile(newProfile)
    localStorage.setItem('profile', JSON.stringify(newProfile))
  }

  const value = {
    user,
    profile,
    login,
    logout,
    saveProfile,
    updateProfile,
    loading
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

