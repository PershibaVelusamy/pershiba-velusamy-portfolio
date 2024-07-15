// SideBar.js
import React from 'react';
import styles from './sideBar.module.scss'
const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.titleSpace}>
      
        <div className={`${styles.rotateclass} ${styles.addSelect}`}>About</div>
        <div  className={styles.rotateclass}>Projects</div>
        <div  className={styles.rotateclass}>Exp.</div>
       
        <div  className={styles.rotateclass}>Contact</div>
      </div>
    </div>
  );
};



export default SideBar;
