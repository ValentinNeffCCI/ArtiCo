import React from 'react'
import { CustomButton } from '../../../components/buttons/Custom/CustomButton'
import classes from './ToggleButton.module.css'

const ToggleButton = ({entite, onClick, children, style}) => {
    const handleClick = () => {
        onClick(entite);
    }
  return (
    <CustomButton className={classes['toggle']} style={style} clickAction={handleClick}>
      {children}
    </CustomButton>
  )
}

export default ToggleButton
