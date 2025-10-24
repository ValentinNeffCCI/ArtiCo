import { useAuth } from "../../contexts/UserContext";
import style from "./rechercher.module.css";
import usePosition from "../../hooks/usePosition";
import { Suspense, useEffect, useState } from "react";
import CardSkeleton from "../../components/skeleton/CardSkeleton";

const RechercherEntreprise = () => {
  const { user } = useAuth();
  const position = usePosition();

  return (
    <main className={style.rechercher}>
      <h1>Rechercher une entreprise</h1>
      {JSON.stringify(position)}
      <Suspense fallback={<CardSkeleton/>}>
      </Suspense>
    </main>
  );
};

export default RechercherEntreprise;
