import classes from "./HowTo.module.css";
import HandShake from '../../../../assets/photos/Sora_Shimazaki/handshake.jpg'

export const HowTo = () => {
  const actions = [
    {
      id: 1,
      description:
        "Je trouve l’artisan dont j’ai besoin pour réaliser mon projet",
    },
    {
      id: 2,
      description:
        "Je remplis son questionnaire afin d’avoir une réponse sur-mesure",
    },
    {
      id: 3,
      description: "J'attends que le professionnel me recontacte",
    },
  ];

  return (
    <section className={classes["howto"]}>
      <h3 className={"dangrek"}>Comment faire ?</h3>
      <div>
        <div className={classes["actions"]}>
          {actions.map((action) => (
            <div key={action.id} className={classes["action"]}>
              <div className={classes["action_index"]}>{action.id}</div>
              <p>{action.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
