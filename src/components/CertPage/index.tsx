import React from 'react'
import styles from './index.module.scss'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '../../service/transition'
import Cert_1 from '../../images/cert_1.png'
import Cert_2 from '../../images/cert_2.png' 
import Cert_3 from '../../images/cert_3.png' 
import Cert_4 from '../../images/cert_4.png' 

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
            <div className={styles.image}>
                <img src={Cert_1} alt="cert" />
            </div>
            <div className={styles.image}>
                <img src={Cert_2} alt="cert" />
            </div>
            <div className={styles.image}>
                <img src={Cert_3} alt="cert" />
            </div>
            <div className={styles.image}>
                <img src={Cert_4} alt="cert" />
            </div>
        </div>
      </motion.div>
    </>
  )
}

export default CertPage
