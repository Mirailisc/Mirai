import React from 'react'
import styles from './index.module.scss'
import Logo_light from '../../images/logo_light.svg'
import Logo_dark from '../../images/logo_dark.svg'
import { Link as ReachLink } from 'react-router-dom'
import { Button, useColorMode, Link, Menu, MenuButton, MenuList, MenuItem, Heading } from '@chakra-ui/react'
import { SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div className={styles.Navbar}>
      <ReachLink to="/" className={styles.header}>
        <img src={colorMode === 'light' ? Logo_dark : Logo_light} alt="logo" />
        <Heading as="h1" >Mirailisc</Heading>
      </ReachLink>
      <div className={styles.links}>
        <Link as={ReachLink} className={styles.Link} to="/certificate">
          certificate
        </Link>
        <Link className={styles.Link} href="https://github.com/Mirailisc/Mirai" isExternal>
          source
        </Link>
        <Button className={styles.modeToggler} colorScheme={colorMode === 'light' ? 'orange' : 'blue'} onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>
        <Menu>
          <MenuButton as={Button} variant="outline" className={styles.toggler}>
            <HamburgerIcon/>
          </MenuButton>
          <MenuList>
            <MenuItem as={ReachLink} to="/certificate">
              Certificates
            </MenuItem>
            <MenuItem as={Link}  href="https://github.com/Mirailisc/Mirai" isExternal>
              Source
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  )
}

export default Navbar
