import React from 'react'
import { Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '../../service/transition'

import WelcomeSection from './section/WelcomeSection'
import AboutSection from './section/AboutSection'
import WorkSection from './section/WorkSection'
import ProjectSection from './section/ProjectSection'
import FeaturedSection from './section/FeaturedSection'

const HomePage = ({ pictures }: any) => {
  return (
    <>
      <motion.div transition={pageTransition} variants={pageVariants} initial="initial" animate="in" exit="out">
        <WelcomeSection />
        <AboutSection pictures={pictures} />
        <WorkSection />
        <FeaturedSection pictures={pictures} />
        <ProjectSection />
      </motion.div>
      <Text fontSize="sm" color="#939393" my={5} align="center">
        © 2022 Phubordin Poolnai. All Rights Reserved.
      </Text>
    </>
  )
}

export default HomePage
