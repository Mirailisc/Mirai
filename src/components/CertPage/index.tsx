import React from 'react'
import styles from './index.module.scss'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '../../service/transition'
import { Text } from '@chakra-ui/react'

const CertPage = ({ pictures }: any) => {
  return (
    <>
      <motion.div transition={pageTransition} variants={pageVariants} initial="initial" animate="in" exit="out">
        <div className={styles.certificates}>
          {pictures.map((items: any, index: number) => {
            return (
              <div className={styles.image} key={index++}>
                <img src={items} alt="cert" />
              </div>
            )
          })}
        </div>
      </motion.div>
      <Text fontSize="sm" color="#939393" my={5} align="center">
        © 2022 Phubordin Poolnai. All Rights Reserved.
      </Text>
    </>
  )
}

export default CertPage
