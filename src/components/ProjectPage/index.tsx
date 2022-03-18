import React from 'react'
import styles from './index.module.scss'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '../../service/transition'
import { Container, Heading } from '@chakra-ui/react'

const ProjectPage = () => {
  return (
    <motion.div transition={pageTransition} variants={pageVariants} initial="initial" animate="in" exit="out">
      <Container maxW="container.md">
        <Heading as="h3" size="md">Projects</Heading>
      </Container>
    </motion.div>
  )
}

export default ProjectPage
