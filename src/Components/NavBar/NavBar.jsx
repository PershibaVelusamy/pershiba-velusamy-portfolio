// NavBar.js
import React from 'react';
import styles from './navBar.module.scss'
import { Icon } from '@iconify/react';
const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.subWrapper}>

        <h1 className={styles.h1Color}>P<span className={styles.dotColor}>.</span></h1>
        <div className={styles.spanWrapper}>
        <div className={styles.iconArrangement}>
          <Icon icon="mdi:linkedin" width="24" height="24"  className={styles.iconColor} />
          <Icon icon="mdi:github" width="24" height="24"  className={styles.iconColor}  />
          <Icon icon="ant-design:code-sandbox-circle-filled" width="24" height="24" className={styles.iconColor}  />
        </div>
        <button className={styles.myResumeButton}>My resume</button>
        </div>
       
      </div>


      {/* Add your nav links here */}
    </div>
  );
};



export default NavBar;
