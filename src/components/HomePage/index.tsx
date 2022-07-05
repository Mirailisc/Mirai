import React, { useState } from 'react'
import styles from './index.module.scss'
import {
  Heading,
  Text,
  Container,
  Divider,
  Link,
  Code,
  useColorMode,
  List,
  Box,
  ListIcon,
  ListItem,
  IconButton,
  Image,
  Button,
  Tag,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Profile from '../../images/profile.jpg'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '../../service/transition'
import Mira from '../../images/mira.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { projects } from '../../service/project'
import { Fade, Slide } from 'react-awesome-reveal'
import Avatar_dark from '../../images/Avatar_dark.gif'
import Avatar_light from '../../images/Avatar_light.gif'
import { workContents, IWorkContents, IWorkDetails } from '../../service/workContent'

const HomePage = () => {
  const { colorMode } = useColorMode()
  const [itemsToShow, setItemsToShow] = useState(4)

  const showmore = () => {
    setItemsToShow(projects.length)
  }

  const showless = () => {
    setItemsToShow(4)
  }

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

  const renderWorkContent = workContents.map((items: IWorkContents, index: number) => {
    return (
      <>
        <Fade direction="up" key={index++}>
          <Text fontSize="xl" mt={5} fontWeight="bold">
            {items.header}&nbsp;
            <Text color={colorMode === 'light' ? 'orange.500' : 'blue.200'} as="span">
              @&nbsp;
            </Text>
            <Link color={colorMode === 'light' ? 'orange.500' : 'blue.200'} href={items.companyUrl} isExternal>
              {items.companyName}
            </Link>
          </Text>
          <Code colorScheme={colorMode === 'light' ? 'orange' : 'blue'}>{items.workDate}</Code>
          <List spacing={3} mt={5} className={styles.list}>
            {items.workDetails.map((items: IWorkDetails, index: number) => {
              return (
                <ListItem key={index++}>
                  <ListIcon as={ChevronRightIcon} color={colorMode === 'light' ? 'orange.500' : 'blue.200'} />
                  {items.detail}
                </ListItem>
              )
            })}
          </List>
        </Fade>
      </>
    )
  })

  return (
    <>
      <motion.div transition={pageTransition} variants={pageVariants} initial="initial" animate="in" exit="out">
        <section id="home" className={styles.welcomeSection}>
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
          <Image src={colorMode === 'light' ? Avatar_light : Avatar_dark} alt="avatar" className={styles.avatar2} />
        </section>
        <section id="about" className={styles.aboutSection}>
          <Container maxW="container.lg">
            <div className={styles.header}>
              <Heading as="h2" size="lg" color={colorMode === 'light' ? 'orange.500' : 'blue.200'}>
                About Me
              </Heading>
              <Divider />
            </div>
            <div className={styles.content}>
              <div className={styles.text}>
                <Fade direction="up">
                  <Text mt={5}>
                    Hi, I'm Mark. I'm a senior student at{' '}
                    <Link
                      href="https://www.satit.nu.ac.th/"
                      color={colorMode === 'light' ? 'orange.500' : 'blue.200'}
                      isExternal
                    >
                      Naresuan University Secondary Demonstration School.
                    </Link>{' '}
                    And, I love to create hilarious things with the passion of becoming a developer.
                  </Text>
                  <Text mt={5}>
                    Sometimes I love to watch some anime and play some games. But, I often listen to music and clean my
                    room.
                  </Text>
                  <Text mt={5}>Here are a few things that I'm currently learning and working on : </Text>
                </Fade>
                <Slide>
                  <List spacing={3} mt={5} className={styles.list}>
                    {techAndLanguage.map((items, index: number) => {
                      return (
                        <ListItem key={index++}>
                          <ListIcon as={ChevronRightIcon} color={colorMode === 'light' ? 'orange.500' : 'blue.200'} />
                          {items}
                        </ListItem>
                      )
                    })}
                  </List>
                </Slide>
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
            <div className={styles.content}>{renderWorkContent}</div>
          </Container>
        </section>
        <section className={styles.projectSection}>
          <Container maxW="container.lg">
            <div className={styles.header}>
              <Heading as="h2" size="lg" color={colorMode === 'light' ? 'orange.500' : 'blue.200'}>
                Projects
              </Heading>
              <Divider />
            </div>
            <div className={styles.content}>
              {projects.slice(0, itemsToShow).map((items, index: number) => {
                return (
                  <Fade key={index++} className={styles.fade}>
                    <Box p={5} className={styles.card} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                      <Text mt={2} fontSize="xl" fontWeight="bold">
                        {items.name}
                      </Text>
                      <Text mt={2} fontSize="md">
                        {items.description}
                      </Text>
                      {items.tag.map((tag, index: number) => {
                        return (
                          <Tag mr={2} mt={2} key={index++} colorScheme={tag.scheme}>
                            {tag.name}
                          </Tag>
                        )
                      })}
                      <div className={styles.icon}>
                        <Link isExternal href={items.sourceHref}>
                          <IconButton
                            variant="ghost"
                            colorScheme={colorMode === 'light' ? 'orange' : 'blue'}
                            aria-label="Github"
                            mr={2}
                            icon={<FontAwesomeIcon icon={faGithub} />}
                          />
                        </Link>
                        {items.href ? (
                          <Link isExternal href={items.href}>
                            <IconButton
                              variant="ghost"
                              colorScheme={colorMode === 'light' ? 'orange' : 'blue'}
                              aria-label="Github"
                              icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
                            />
                          </Link>
                        ) : null}
                      </div>
                    </Box>
                  </Fade>
                )
              })}
              <div>
                {itemsToShow === 4 ? (
                  <Button mt={10} onClick={showmore} colorScheme={colorMode === 'light' ? 'orange' : 'blue'}>
                    Show More
                  </Button>
                ) : (
                  <Button mt={10} onClick={showless} colorScheme={colorMode === 'light' ? 'orange' : 'blue'}>
                    Show Less
                  </Button>
                )}
              </div>
            </div>
          </Container>
        </section>
      </motion.div>
      <Text fontSize="sm" color="#939393" my={5} align="center">
        © 2022 Phubordin Poolnai. All Rights Reserved.
      </Text>
    </>
  )
}

export default HomePage
