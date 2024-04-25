import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer () {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href="https://github.com/caiomac1" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                </li>

                <li>
                    <a href="https://www.instagram.com/caiomac1/" target="_blank" rel="noreferrer">
                        <FaInstagram />
                    </a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/caiomac1/" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                </li>
            </ul>

            <p className={styles.copyright}>
                <span> Costs </span> &copy; 2024</p>

        </footer>
    )
}

export default Footer