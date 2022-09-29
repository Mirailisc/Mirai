import React from 'react'
import styles from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { IconButton, Link } from '@chakra-ui/react'
const Contact = () => {
  return (
    <div className={styles.Contact}>
      <code>Contact Me</code>
      <div className={styles.contactList}>
        <Link isExternal href="https://github.com/Mirailisc">
          <IconButton
            variant="ghost"
            colorScheme={'blue'}
            aria-label="Github"
            icon={<FontAwesomeIcon icon={faGithub} />}
          />
        </Link>
        <Link isExternal href="https://www.facebook.com/MirailiscLm/">
          <IconButton
            variant="ghost"
            colorScheme={'blue'}
            aria-label="Facebook"
            icon={<FontAwesomeIcon icon={faFacebook} />}
          />
        </Link>
        <Link isExternal href="https://twitter.com/Mirailisc">
          <IconButton
            variant="ghost"
            colorScheme={'blue'}
            aria-label="Twitter"
            icon={<FontAwesomeIcon icon={faTwitter} />}
          />
        </Link>
        <Link isExternal href="https://www.linkedin.com/in/phubordin/">
          <IconButton
            variant="ghost"
            colorScheme={'blue'}
            aria-label="LinkedIn"
            icon={<FontAwesomeIcon icon={faLinkedin} />}
          />
        </Link>
        <Link isExternal href="mailto: phubordin@mirailisc.me">
          <IconButton
            variant="ghost"
            colorScheme={'blue'}
            aria-label="Email"
            icon={<FontAwesomeIcon icon={faEnvelope} />}
          />
        </Link>
      </div>
    </div>
  )
}

export default Contact
