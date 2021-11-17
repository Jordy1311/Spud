import React from 'react'
import styles from './Nav.module.css'

const Nav = ({ left, middle, right }) => {
  let l, r

  if (left === 'back') {
    l = `<--`
  } else if (left === 'profile') {
    l = `this is profile`
  } else {
    l = ''
  }

  if (right === 'options') {
    r = `...`
  } else if (right === 'new') {
    r = `✏️`
  } else {
    r = ''
  }


  return (
    <nav>
      <div className={styles.left}>{l}</div>
      <div className={styles.middle}>{middle}</div>
      <div className={styles.right}>{r}</div>
    </nav>
  )
}

export default Nav
