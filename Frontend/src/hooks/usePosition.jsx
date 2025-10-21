import {useEffect, useState, useRef} from "react";

const usePosition = () => {
    const [position, setPosition] = useState(false);
    const hasRequested = useRef(false);

    const baseUrl = "https://geo.api.gouv.fr/communes?lat={latitude}&lon={longitude}&fields=code,nom,codesPostaux";

    const onLocalisationSuccess = (position) => {
        const {latitude, longitude} = position.coords;

        let url = baseUrl.replace("{latitude}", latitude);
        url = url.replace("{longitude}", longitude);

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.length !== 0) {
                    const localisation = data[0];
                    const returnValue = {
                        ville: localisation.nom,
                        codesPostaux: localisation.codesPostaux
                    }
                    localStorage.setItem('GPS', JSON.stringify(returnValue));
                    setPosition(returnValue);
                }
            })
            .catch(error => {
                setPosition(false);
            });
    }

    const onLocalisationFailure = (error) => {
        setPosition(false);
    }

    const determineCity = () => {
        const GPS = localStorage.getItem('GPS')
        if(GPS) {
            setPosition(JSON.parse(GPS));
            return;
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                onLocalisationSuccess,
                onLocalisationFailure
            );
        } else {
            setPosition(false);
        }
    }

    useEffect(() => {
        if (!hasRequested.current) {
            hasRequested.current = true;
            determineCity();
        }
    }, [])

    return position;
}

export default usePosition;