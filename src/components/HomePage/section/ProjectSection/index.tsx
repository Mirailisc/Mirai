import React, { useState } from 'react'
import styles from './index.module.scss'
import { Heading, Text, Container, Divider, Link, useColorMode, Box, IconButton, Button, Tag } from '@chakra-ui/react'
import { Fade } from 'react-awesome-reveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { projects } from '../../../../service/project'

const ProjectSection = () => {
  const [itemsToShow, setItemsToShow] = useState(4)
  const { colorMode } = useColorMode()

  const showmore = () => {
    setItemsToShow(projects.length)
  }

  const showless = () => {
    setItemsToShow(4)
  }

  return (
    <section className={styles.projectSection}>
      <Container maxW="container.lg">
        <div className={styles.header}>
          <Heading as="h2" size="lg" color={colorMode === 'light' ? 'blue.500' : 'blue.200'}>
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
                        colorScheme={'blue'}
                        aria-label="Github"
                        mr={2}
                        icon={<FontAwesomeIcon icon={faGithub} />}
                      />
                    </Link>
                    {items.href ? (
                      <Link isExternal href={items.href}>
                        <IconButton
                          variant="ghost"
                          colorScheme={'blue'}
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
              <Button mt={10} onClick={showmore} colorScheme={'blue'}>
                Show More
              </Button>
            ) : (
              <Button mt={10} onClick={showless} colorScheme={'blue'}>
                Show Less
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ProjectSection
