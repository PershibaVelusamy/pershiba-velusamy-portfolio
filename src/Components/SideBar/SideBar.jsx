// SideBar.js
import React from 'react';
import styles from './sideBar.module.scss'
const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.titleSpace}>
      
        <div className={`${styles.rotateclass} ${styles.addSelect}`}><a href='#about'>About</a></div>
        <div  className={styles.rotateclass}><a href='#project'>Projects</a></div>
        <div  className={styles.rotateclass}><a href='#experience'>Exp.</a></div>
       
        <div  className={styles.rotateclass}><a href='#contact'>Contact</a></div>
      </div>
    </div>
  );
};



export default SideBar;
