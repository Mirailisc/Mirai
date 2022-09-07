import React from 'react'
import styles from './index.module.scss'
import { Heading, Text, Container, Divider, useColorMode, List, ListIcon, ListItem } from '@chakra-ui/react'
import { techAndLanguage } from '../../../../service/techAndLanguage'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Fade, Slide } from 'react-awesome-reveal'

const AboutSection = ({ pictures }: any) => {
  const { colorMode } = useColorMode()
  return (
    <section id="about" className={styles.aboutSection}>
      <Container maxW="container.lg">
        <div className={styles.header}>
          <Heading as="h2" size="lg" color={colorMode === 'light' ? 'blue.500' : 'blue.200'}>
            About Me
          </Heading>
          <Divider />
        </div>
        <div className={styles.content}>
          <div className={styles.text}>
            <Fade direction="up">
              <Text mt={5}>
                Hi, I&apos;m Mark. I&apos;m a senior high school student based in Thailand, and I love to create funny
                things with the desire to become a developer.
              </Text>
              <Text mt={5}>
                Sometimes I love to watch some anime and play some games. But, I often listen to music and read some
                blogs.
              </Text>
              <Text mt={5}>Here are a few things that I&apos;m currently learning and working on</Text>
            </Fade>
            <Slide>
              <List spacing={3} mt={5} className={styles.list}>
                {techAndLanguage.map((items, index: number) => {
                  return (
                    <ListItem key={index++}>
                      <ListIcon as={ChevronRightIcon} color={colorMode === 'light' ? 'blue.500' : 'blue.200'} />
                      {items}
                    </ListItem>
                  )
                })}
              </List>
            </Slide>
          </div>
          <img className={styles.profile} src={pictures[0]} alt="profile" />
        </div>
      </Container>
    </section>
  )
}

export default AboutSection
