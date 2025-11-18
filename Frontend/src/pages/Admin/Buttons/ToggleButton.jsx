import React from 'react'
import { CustomButton } from '../../../components/buttons/Custom/CustomButton'
import classes from './ToggleButton.module.css'

const ToggleButton = ({entite, onClick, status, children, style}) => {
  return (
    <CustomButton className={classes['toggle']} style={style}>
      {children}
    </CustomButton>
  )
}

export default ToggleButton
