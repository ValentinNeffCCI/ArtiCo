import {HowTo} from "./sections/HowTo/HowTo.jsx";
import { Attach } from "./sections/Attach/Attach";
import { useAuth } from "../../contexts/UserContext";
import { Categories } from "./sections/Categories/Categories";

const Accueil = () => {

  const {user} = useAuth();

  return (
    <main>
      <Attach user={user}/>
      {
        (!user || user.role !== 'artisan') && 
        <Categories/>
      }
      <HowTo/>
    </main>
  );
};

export default Accueil;
