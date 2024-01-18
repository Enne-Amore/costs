import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Lista de redes socias */}
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>

        <li>
          <FaInstagram />
        </li>

        <li>
          <FaLinkedin />  
        </li>
      </ul>

      {/* Nome do site */}
      <p className={styles.copy_right}>
        <span>Costs</span> &copy; 2024
      </p>
    </footer>
  )
}

export default Footer