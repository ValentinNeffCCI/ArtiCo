import { useEffect, useState, createContext, useContext } from "react";

const PositionContext = createContext();

export const PositionProvider = ({ children }) => {
  const [position, setPosition] = useState(null);

  const baseUrl =
    "https://geo.api.gouv.fr/communes?lat={latitude}&lon={longitude}&fields=code,nom,codesPostaux";

  const onLocalisationSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;

    let url = baseUrl.replace("{latitude}", latitude);
    url = url.replace("{longitude}", longitude);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.length !== 0) {
          const localisation = data[0];
          const returnValue = {
            ville: localisation.nom ?? "Paris",
            codesPostal: localisation.codesPostaux[0] ?? "75000",
          };
          setPosition(returnValue);
        } else {
          setPosition({
            ville: "Paris",
            codesPostal: "75000",
          });
        }
      })
      .catch((error) => {
        setPosition(null);
      });
  };

  const onLocalisationFailure = (error) => {
    setPosition(null);
  };

  const determineCity = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onLocalisationSuccess,
        onLocalisationFailure
      );
    } else {
      setPosition({
        ville: "Paris",
        codesPostal: "75000",
      });
    }
  };

  useEffect(() => {
    determineCity();
  }, []);

  return (
    <PositionContext.Provider value={position}>
      {children}
    </PositionContext.Provider>
  );
};

export const usePosition = () => {
  const context = useContext(PositionContext);
  if (context === undefined) {
    throw new Error("usePosition ne fonctionne que dans un provider");
  }
  return context;
};