import { Eye, Trash2 } from 'lucide-react'
import { CustomButton } from '../../../buttons/Custom/CustomButton'
import classes from './AdminEntrepriseCard.module.css'
import { useNavigate } from 'react-router-dom'

const AdminEntrepriseCard = ({
    entite,
    onDelete
}) => {
  const navigation = useNavigate();

  const visitPage = ()=>{
    navigation('/artisan/'+entite.id)
  }

  return (
    <article className={classes['entreprise-card']}>
      <div className='flex gap-2 w-75'>
        <p>{entite.name}</p>
        <p>
          {entite.email ? entite.email : "Pas d'email renseigné"}
        </p>
      </div>
      <div className={classes['button-section']}>
        <CustomButton clickAction={visitPage} className={classes['button']} style={{
          "--bg-color": "var(--secondary)"
        }}>
          <Eye/>
          <span>
          Voir
          </span>
        </CustomButton>
        <CustomButton clickAction={()=>onDelete(entite)} className={classes['button']} style={{
          "--bg-color" : "red",
          "--color" : "white"
        }}>
          <span>
          <Trash2/>
          </span>
        </CustomButton>
      </div>
    </article>
  )
}

export default AdminEntrepriseCard
