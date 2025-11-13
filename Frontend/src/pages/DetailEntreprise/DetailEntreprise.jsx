import { NavLink, useParams } from "react-router-dom";
import classes from "./Detail.module.css";
import { useEffect, useState } from "react";
import useAPI from "../../hooks/useAPI";
import Loader from "../../components/UX/loaders/Loader";
import { Mail, MapPin, Phone } from "lucide-react";
import defaultImage from "../../assets/photos/Sora_Shimazaki/handshake.jpg";
import Visionneuse from "../../components/images/Visionneuse/Visionneuse";
import { filters } from "./filters";
import FormList from "../../components/forms/FormList/FormList";

const DetailEntreprise = () => {
  const { id } = useParams();
  const { query: callAPI } = useAPI();
  const [entreprise, setEntreprise] = useState(false);
  const [galerie, setGalerie] = useState([]);
  const [forms, setForms] = useState([]);

  const getGalerie = async () => {
    const url =
      import.meta.env.VITE_ENV_MODE == "demo"
        ? "/galeries?entreprise_id=" + id
        : "/galerie/" + id;
    const response = await callAPI(url);
    if (response) {
      setGalerie([
        entreprise.image ?? defaultImage,
        ...response.map((element) => element.path ?? defaultImage),
      ]);
    }
  };

  const fetchEntreprise = async () => {
    const response = await callAPI("/entreprises/" + id);
    setEntreprise(response);
    getGalerie();
    getForms();
  };

  const getForms = async () => {
    const response = await callAPI('/formulaires?entreprise_id='+id)
    setForms(response)
  }

  useEffect(() => {
    fetchEntreprise();
  }, [id]);

  if (!entreprise && galerie.length == 0) {
    return <Loader />;
  }

  const mapsAdress = () =>
    "https://www.google.com/maps/place/" +
    [
      entreprise.adress1.replaceAll(" ", "+"),
      entreprise.cp,
      entreprise.city,
    ].join("+");

  const sanitizeDescription = (text) => {
    filters.forEach((filter) => {
      text = text.replaceAll(`<${filter}`, "<div");
      text = text.replaceAll(`</${filter}`, "</div");
      text = text.replaceAll(`<${filter}/>`, "");
    });
    return text;
  };

  return (
    <main className={classes["main"]}>
      <h1>
        <span>{entreprise.name}</span>
      </h1>
      <div>
        <div className={classes["content"]}>
          <Visionneuse galerie={galerie} />
          <div
            className={classes["description"]}
            dangerouslySetInnerHTML={{
              __html: sanitizeDescription(entreprise.description),
            }}
          ></div>
            <FormList forms={forms}/>
        </div>
          <div className={classes["contact"]}>
            <div className={classes["adress"]}>
              <NavLink to={mapsAdress(entreprise.adress1)} target="_blank">
                <MapPin />
              </NavLink>
              <div>
                <span>{entreprise.adress1}</span>
                <span>
                  {entreprise.cp}&nbsp;
                  {entreprise.city}
                </span>
              </div>
            </div>
            <div className={classes["phone"]}>
              <NavLink to={`tel:${entreprise.phone}`} target="_blank">
                <Phone />
              </NavLink>
              <div>
                <span>{entreprise.phone}</span>
              </div>
            </div>
            <div className={classes["mail"]}>
              <NavLink to={`mailto:${entreprise.email}`} target="_blank">
                <Mail />
              </NavLink>
              <div>
                <span>{entreprise.email}</span>
              </div>
            </div>
          </div>
      </div>
    </main>
  );
};

export default DetailEntreprise;
