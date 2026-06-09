import { useState } from "react";
import style from "./ResponseCard.module.css";
import { CustomButton } from "../../buttons/Custom/CustomButton";
import { DownloadIcon } from "lucide-react";

const ResponseCard = ({ reponse }) => {
  const [format, setFormat] = useState("json");

  const formatDate = (date) => {
    const d = new Date(date);
    return isNaN(d.getTime()) ? "Date inconnue" : d.toLocaleDateString();
  };
  const getUserEmail = () => {
    return reponse.content[
      "Votre adresse mail afin de pouvoir être recontacté par le professionnel"
    ];
  };

  const buildExportData = () => ({
    date: formatDate(reponse.submittedAt),
    "envoyé par": getUserEmail(),
    "nom du questionnaire": reponse.formulaire.name,
    réponses: Object.entries(reponse.content).map(([key, value]) => ({
      question: key,
      réponse: Array.isArray(value) ? value.join(", ") : value,
    })),
  });

  const toJSON = () => JSON.stringify(buildExportData(), null, 2);

  const escapeCsv = (value) => {
    const str = String(value ?? "");
    return /[";\n]/.test(str) ? `"${str.replace(/"/g, '""')}"` : str;
  };

  const toCSV = () => {
    const data = buildExportData();
    const rows = [
      ["Champ", "Valeur"],
      ["Date", data.date],
      ["Envoyé par", data["envoyé par"]],
      ["Nom du questionnaire", data["nom du questionnaire"]],
      ...data.réponses.map(({ question, réponse }) => [question, réponse]),
    ];
    // BOM pour qu'Excel lise correctement les accents en UTF-8
    return "﻿" + rows.map((r) => r.map(escapeCsv).join(";")).join("\n");
  };

  const exportFile = () => {
    const isCsv = format === "csv";
    const blob = new Blob([isCsv ? toCSV() : toJSON()], {
      type: isCsv ? "text/csv;charset=utf-8" : "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${reponse.formulaire.name}-${reponse.id}.${format}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Ne traite comme date que les valeurs au format ISO (ex: 2024-01-01...),
  // pour éviter de coercer des réponses (nombres, téléphones) en "Invalid Date".
  const isDate = (value) => {
    if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}/.test(value)) {
      return false;
    }
    return !isNaN(new Date(value).getTime());
  };

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
        <select
          className={style["card-format"]}
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          aria-label="Format d'export"
        >
          <option value="json">JSON</option>
          <option value="csv">CSV</option>
        </select>
        <CustomButton clickAction={exportFile} className={style["card-button"]}>
          <span>Exporter le contenu</span>
          <DownloadIcon />
        </CustomButton>
      </div>
    </div>
  );
};

export default ResponseCard;
