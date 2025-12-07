import React from 'react'
import classes from './DeleteAccountModale.module.css'

const Modale = ({
    toggleModale,
    children
}) => {
  return (
    <div className={classes['modale']}>
      <div className={classes['modale-content']}>
        {children}
      </div>
    </div>
  )
}

export default Modale
