import style from "./ResponseCard.module.css";
import { CustomButton } from "../../buttons/Custom/CustomButton";
import { DownloadIcon } from "lucide-react";

const ResponseCard = ({ reponse }) => {
  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString();
  };
  const getUserEmail = () => {
    return reponse.content[
      "Votre adresse mail afin de pouvoir être recontacté par le professionnel"
    ];
  };

  const formatDataToFile = () => {
    const data = {
      date: formatDate(reponse.submittedAt),
      "envoyé par": getUserEmail(),
      "nom du questionnaire": response.content.formulaire,
      réponses: Object.entries(reponse.content).map(([key, value]) => ({
        question: key,
        réponse: value,
      })),
    };
    return JSON.stringify(data);
  };

  // Export en json pour le moment, le formatage se fera via l'api avec (si le temps le permet) la possibilité de convertir en csv
  const exportFile = () => {
    const blob = new Blob([formatDataToFile()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${reponse.content.formulaire}-${reponse.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  function isDate(dateStr) {
    return !isNaN(new Date(dateStr).getDate());
  }

  return (
    <div className={style["card"]}>
      <p className={style["card-header"]}>
        <span className={style["card-header-date"]}>
          Le {formatDate(reponse.submittedAt)}
        </span>
        &nbsp;:&nbsp;
        <span className={style["card-header-user"]}>
          {getUserEmail()} à répondu
        </span>
      </p>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Reponse</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(reponse.content).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{isDate(value) ? new Date(value).toLocaleString() : value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={style["card-footer"]}>
        <CustomButton clickAction={exportFile} className={style["card-button"]}>
          <span>Exporter le contenu</span>
          <DownloadIcon />
        </CustomButton>
      </div>
    </div>
  );
};

export default ResponseCard;
