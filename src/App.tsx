import React from 'react'
import Navbar from './components/Navbar'
import './App.scss'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './service/theme'
import HomePage from './components/HomePage'
import Contact from './components/Contact'
import CertPage from './components/CertPage'
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation()

  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Contact />
      <div className="App">
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/certificate" element={<CertPage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </ChakraProvider>
  )
}

export default App
