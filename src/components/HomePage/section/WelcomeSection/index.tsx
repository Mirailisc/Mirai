import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import styles from './index.module.scss'
import { Heading, Text, Code, useColorMode } from '@chakra-ui/react'

const WelcomeSection = (): JSX.Element => {
  const { colorMode } = useColorMode()

  return (
    <section id="home" className={styles.welcomeSection}>
      <div className={styles.text}>
        <Code colorScheme={'blue'}>Hi, My name is</Code>
        <Heading as="h1" size="2xl" color={colorMode === 'light' ? 'black' : 'white'}>
          <Typewriter
            loop
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={100}
            delaySpeed={1000}
            words={['Phubordin Poolnai', 'Mirailisc', 'Mira', 'Mark']}
          />
        </Heading>
        <Text fontSize="xl" color={colorMode === 'light' ? 'blue.500' : 'blue.200'}>
          Developer - Designer - Student
        </Text>
      </div>
      <div className={styles.avatar}></div>
    </section>
  )
}

export default WelcomeSection
