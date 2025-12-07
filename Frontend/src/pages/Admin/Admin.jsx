import classes from './Admin.module.css'
import { useAuth } from '../../contexts/UserContext'
import EntrepriseTableau from '../../components/array/entrepriseList/EntrepriseTableau';
import UserTableau from '../../components/array/userList/UserTableau';
import { ToastContainer } from 'react-toastify';

const Admin = () => {
  const {user} = useAuth();

  return (
    <main className={classes['dashboard']}>
      <ToastContainer />
      <h1>Bienvenue {user.name}</h1>
      <div className={classes['tableaux']}>
      <UserTableau limit={5}/>
      <EntrepriseTableau limit={5}/>
      </div>
    </main>
  )
}

export default Admin
