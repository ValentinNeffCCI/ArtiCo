import { useEffect, useState, useRef } from "react";

const usePosition = () => {
  const [position, setPosition] = useState(false);

  const baseUrl =
    "https://geo.api.gouv.fr/communes?lat={latitude}&lon={longitude}&fields=code,nom,codesPostaux";

  const onLocalisationSuccess = (position) => {
    const { latitude, longitude } = position.coords;

    let url = baseUrl.replace("{latitude}", latitude);
    url = url.replace("{longitude}", longitude);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.length !== 0) {
          const localisation = data[0];
          const returnValue = {
            ville: localisation.nom ?? "Paris",
            codesPostal: localisation.codesPostaux[0] ?? '75000'
          };
          localStorage.setItem("GPS", JSON.stringify(returnValue));
          setPosition(returnValue);
        }
      })
      .catch((error) => {
        setPosition({
            ville: "Paris",
            codesPostal: 75000
          });
      });
  };

  const onLocalisationFailure = (error) => {
    setPosition(false);
  };

  const determineCity = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onLocalisationSuccess,
        onLocalisationFailure
      );
    } else {
      setPosition(false);
    }
    return position;
  };

  return determineCity;
};

export default usePosition;
