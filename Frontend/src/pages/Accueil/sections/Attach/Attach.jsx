import { LinkButton } from "../../../../components/buttons/Link/LinkButton";
import classes from "./Attach.module.css";
import worker from "../../../../assets/mascotte/greeting_worker.png"

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
          width: "30%",
        }}
      >
        <img
          src={worker}
          alt="Ouvrier amicale"
          style={{
            width: "100%",
          }}
        />
      </figure>
    </div>
  );
};
