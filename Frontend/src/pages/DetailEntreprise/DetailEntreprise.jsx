import { NavLink, useParams } from "react-router-dom";
import classes from "./Detail.module.css";
import { useEffect, useState } from "react";
import useAPI from "../../hooks/useAPI";
import Loader from "../../components/UX/loaders/Loader";
import { Mail, MapPin, Phone } from "lucide-react";
import Visionneuse from "../../components/images/Visionneuse/Visionneuse";
import ReactMarkdown from "react-markdown";
import FormList from "../../components/forms/FormList/FormList";

const DetailEntreprise = () => {
  const { id } = useParams();
  const { query: callAPI, url: apiUrl } = useAPI();
  const [entreprise, setEntreprise] = useState(false);
  const [galerie, setGalerie] = useState([]);
  const [forms, setForms] = useState([]);

  const fetchEntreprise = async () => {
    const response = await callAPI("/entreprise/" + id);
    setEntreprise(response);
    setGalerie(
      response.photos
        ? [ response.image, ...response.photos.map(p=>p.path)]
        : response.image
    );
  };

  useEffect(() => {
    fetchEntreprise();
  }, [id]);

  if (!entreprise && galerie.length == 0) {
    return <Loader />;
  }

  const mapsAdress = () =>
    "https://www.google.com/maps/place/" +
    [
      entreprise.adress1?.replaceAll(" ", "+"),
      entreprise.cp,
      entreprise.city,
    ].join("+");

  const sanitizeDescription = (text) => {
    text = text.replaceAll(`<`, "<div");
    return text;
  };

  if(!entreprise) return <Loader/>;

  return (
    <main className={classes["main"]}>
      <h1>
        <span>{entreprise.name}</span>
      </h1>
      <div>
        <div className={classes["content"]}>
          <Visionneuse galerie={galerie} />
          <h2><span>Description de l'entreprise</span></h2>
          <div
            className={classes["description"]}
          ><ReactMarkdown>{entreprise.description ? sanitizeDescription(entreprise.description) : ""}</ReactMarkdown></div>
          <FormList forms={entreprise.formulaires} />
        </div>
        <div className={classes["contact"]}>
          {entreprise.address1 && (
            <div className={classes["adress"]}>
              <NavLink
                to={mapsAdress(entreprise.address1)}
                target="_blank"
                title="Voir sur Google Maps"
              >
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
          )}
          {entreprise.phone && entreprise.phone != "null" && (
            <div className={classes["phone"]}>
              <NavLink
                to={`tel:${entreprise.phone}`}
                target="_blank"
                title="Contacter par téléphone"
              >
                <Phone />
              </NavLink>
              <div>
                <span>{entreprise.phone}</span>
              </div>
            </div>
          )}
          <div className={classes["mail"]}>
            <NavLink
              to={`mailto:${entreprise.email}`}
              target="_blank"
              title="Contacter par mail"
            >
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
