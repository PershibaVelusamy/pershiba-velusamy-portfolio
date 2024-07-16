import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import SideBar from '../../Components/SideBar/SideBar'
import styles from './layout.module.scss'
import Hero from '../Hero/Hero'
import Contact from '../Contact/Contact'
const Layout = () => {
  return (
    <div>
      <NavBar />
      <SideBar />
      <div className={styles.mainContent}>
      <Hero/>
      <Contact />
      </div>
    </div>
  )
}



export default Layout
