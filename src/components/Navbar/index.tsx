import React from 'react'
import styles from './index.module.scss'
import Logo_light from '../../images/logo_light.webp'
import Logo_dark from '../../images/logo_dark.webp'
import webRing from '../../images/Webring.svg'
import { Link as ReachLink } from 'react-router-dom'
import { Button, useColorMode, Link, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div className={styles.Navbar}>
      <div className={styles.navBrand}>
        <ReachLink to="/" className={styles.header}>
          <img src={colorMode === 'light' ? Logo_dark : Logo_light} alt="logo" />
        </ReachLink>
        <Link href="https://webring.wonderful.software#mirailisc.me" className={styles.webRing}>
          <img
            src={colorMode === 'light' ? webRing : 'https://webring.wonderful.software/webring.white.svg'}
            width="32"
            height="32"
            alt="วงแหวนเว็บ"
          />
        </Link>
      </div>
      <div className={styles.links}>
        <Link as={ReachLink} className={styles.Link} to="/certificate">
          certificates
        </Link>
        <Link className={styles.Link} href="https://github.com/Mirailisc/Mirai" isExternal>
          source
        </Link>
        <Button
          className={styles.modeToggler}
          colorScheme={colorMode === 'light' ? 'orange' : 'blue'}
          onClick={toggleColorMode}
        >
          {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
        </Button>
        <Menu>
          <MenuButton as={Button} variant="outline" className={styles.toggler}>
            <HamburgerIcon />
          </MenuButton>
          <MenuList>
            <MenuItem as={ReachLink} to="/certificate">
              Certificates
            </MenuItem>
            <MenuItem as={Link} href="https://github.com/Mirailisc/Mirai" isExternal>
              Source
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  )
}

export default Navbar
