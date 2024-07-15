import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import SideBar from '../../Components/SideBar/SideBar'
import styles from './layout.module.scss'
const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <SideBar />
      <div className={styles.mainContent}>
        {children}
      </div>
    </div>
  )
}



export default Layout
