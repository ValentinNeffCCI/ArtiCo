import { useState, createContext, useContext } from "react";

const PositionContext = createContext();

export const PositionProvider = ({ children }) => {
  const [position, setPosition] = useState(null);
  const [isLocating, setIsLocating] = useState(false);

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
            ville: localisation.nom ?? "Strasbourg",
            codesPostal: localisation.codesPostaux[0] ?? "67000",
          };
          setPosition(returnValue);
        } else {
          setPosition(null);
        }
      })
      .catch(() => {
        setPosition(null);
      })
      .finally(() => {
        setIsLocating(false);
      });
  };

  const onLocalisationFailure = () => {
    setPosition(null);
    setIsLocating(false);
  };

  const requestPosition = () => {
    setIsLocating(true);
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
      setIsLocating(false);
    }
  };

  return (
    <PositionContext.Provider value={{ position, requestPosition, isLocating }}>
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
