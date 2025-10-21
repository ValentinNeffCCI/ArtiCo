import { LinkButton } from "../../../../components/buttons/Link/LinkButton";
import classes from "./Attach.module.css";
import perceuse from "../../../../assets/photos/Thijs_van_der_Weide/perceuse.jpg";

export const Attach = ({ user }) => {
  return (
    <div className={classes["attach"]}>
      <section>
        <h1>Trouvez l'artisan qui répond à vos besoins</h1>
        <div className={`${classes["subtitles"]} montserrat-bold`}>
          <p>Connectez-vous avec des artisans qualifiés près de chez vous.</p>
          <hr />
          <p>Une zone d'ombre, un doute, un projet déjà pensé ?</p>
          <hr />
          <p>Ils ne sont plus qu'à quelques clics</p>
          <div className={classes["links"]}>
            <LinkButton path="/rechercher" name="search">
              Je trouve mon artisan
            </LinkButton>
            {!user && (
              <LinkButton path="/connexion" name="artisan">
                Je suis un artisan
              </LinkButton>
            )}
          </div>
        </div>
      </section>
      <figure
        className={"hidden-mobile"}
        style={{
          width: "50%",
        }}
      >
        <img
          src={perceuse}
          alt="Perceuse"
          style={{
            width: "100%",
          }}
        />
        <figcaption
          style={{
            color: "var(--primary)",
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          Crédits : Thijs_van_der_Weide
        </figcaption>
      </figure>
    </div>
  );
};
