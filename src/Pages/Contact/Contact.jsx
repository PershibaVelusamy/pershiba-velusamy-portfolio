import React from 'react'
import styles from './Contact.module.scss'
import { Icon } from '@iconify/react/dist/iconify.js'
const Contact = () => {
  return (
    <div className={styles.contactWarpper} id='contact'>
      <div className={styles.subWrapper}>
        <h1 className={styles.heroTitle}>Contact<span className={styles.greenDot}>.</span></h1>

        <p className={styles.paraTitle}>Shoot me an email if you want to connect! You can also find me on <span className={styles.addGreentext}>Linkedin</span> or <span  className={styles.addGreentext} >WhatsApp</span> , if that's more your speed.</p>
        <div className={styles.mailCenter}> <Icon icon="gridicons:mail" width="24" height="24" className={styles.mailIcon} /> <span className={styles.mailID}>pershibav@gmail.com </span> </div>
      </div>

    </div>
  )
}

export default Contact
