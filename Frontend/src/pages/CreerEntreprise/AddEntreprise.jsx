import React from 'react'
import CreateEntreprise from '../../components/forms/CreateEntreprise/CreateEntreprise'
import style from './AddEntreprise.module.css'

const AddEntreprise = () => {
  return (
    <main className={style['main']}>
      <h1 className='itim p-2 w-60 mx-auto'>Créer mon entreprise</h1>
      <CreateEntreprise/>
    </main>
  )
}

export default AddEntreprise
