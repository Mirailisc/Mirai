import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import './App.scss'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './service/theme'
import HomePage from './components/HomePage'
import Contact from './components/Contact'
import CertPage from './components/CertPage'
import { AnimatePresence } from 'framer-motion'
import Logo_dark from './images/logo_dark.svg'
import Logo_light from './images/logo_light.svg'
import Mascot from './images/mira.png'
import Profile from './images/profile.jpg'
import Avatar_dark from './images/Avatar_dark.gif'
import Avatar_light from './images/Avatar_light.gif'
import Cert_1 from './images/cert_1.png'
import Cert_2 from './images/cert_2.png'
import Cert_3 from './images/cert_3.png'
import Cert_4 from './images/cert_4.png'
import Cert_5 from './images/cert_5.png'
import Cert_6 from './images/cert_6.png'
import Cert_7 from './images/cert_7.png'
import Cert_8 from './images/cert_8.png'

const imgs: string[] = [Logo_dark, Logo_light, Mascot, Profile, Avatar_dark, Avatar_light]

const certificates: string[] = [Cert_1, Cert_2, Cert_3, Cert_4, Cert_5, Cert_6, Cert_7, Cert_8]

function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  console.log(loading)

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

      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }

    preLoadImage().catch(console.error)
  }, [])

  return (
    <ChakraProvider theme={theme}>
      {loading ? (
        <div className="loading">
          <img src={Logo_light} alt="logo" />
        </div>
      ) : (
        <>
          <div className="App">
            <Navbar />
            <Contact />
            <AnimatePresence exitBeforeEnter>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/certificate" element={<CertPage pictures={certificates} />} />
              </Routes>
            </AnimatePresence>
          </div>
        </>
      )}
    </ChakraProvider>
  )
}

export default App
