import React, { Fragment, useEffect, useRef, useState } from "react";
import useAPI from "../../../hooks/useAPI";
import GaleriePhoto from "./GaleriePhoto";
import { CustomButton } from "../../buttons/Custom/CustomButton";
import { Plus } from "lucide-react";
import Loader from "../../UX/loaders/Loader";

const ManageGalerie = ({ entrepriseId = false }) => {
  const [galerie, setGalerie] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const url =
    import.meta.env.VITE_ENV_MODE == "demo"
      ? 
      "/galeries?entreprise_id=" + entrepriseId
      :
      "/galeries/" + entrepriseId;

  const { query: callAPI } = useAPI();

  const fileInputRef = useRef();

  const getPhotos = async () => {
    const response = await callAPI(url, "GET");
    if (response) {
      setGalerie(response);
    }
  };

  const spliceGalerie = (id) => {
    setGalerie((prev) => prev.filter((photo) => photo.id != id));
  };

  const onFileChoice = async (e) => {
    const { files } = e.target;
    setIsLoading(true);
    try {
      if (import.meta.env.VITE_ENV_MODE == "demo") {
        for (let i = 0; i < files.length; i++) {
          let response = await callAPI("/galeries", "POST", {
            entreprise_id: entrepriseId,
            path: "/perceuse.jpg",
          });
          if (response) {
            setGalerie((prev) => [...prev, response]);
          }
        }
      } else {
        const formData = new FormData();
        formData.append("photos", files);
        formData.append("entreprise_id", entrepriseId);
        const response = await callAPI("/galeries/new");
        if (response) {
          setGalerie((prev) => [...prev, ...response]);
        }
      }
    } catch (error) {
      if (import.meta.env.VITE_ENV_MODE !== "prod") {
        console.error(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const similiLabel = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    getPhotos();
  }, []);
  return (
    <div
      style={{
        width: "20%",
        margin: "0 5%",
        padding: "1rem",
        borderLeft: "2px solid var(--primary)",
      }}
    >
      {isLoading && <Loader />}
      <h2 className="dangrek text-center">Galerie de photos</h2>
      {/* todo: Ajouter photos galerie */}
      {galerie && galerie.length != 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 25,
            padding: 15,
          }}
        >
          {galerie.map((photo) => (
            <GaleriePhoto
              key={photo.id}
              photo={photo}
              onClick={spliceGalerie}
            />
          ))}
        </div>
      ) : (
        <div className="text-center p-3">
          Les photos de votre galerie s'afficheront ici
        </div>
      )}
      <CustomButton
        style={{
          display: "flex",
          gap: ".2rem",
          alignItems: "center",
          "--bg-color": "var(--primary)",
          "--color": "var(--light)",
          fontSize: ".8rem",
        }}
        clickAction={similiLabel}
      >
        <span>Ajouter</span>
        <Plus />
      </CustomButton>
      <input
        type="file"
        name="photo"
        id="photo"
        ref={fileInputRef}
        multiple={true}
        style={{
          width: 0.1,
          height: 0.1,
          zIndex: -1,
        }}
        onChange={onFileChoice}
      />
    </div>
  );
};

export default ManageGalerie;
