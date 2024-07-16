import React from 'react'
import styles from './hero.module.scss'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <div className={styles.heroWrapper} id='hero'>
      <div className={styles.subWrapper}>
        <h1 className={styles.heroTitle}>Hey, I'm Pershiba<span className={styles.greenDot}>.</span></h1>
        <h2 className={styles.h2Title}>I'm a <span className={styles.greenDot}>Full Stack Developer </span></h2>
        <p className={styles.paraTitle}>I've spent the last 4 years building and scaling software for some pretty cool companies using React and node. Let's connect!</p>
        <motion.button className={styles.ContactButton}>Contact me</motion.button>
      </div>

    </div>
  )
}

export default Hero
