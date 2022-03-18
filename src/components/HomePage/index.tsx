import React from 'react'
import styles from './index.module.scss'
import { Heading, Text, Container, Divider, Link, Code, useColorMode, List, ListIcon, ListItem } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Profile from '../../images/profile.jpg'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '../../service/transition'
import Mira from '../../images/mira.png'

const HomePage = () => {
  const { colorMode } = useColorMode()

  const techAndLanguage = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'React Native',
    'Tensorflow',
    'Node.js',
    'Python',
    'Arduino',
  ]

  return (
    <>
      <motion.div transition={pageTransition} variants={pageVariants} initial="initial" animate="in" exit="out">
        <section className={styles.welcomeSection}>
          <img src={Mira} alt="avatar" className={styles.avatar} />
          <div className={styles.text}>
            <Code colorScheme={colorMode === 'light' ? 'orange' : 'blue'}>Hi, My name is</Code>
            <Heading as="h1" size="2xl">
              Phubordin Poolnai
            </Heading>
            <Text fontSize="xl" color={colorMode === 'light' ? 'orange.500' : 'blue.200'}>
              Frontend Developer / Student / Meme Lord
            </Text>
          </div>
          <img src={Mira} alt="avatar" className={styles.avatar2} />
        </section>
      </motion.div>
      <section className={styles.aboutSection}>
        <Container maxW="container.lg">
          <div className={styles.header}>
            <Heading as="h2" size="lg" color={colorMode === 'light' ? 'orange.500' : 'blue.200'}>
              About Me
            </Heading>
            <Divider />
          </div>
          <div className={styles.content}>
            <div className={styles.text}>
              <Text mt={5}>
                Hi, My name is Mark. I'm a senior student at{' '}
                <Link
                  href="https://www.satit.nu.ac.th/"
                  color={colorMode === 'light' ? 'orange.500' : 'blue.200'}
                  isExternal
                >
                  Naresuan University Secondary Demonstration School.
                </Link>{' '}
                I love to create hilarious things with the passion of becoming a developer.
              </Text>
              <Text mt={5}>
                Sometimes I love to watch some anime and play some games. But, I often listen to music and clean my
                room.
              </Text>
              <Text mt={5}>Here are a few things that I'm currently learning and working on : </Text>
              <List spacing={3} mt={5} className={styles.list}>
                {techAndLanguage.map((items, index) => {
                  return (
                    <ListItem key={index++}>
                      <ListIcon as={ChevronRightIcon} color={colorMode === 'light' ? 'orange.500' : 'blue.200'} />
                      {items}
                    </ListItem>
                  )
                })}
              </List>
            </div>
            <img className={styles.profile} src={Profile} alt="profile" />
          </div>
        </Container>
      </section>
      <section className={styles.workSection}>
        <Container maxW="container.md">
          <div className={styles.header}>
            <Heading as="h2" size="lg" color={colorMode === 'light' ? 'orange.500' : 'blue.200'}>
              Experience
            </Heading>
            <Divider />
          </div>
          <div className={styles.content}>
            <Text fontSize="xl" mt={5}>
              <b>
                Intern Front-end Developer{' '}
                <Text color={colorMode === 'light' ? 'orange.500' : 'blue.200'} as="span">
                  @
                </Text>{' '}
                <Link color={colorMode === 'light' ? 'orange.500' : 'blue.200'} href="https://www.datability.info/" isExternal>
                  Datability
                </Link>
              </b>
            </Text>
            <Code colorScheme={colorMode === 'light' ? 'orange' : 'blue'}>Jul 2021 - Oct 2021</Code>
            <List spacing={3} mt={5} className={styles.list}>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color={colorMode === 'light' ? 'orange.500' : 'blue.200'} />
                My job is to develop a CRM website for 3 Small and Medium-sized Enterprise companies with seniors in the
                company
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} color={colorMode === 'light' ? 'orange.500' : 'blue.200'} />
                I usually work with a few technologies like React, TypeScript, GraphQL, and Sass.
              </ListItem>
            </List>
          </div>
        </Container>
      </section>
    </>
  )
}

export default HomePage
