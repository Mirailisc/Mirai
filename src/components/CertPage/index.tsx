import React from 'react'
import styles from './index.module.scss'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '../../service/transition'
import Cert_1 from '../../images/cert_1.png'
import Cert_2 from '../../images/cert_2.png' 
import Cert_3 from '../../images/cert_3.png' 
import Cert_4 from '../../images/cert_4.png' 
import Cert_5 from '../../images/cert_5.png'
import Cert_6 from '../../images/cert_6.png'
import Cert_7 from '../../images/cert_7.png'

const certArray = [Cert_1, Cert_2, Cert_3, Cert_4, Cert_5, Cert_6, Cert_7]

const CertPage = () => {
  return (
    <>
      <motion.div
        transition={pageTransition}
        variants={pageVariants}
        initial="initial"
        animate="in"
        exit="out"
      >
        <div className={styles.certificates}>
          {certArray.map((items: any, index: number) => {
            return (
              <div className={styles.image} key={index++}>
                <img src={items} alt="cert" />
              </div>
            )
          })}
        </div>
      </motion.div>
    </>
  )
}

export default CertPage
