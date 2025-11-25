import React from "react";
import { CustomButton } from "../../buttons/Custom/CustomButton";
import { X } from "lucide-react";
import useAPI from "../../../hooks/useAPI";

const GaleriePhoto = ({ photo, onClick }) => {
  const { query: callAPI } = useAPI();

  const handleDelete = async () => {
    const response = await callAPI("/galeries/" + photo.id, "DELETE");
    if (response) {
      onClick(photo.id);
    }
  };

  return (
    <figure
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <img src={photo.path} alt="réalisation de l'entreprise" width={"70%"} style={{aspectRatio: 4/3, borderRadius: 10}}/>
      <CustomButton
        style={{
          margin: 0,
          "--bg-color": "red",
          "--color": "var(--light)",
          height: "fit-content",
          width: "fit-content",
          padding: 2,
          display: "flex",
        }}
        clickAction={handleDelete}
      >
        <X />
      </CustomButton>
    </figure>
  );
};

export default GaleriePhoto;
