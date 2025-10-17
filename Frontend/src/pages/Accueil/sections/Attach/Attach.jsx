import { LinkButton } from "../../../../components/buttons/LinkButton";
import classes from "./Attach.module.css";

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
          <div className={classes["links"]}></div>
          <LinkButton path="/search" name="search">
            Je trouve mon artisan
          </LinkButton>
          {!user && (
            <LinkButton path="/login" name="artisan">
              Je suis un artisan
            </LinkButton>
          )}
        </div>
      </section>
    </div>
  );
};
