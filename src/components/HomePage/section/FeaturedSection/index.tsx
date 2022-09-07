import React from 'react'
import styles from './index.module.scss'
import { Container, Heading, useColorMode, Text, Link, Button } from '@chakra-ui/react'

const FeaturedSection = ({ pictures }: any) => {
  const { colorMode } = useColorMode()
  return (
    <section className={styles.featuredSection}>
      <Container maxW="container.xl">
        <Heading as="h2" size="lg" color={colorMode === 'light' ? 'blue.500' : 'blue.200'}>
          Featured Project
        </Heading>
        <div className={styles.content}>
          <img className={styles.project} src={pictures[1]} alt="project" />
          <div className={styles.desc}>
            <Heading as="h3" className={styles.header} size="lg" color={'black'}>
              Mira&nbsp;Drive
            </Heading>
            <Text mt={5}>MiraDrive is a personal cloud service powered by Nextcloud with Docker.</Text>
            <Text mt={5}>
              I made this application because I wanted to make a self-hosted cloud service for myself and my friends to
              use.
            </Text>
            <Link
              className={styles.link}
              style={{ textDecoration: 'none' }}
              href="https://cloud.mirailisc.me"
              target="_blank"
              rel="noopener"
            >
              <Button mt={20} colorScheme={'blue'}>
                View
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FeaturedSection
