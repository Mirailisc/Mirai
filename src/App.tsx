import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import './App.scss'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './service/theme'
import HomePage from './components/HomePage'
import Contact from './components/Contact'
import CertPage from './components/CertPage'
import { AnimatePresence } from 'framer-motion'

// Images
import { imgs, certificates } from './components/_importImage'

function App() {
  const location = useLocation()

  const cacheImages = async (srcArray: any) => {
    const promises = await srcArray.map((src: any) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = src
        img.onload = () => resolve(img)
        img.onerror = () => reject(img)
      })
    })
    await Promise.all(promises)
  }

  useEffect(() => {
    const preLoadImage = async () => {
      await cacheImages(imgs)
      await cacheImages(certificates)
    }

    preLoadImage().catch(console.error)
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <>
        <div className="App">
          <Navbar />
          <Contact />
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage pictures={imgs} />} />
              <Route path="/certificate" element={<CertPage pictures={certificates} />} />
            </Routes>
          </AnimatePresence>
        </div>
      </>
    </ChakraProvider>
  )
}

export default App
