import React from "react";
import { useAuth } from "../../contexts/UserContext";
import { Attach } from "./sections/Attach/Attach";
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
    </main>
  );
};

export default Accueil;
