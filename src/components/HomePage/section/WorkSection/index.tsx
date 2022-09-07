import React from 'react'
import styles from './index.module.scss'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { workContents, IWorkContents } from '../../../../service/workContent'
import { Heading, Text, Container, Divider, Link, Code, List, ListIcon, ListItem } from '@chakra-ui/react'
import { Fade } from 'react-awesome-reveal'

const WorkSection = () => {
  const renderWorkContent = workContents.map((items: IWorkContents, index: number) => {
    return (
      <>
        <Fade direction="up" key={index++}>
          <Text fontSize="xl" mt={5} fontWeight="bold" className={styles.text}>
            {items.header}&nbsp;
            <Text color={'black'} as="span">
              @&nbsp;
            </Text>
            <Link color={'black'} href={items.companyUrl} isExternal>
              {items.companyName}
            </Link>
          </Text>
          <Code className={styles.tag}>{items.workDate}</Code>
          <List spacing={3} mt={5} className={styles.list}>
            {items.workDetails.map((works: string, index: number) => {
              return (
                <ListItem key={index++}>
                  <ListIcon as={ChevronRightIcon} color={'black'} />
                  {works}
                </ListItem>
              )
            })}
          </List>
        </Fade>
      </>
    )
  })
  return (
    <section className={styles.workSection}>
      <Container maxW="container.md">
        <div className={styles.header}>
          <Heading as="h2" size="lg" color={'white'}>
            Exper&nbsp;ience
          </Heading>
          <Divider />
        </div>
        <div className={styles.content}>{renderWorkContent}</div>
      </Container>
    </section>
  )
}

export default WorkSection
