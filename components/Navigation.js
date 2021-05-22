import React from 'react';
import Logo from './Logo';
import A from './a';

import styles from './Navigation.module.css';

function Navigation({ ...props }) {
  return (
    <div className={styles.Navigation}>
      <div className={styles.leftSide}>
        <Logo />
      </div>
      <div className={styles.rightSide}>
        <A className={styles.Link}>About</A>
        <A className={styles.Link}>Projects</A>
        <A className={styles.Link}>Contact</A>
      </div>
    </div>
  );
}

export default Navigation;