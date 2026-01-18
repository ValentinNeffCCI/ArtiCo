import {HowTo} from "./sections/HowTo/HowTo.jsx";
import { Attach } from "./sections/Attach/Attach";
import { useAuth } from "../../contexts/UserContext";
import { Categories } from "./sections/Categories/Categories";
import CookieModale from "../../components/modales/Cookies/CookieModale.jsx";

const Accueil = () => {

  const {user} = useAuth();

  return (
    <main>
      <Attach user={user}/>
      <Categories/>
      <HowTo/>
      <CookieModale/>
    </main>
  );
};

export default Accueil;
