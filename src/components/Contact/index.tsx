import React from 'react'
import styles from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { IconButton, Link, useColorMode } from '@chakra-ui/react'
const Contact = () => {
    const { colorMode } = useColorMode()

    return (
        <div className={styles.Contact}>
            <Link isExternal href="https://github.com/Mirailisc">
                <IconButton variant='ghost' colorScheme={colorMode === 'light' ? 'orange' : 'blue'} aria-label='Github' icon={<FontAwesomeIcon icon={faGithub} />} />
            </Link>
            <Link isExternal href="https://www.facebook.com/MirailiscLm/">
                <IconButton variant='ghost' colorScheme={colorMode === 'light' ? 'orange' : 'blue'} aria-label='Facebook' icon={<FontAwesomeIcon icon={faFacebook} />} />
            </Link>
            <Link isExternal href="https://twitter.com/Mirailisc">
                <IconButton variant='ghost' colorScheme={colorMode === 'light' ? 'orange' : 'blue'} aria-label='Twitter' icon={<FontAwesomeIcon icon={faTwitter} />} />
            </Link>
            <Link isExternal href="https://www.linkedin.com/in/phubordin-poolnai-31480a214/">
                <IconButton variant='ghost' colorScheme={colorMode === 'light' ? 'orange' : 'blue'} aria-label='LinkedIn' icon={<FontAwesomeIcon icon={faLinkedin} />} />
            </Link>
            <Link isExternal href="mailto: mirailisclm@gmail.com">
                <IconButton variant='ghost' colorScheme={colorMode === 'light' ? 'orange' : 'blue'} aria-label='LinkedIn' icon={<FontAwesomeIcon icon={faEnvelope} />} />
            </Link>
        </div>
    )
}

export default Contact