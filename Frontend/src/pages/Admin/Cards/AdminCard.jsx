import React from 'react'
import classes from './AdminCard.module.css'

const AdminCard = ({
    children
}) => {
  return (
    <article className={classes['card']}>
      {children}
    </article>
  )
}

export default AdminCard
